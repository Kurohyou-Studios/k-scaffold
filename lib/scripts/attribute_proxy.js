/*jshint esversion: 11, laxcomma:true, eqeqeq:true*/
/*jshint -W014,-W084,-W030,-W033*/

//# Attribute Obj Proxy handler
const createAttrProxy = function(attrs,sections,casc){
  //creates a proxy for the attributes object so that values can be worked with more easily.
  const getCascObj = function(event){
    const eventName = event.triggerName || event.sourceAttribute;
    let typePrefix = eventName.startsWith('clicked:') ?
      'act_' :
      event.removedInfo ?
      'fieldset_' :
      'attr_';
    let cascName = `${typePrefix}${eventName.replace(/(?:removed?|clicked):/,'')}`;
    let cascObj = casc[cascName];
    k.debug({[cascName]:cascObj});
    if(event && cascObj){
      if(event.previousValue){
        cascObj.previousValue = event.previousValue;
      }else if(event.originalRollId){
        cascObj.originalRollId = event.originalRollId;
        cascObj.rollData = RE.unescape(event.originalRollId);
      }
    }
    return cascObj || {};
  };
  
  const triggerFunctions = function(obj){
    if(obj.triggeredFuncs && obj.triggeredFuncs.length){
      debug(`triggering functions for ${obj.name}`);
      obj.triggeredFuncs && obj.triggeredFuncs.forEach(func=>funcs[func] ? 
        funcs[func]({trigger:obj,attributes,sections,casc}) :
        debug(`!!!Warning!!! no function named ${func} found. Triggered function not called for ${obj.name}`,true));
    }
  };
  
  const initialFunction = function(obj){
    if(obj.initialFunc){
      debug(`initial functions for ${obj.name}`);
      funcs[obj.initialFunc] ?
        funcs[obj.initialFunc]({trigger:obj,attributes,sections}) :
        debug(`!!!Warning!!! no function named ${obj.initialFunc} found. Initial function not called for ${obj.name}`,true);
    }
  };
  const alwaysFunctions = function(trigger){
    Object.values(allHandlers).forEach((handler)=>{
      handler({trigger,attributes,sections,casc});
    });
  };
  const processChange = function({event,trigger}){
    if(event && !trigger){
      debug(`${event.sourceAttribute} change detected. No trigger found`);
      return;
    }
    if(!attributes || !sections || !casc){
      debug(`!!! Insufficient arguments || attributes > ${!!attributes} | sections > ${!!sections} | casc > ${!!casc} !!!`);
      return;
    }
    debug({trigger});
    if(event){
      debug('checking for initial & always functions');
      if(Array.isArray(trigger.affects)){
        attributes.queue.push(...trigger.affects);
      }
      alwaysFunctions(trigger,attributes,sections,casc);//Functions that should be run for all events.
      initialFunction(trigger,attributes,sections,casc);//functions that should only be run if the attribute was the thing changed by the user

    }
    if(trigger){
      debug(`processing ${trigger.name}`);
      triggerFunctions(trigger,attributes,sections,casc);
      if(!event){
        // Handle autocalc formula
        if(trigger.formula){
          attributes[trigger.name] = parseKFormula({trigger,attributes,sections,casc});
        }
        // handle calculation of element
        if(
          trigger.calculation &&
          funcs[trigger.calculation]
        ){
          attributes[trigger.name] = funcs[trigger.calculation]({trigger,attributes,sections,casc});
        }else if(trigger.calculation && !funcs[trigger.calculation]){
          debug(`K-Scaffold Error: No function named ${trigger.calculation} found`);
        }
      }
    }
    attributes.set();
  };
  const attrTarget = {
    updates:{},
    attributes:{...attrs},
    repOrders:{},
    queue: [],
    casc:{},
    alwaysFunctions,
    processChange,
    triggerFunctions,
    initialFunction,
    getCascObj
  };
  const attrHandler = {
    get:function(obj,prop){//gets the most value of the attribute.
      //If it is a repeating order, returns the array, otherwise returns the update value or the original value
      if(prop === 'set'){
        return function(){
          let {callback,vocal} = arguments[0] ? arguments[0] : {};
          if(sections && casc && attributes.queue.length){
            const triggerName = attributes.queue.shift();
            const trigger = getCascObj({sourceAttribute:triggerName});
            processChange({trigger,attributes,sections,casc});
          }else{
            debug({updates:obj.updates});
            const trueCallback = Object.keys(obj.repOrders).length ?
              function(){
                Object.entries(obj.repOrders).forEach(([section,order])=>{
                  _setSectionOrder(section,order)
                });
                callback && callback();
              }:
              callback;
            Object.keys(obj.updates).forEach((key)=>obj.attributes[key] = obj.updates[key]);
            const update = obj.updates;
            obj.updates = {};
            set(update,vocal,trueCallback);
          }
        }
      }else if(Object.keys(obj).some(key=>key===prop)){ 
        return Reflect.get(...arguments)
      }else{
        let retValue;
        switch(true){
          case obj.repOrders.hasOwnProperty(prop):
            retValue = obj.repOrders[prop];
            break;
          case obj.updates.hasOwnProperty(prop):
            retValue = obj.updates[prop];
            break;
          default:
            retValue = obj.attributes[prop];
            break;
        }
        let cascRef = `attr_${prop.replace(/(repeating_[^_]+_)[^_]+/,'$1\$X')}`;
        let numRetVal = +retValue;
        if(!Number.isNaN(numRetVal) && retValue !== ''){
          retValue = numRetVal;
        }else if(cascades[cascRef] && (typeof cascades[cascRef].defaultValue === 'number' || cascades[cascRef].type === 'number')){
          retValue = cascades[cascRef].defaultValue;
        }
        return retValue;
      }
    },
    set:function(obj,prop,value){
      //Sets the value. Also verifies that the value is a valid attribute value
      //e.g. not undefined, null, or NaN
      if(value || value===0 || value===''){
        if(/reporder|^repeating_[^_]+$/.test(prop)){
          let section = prop.replace(/_reporder_/,'');
          obj.repOrders[section] = value;
        }else if(`${obj.attributes}` !== `${value}` || 
          (obj.updates[prop] && `${obj.updates}` !== `${value}`)
        ){
          if(sections && casc){
            const trigger = getCascObj({sourceAttribute:prop});
            if(Array.isArray(trigger.affects)){
              attributes.queue.push(...trigger.affects);
            }
          }
          obj.updates[prop] = value;
        }
      }else{
        debug(`!!!Warning: Attempted to set ${prop} to an invalid value:${value}; value not stored!!!`);
      }
      return true;
    },
    deleteProperty(obj,prop){
      //removes the property from the original attributes, updates, and the reporders
      Object.keys(obj).forEach((key)=>{
        delete obj[key][prop.toLowerCase()];
      });
    }
  };
  const attributes = new Proxy(attrTarget,attrHandler);
  return attributes;
};

/**
 * Function that registers a function for being called via the funcs object. Returns true if the function was successfully registered, and false if it could not be registered for any reason.
 * @memberof Utilities
 * @param {object} funcObj - Object with keys that are names to register functions under and values that are functions.
 * @param {object} optionsObj - Object that contains options to use for this registration.
 * @param {string[]} optionsObj.type - Array that contains the types of specialized functions that apply to the functions being registered. Valid types are `"opener"`, `"updater"`, and `"default"`. `"default"` is always used, and never needs to be passed.
 * @returns {boolean} - True if the registration succeeded, false if it failed.
 * @example
 * //Basic Registration
 * const myFunc = function({trigger,attributes,sections,casc}){};
 * k.registerFuncs({myFunc});
 * 
 * //Register a function to run on sheet open
 * const openFunc = function({trigger,attributes,sections,casc}){};
 * k.registerFuncs({openFunc},{type:['opener']})
 * 
 * //Register a function to run on all events
 * const allFunc = function({trigger,attributes,sections,casc}){};
 * k.registerFuncs({allFunc},{type:['all']})
 */
const registerFuncs = function(funcObj,optionsObj = {}){
  if(typeof funcObj !== 'object' || typeof optionsObj !== 'object'){
    debug(`!!!! K-scaffold error: Improper arguments to register functions !!!!`);
    return false;
  }
  const typeArr = optionsObj.type ? ['default',...optionsObj.type] : ['default'];
  const typeSwitch = {
    'opener':openHandlers,
    'updater':updateHandlers,
    'new':initialSetups,
    'all':allHandlers,
    'default':funcs
  };
  let setState;
  Object.entries(funcObj).map(([prop,value])=>{
    typeArr.forEach((type)=>{
      if(typeSwitch[type][prop]){
        debug(`!!! Duplicate function name for ${prop} as ${type}!!!`);
        setState = false;
      }else if(typeof value === 'function'){
        typeSwitch[type][prop] = value;
        setState = setState !== false ? true : false;
      }else{
        debug(`!!! K-scaffold error: Function registration requires a function. Invalid value to register as ${type} !!!`);
        setState = false;
      }
    });
  });
  return setState;
};
kFuncs.registerFuncs = registerFuncs;

/**
 * Function that sets up the action calls used in the roller mixin.
 * @memberof Sheetworkers
 * @param {object} attributes - The attribute values of the character
 * @param {object[]} sections - All the repeating section IDs
 */
const setActionCalls = function({attributes,sections}){
  actionAttributes.forEach((base)=>{
    let [section,,field] = k.parseTriggerName(base);
    let fieldAction = field.replace(/_/g,'-');
    if(section){
      sections[section].forEach((id)=>{
        attributes[`${section}_${id}_${field}`] = `%{${attributes.character_name}|${section}_${id}_${fieldAction}}`;
      });
    }else{
      attributes[`${field}`] = `%{${attributes.character_name}|${fieldAction}}`;
    }
  });
};
funcs.setActionCalls = setActionCalls;
kFuncs.setActionCalls = setActionCalls;


/**
 * Function that reduces Roll20 macro syntax formulas down to their calculated value.
 * @memberof Sheetworkers
 * @param {object} attributes - The attribute values of the character
 * @param {object[]} sections - All the repeating section IDs
 */
const parseKFormula = ({trigger,attributes,sections,casc}) => {
  const [baseSection,rowID,attrName] = parseTriggerName(trigger.name);
  const repeatBlockRx = baseSection ?
    /(@{repeating_.+?_\$X_.+?})/g :
    /={([^)]*repeating_[^_]+[^)]*)}=/g;
  let mutFormula = trigger.formula;
  mutFormula = mutFormula.replace(repeatBlockRx,(match,repeatMacro) => {
    const [section] = repeatMacro.match(/repeating_[^_]+/);
    const idArray = baseSection ?
      [rowID] :
      sections[section];
    return idArray.map(id => {
        return `(${repeatMacro.replace(/repeating_[^_]+?_[^_]+?_([^}]+)/g,`${section}_${id}_$1`)})`;
      }).join(
        trigger.type === 'number' ?
          ' + ' :
          ''
      );
  });
  mutFormula = parseMacro(mutFormula,attributes)
    .replace(/@{.+?}/g,'0');
  const mathKeys = ['floor','ceil','round','abs'];
  mathKeys.forEach(func => mutFormula = mutFormula.replace(new RegExp(`${func}\\(`,'g'),`Math.${func}(`));
  const mathRx = new RegExp(`Math\\.(?:${mathKeys.join('|')})`,'g');
  let noAlphaStr = mutFormula
    .replace(mathRx,'');
  return trigger.type !== 'text' ?
    (
      !noAlphaStr.match(/[a-z]/i) ?
        eval(mutFormula) :
        undefined
    ) :
    mutFormula;
};
funcs.parseKFormula = parseKFormula;
kFuncs.parseKFormula = parseKFormula;

/**
 * Function to call a function previously registered to the funcs object. May not be used that much in actual sheets, but very useful when writing unit tests for your sheet. Either returns the function or null if no function exists.
 * @memberof Sheetworkers
 * @param {string} funcName - The name of the function to invoke.
 * @param {...any} args - The arguments to call the function with.
 * @returns {function|null}
 * @example
 * //Call myFunc with two arguments
 * k.callFunc('myFunc','an argument','another argument');
 */
const callFunc = function(funcName,...args){
  if(funcs[funcName]){
    debug(`calling ${funcName}`);
    return funcs[funcName](...args);
  }else{
    debug(`Invalid function name: ${funcName}`);
    return null;
  }
};
kFuncs.callFunc = callFunc;
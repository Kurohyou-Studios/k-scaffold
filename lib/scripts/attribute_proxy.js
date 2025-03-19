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
    if(kFuncs.verboseMode){
      debug({[cascName]:cascObj});
    }
    if(event && cascObj){
      Object.assign(cascObj,event);
      if(event.originalRollId){
        cascObj.rollData = RE.unescape(event.originalRollId);
      }
    }
    return cascObj || {};
  };
  
  const triggerFunctions = function(obj){
    if(obj.triggeredFuncs && obj.triggeredFuncs.length){
      if(kFuncs.verboseMode){
        debug(`triggering functions for ${obj.name}`);
      }
      obj.triggeredFuncs && obj.triggeredFuncs.forEach(func=>funcs[func] ? 
        funcs[func]({trigger:obj,attributes,sections,casc}) :
        debug(`!!!Warning!!! no function named ${func} found. Triggered function not called for ${obj.name}`,true));
    }
  };
  
  const initialFunction = function(obj){
    if(obj.initialFunc){
      if(kFuncs.verboseMode){
        debug(`initial functions for ${obj.name}`);
      }
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
    if(kFuncs.verboseMode){
      debug({trigger});
    }
    if(event){
      if(Array.isArray(trigger.affects)){
        attributes.queue.push(...trigger.affects);
      }
      alwaysFunctions(trigger,attributes,sections,casc);//Functions that should be run for all events.
      initialFunction(trigger,attributes,sections,casc);//functions that should only be run if the attribute was the thing changed by the user

    }
    if(trigger){
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
  const repeatObjects = {};
  const repeatTargetObjects = {};
  const repeatHandler = {
    get:function(obj,prop){
      const row = `${obj._section}_${obj._id}`;
      if(prop === '_isProxy'){
        return true;
      }
      if(prop === 'toJSON'){
        return () => {
          return Object.keys(obj).reduce((o,k) => {
            o[k] = attributes[`${row}_${k}`];
            return o;
          },{_id: obj._id,_section: obj._section});
        }
      }
      return obj[prop];
    },
    set: function(obj,prop,value){
      if(prop === '_id' || prop === '_section'){
        throw new Error(`!!!Warning: cannot change the id or section of a repeating object!!!`);
      }else if( prop === '_index'){
        throw new Error(`!!!Warning: Cannot reorder sections by setting the _index. Sort the repeating array or use k.setSectionOrder!!!`);
      }
      const fullRef = `${obj._section}_${obj._id}_${prop}`;
      attributes[fullRef] = value;
      obj[prop] = value;
    }
  };
  const repeatArrHandler = {
    get(arr,prop){
      if(prop === '_isProxy'){
        return true;
      }
      if(
        prop === 'fill' ||
        prop === 'shift' ||
        prop === 'pop' ||
        prop === 'unshift' ||
        prop === 'splice'
      ){
        throw new Error(`The ${prop} method is not allowed on section arrays`);
      }
      if(prop === 'create'){
        return function(){
          const argArray = [...arguments];
          const custom = argArray.find(e => typeof e === 'string');
          const data = argArray.find(e => typeof e === 'object' && !Array.isArray(e));

          const row = _generateRowID(arr._section,sections,custom);
          const id = row.replace(/repeating_[^_]+_/,'');
          arr[id] = createRepeatObj(arr._section,id);
          arr.push(arr[id]);
          if(data){
            Object.entries(data).forEach(([key,value]) => {
              if(arr[id].hasOwnProperty(key)){
                arr[id][key] = value;
              }else{
                debug(`!!!Warning: no input exists in ${obj._section} for the attribute "${key}"!!!`);
              }
            });
          }
          return arr[id];
        }
      }
      if(prop === 'move'){
        return function(){
          const ref = arguments[0];
          const targ = arguments[1];
          const vocal = !arguments[2]
          // TODO: add protection for missing arguments
          let id;
          let index;
          if(sections[arr._section].includes(ref)){
            id = ref;
            index = sections[arr._section].indexOf(id);
          }else if(!Number.isNaN(ref)){
            index = ref;
            id = sections[arr._section][index];
          }
          if(
            !Number.isNaN(index) &&
            id &&
            !Number.isNaN(targ)
          ){
            const obj = arr.splice(index,1);
            arr.splice(targ,0,obj);
            sections[arr._section].splice(index,1);
            sections[arr._section].splice(targ,0,id);
            if(vocal){
              _setSectionOrder(arr._section,sections[arr._section]);
            }
          }
        }
      }
      if(prop === 'sort'){
        return function(){
          const callback = arguments[0];
          const vocal = !arguments[1];
          sections[arr._section].sort((a,b) => {
            const aObj = arr[a];
            const bObj = arr[b];
            const sortResult = callback(aObj,bObj);
            return sortResult;
          });
          arr.sort((a,b) => {
            const aIndex = sections[arr._section].indexOf(a._id);
            const bIndex = sections[arr._section].indexOf(b._id);
            return aIndex - bIndex;
          });
          // if not a silent sort, then apply the reordered section to the sheet via setSectionOrder
          if(vocal){
            _setSectionOrder(arr._section,sections[arr._section]);
          }
          return arr;
        }
      }
      if(arr[prop] || Number.isNaN(prop)){
        return Reflect.get(...arguments);
      }
      if(sections[arr._section].includes(prop)){
        arr[prop] = createRepeatObj(arr._section,prop);
        arr.push(arr[prop]);
        return arr[prop];
      }
    },
    set(obj,prop,value){
      if(prop === 'section'){
        throw new Error('!!!Warning: Section property of a repeating section is readonly!!!')
      }
    },
    deleteProperty(arr,prop){
      if(
        !prop.startsWith('_') &&
        arr[prop] &&
        arr[prop]._isProxy
      ){
        let id;
        let index;
        if(typeof prop === 'string' && prop.startsWith('-')){
          id = prop;
          index = sections[arr._section].indexOf(id);
        }else{
          index = prop;
          id = arr[index]._id;
        }
        delete arr[id];
        arr.splice(index,1);
        sections[section].splice(index,1);
        const row = `${arr._section}_${id}`;
        removeRepeatingRow(row);
      }
    }
  };
  const createRepeatObj = (prop,id) => {
    const row = `${prop}_${id}`;
    const fields = repeatingSectionDetails.find(o => o.section === prop).fields;
    const retObj = fields.reduce((o,field) => {
      o[field] = attributes[`${row}_${field}`];
      return o;
    },{_id:id,_section: prop})
    repeatTargetObjects[prop] = repeatTargetObjects[prop] || {};
    repeatTargetObjects[prop][id] = retObj;
    return new Proxy(retObj,repeatHandler);
  }
  const attrHandler = {
    get:function(obj,prop){//gets the most value of the attribute.
      if(prop === '_isProxy'){
        return true;
      }
      if(prop === 'toJSON'){
        return () => ({...obj.attributes,...obj.updates});
      }else if(prop === 'set'){
        return function(){
          let {callback,vocal} = arguments[0] ? arguments[0] : {};
          if(sections && casc && attributes.queue.length){
            const triggerName = attributes.queue.shift();
            const trigger = getCascObj({sourceAttribute:triggerName});
            processChange({trigger,attributes,sections,casc});
          }else{
            if(kFuncs.verboseMode){
              debug({updates:obj.updates});
            }
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
      }else if(/^repeating_[^_]+$/.test(prop)){
        // if it's been lazy loaded, use it
        if(!repeatObjects[prop]){
          // otherwise lazy load it
          const baseArr = [];
          baseArr._section = prop;
          repeatObjects[prop] = new Proxy(sections[prop].reduce((arr,id,i) => {
            const rowObj = createRepeatObj(prop,id,i);
            arr.push(rowObj);
            arr[id] = rowObj;
            return arr;
          },baseArr),repeatArrHandler);
        }
        return repeatObjects[prop];
      }else if(Object.keys(obj).some(key=>key===prop)){ 
        return Reflect.get(...arguments)
      }else{
        let retValue;
        switch(true){
          case /^repeating_[^_]+$/.test(prop):
            const attrTemplates = Object.keys(cascades)
              .filter(a => a.startsWith(`attr_${prop}`));
              
            return sections[prop].reduce((m,id) => {
              const attrObj = attrTemplates.reduce((o,k) => {
                const attrRef = k
                  .replace(/attr_/,'')
                  .replace(/\$x/i,id);
                const attrName = k.replace(/attr_repeating_[^_]+_[^_]+_/,'');
                o[attrName] = attributes[attrRef];
                return o;
              },{_id: id});
              m.push(attrObj);
              m[id] = attrObj;
              return m;
            },[]);
            break;
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
        let cascRef = `attr_${prop.replace(/(repeating_[^_]+_)[^_]+/,'$1\$X')}`.toLowerCase();
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
        if(/reporder/.test(prop)){
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
          const repRx = /^(repeating_[^_]+)_([^_]+)_(.+)$/;
          if(repRx.test(prop)){
            const [,section,rowID,field] = prop.match(repRx);
            if(repeatObjects[section]){
              repeatObjects[section][rowID] = repeatObjects[section][rowID] || createRepeatObj(section,rowID);
              repeatTargetObjects[section][rowID][field] = value;
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
    if(kFuncs.verboseMode){
      debug(`calling ${funcName}`);
    }
    return funcs[funcName](...args);
  }else{
    debug(`Invalid function name: ${funcName}`);
    return null;
  }
};
kFuncs.callFunc = callFunc;
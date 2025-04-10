/**@namespace Sheetworkers */
/*jshint esversion: 11, laxcomma:true, eqeqeq:true*/
/*jshint -W014,-W084,-W030,-W033*/
//Sheet Updaters and styling functions
/**
 * Function that calls the K-scaffold's update and sheet initialization routines.
 */
const updateSheet = function(){
  log('updating sheet');
  getAllAttrs({props:['debug_mode',...baseGet],callback:(attributes,sections,casc)=>{
    kFuncs.debugMode = kFuncs.debugMode || !!attributes.debug_mode;
    if(kFuncs.verboseMode){
      debug({sheet_version:attributes.sheet_version});
    }
    if(!attributes.sheet_version){
      Object.entries(initialSetups).forEach(([funcName,handler])=>{
        if(typeof funcs[funcName] === 'function'){
          if(kFuncs.verboseMode){
            debug(`running ${funcName}`);
          }
          funcs[funcName]({attributes,sections,casc});
        }else{
          if(kFuncs.verboseMode){
            debug(`!!!Warning!!! no function named ${funcName} found. Initial sheet setup not performed.`);
          }
        }
      });
    }else{
      Object.entries(updateHandlers).forEach(([ver,handler])=>{
        if(attributes.sheet_version < +ver){
          handler({attributes,sections,casc});
        }
      });
    }
    if(kFuncs.verboseMode){
      debug({openHandlers});
    }
    Object.entries(openHandlers).forEach(([funcName,func])=>{
      if(typeof funcs[funcName] === 'function'){
        if(kFuncs.verboseMode){
          debug(`running ${funcName}`);
        }
        funcs[funcName]({attributes,sections,casc});
      }else{
        if(kFuncs.verboseMode){
          debug(`!!!Warning!!! no function named ${funcName} found. Sheet open handling not performed.`);
        }
      }
    });
    setActionCalls({attributes,sections});
    attributes.sheet_version = kFuncs.version;
    log(`Sheet Update applied. Current Sheet Version ${kFuncs.version}`);
    attributes.set();
    log('Sheet ready for use');
  }});
};
kFuncs.updateSheet = updateSheet;

const initialSetup = function(attributes,sections){
  if(kFuncs.verboseMode){
    debug('Initial sheet setup');
  }
};

/**
 * This is the default listener function for attributes that the K-Scaffold uses. It utilizes the `triggerFuncs`, `listenerFunc`, `calculation`, and `affects` properties of the K-scaffold trigger object (see the Pug section of the scaffold for more details).
 * @memberof Sheetworkers
 * @param {Roll20Event} event - The Roll20 event object
 * @returns {void}
 * @example
 * //Call from an attribute change
 * on('change:an_attribute',k.accessSheet);
 */
const accessSheet = function(event){
  if(kFuncs.verboseMode){
    debug({funcs:Object.keys(funcs)});
    debug({event});
  }
  getAllAttrs({callback:(attributes,sections,casc)=>{
    let trigger = attributes.getCascObj(event,casc);
    attributes.processChange({event,trigger,attributes,sections,casc});
  }});
};
funcs.accessSheet = accessSheet;
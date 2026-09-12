/*jshint esversion: 11, laxcomma:true, eqeqeq:true*/
/*jshint -W014,-W084,-W030,-W033*/
/**
 * Runtime support for selects that use the `+dynamicOptions` mixin. The pug side records every such select in the `dynamicOptions` registry (indexed by the select's attribute name) and wires `kDynamicOptionsUpdate` into the cascade entries that can change the option list; the functions here turn a registry entry into a `populateListOptions` call.
 * @namespace Sheetworkers.Dynamic Options
 */

// Roll20's populateListOptions ignores the `i18n` key on option objects, so translations are resolved here.
const dynamicOptionLabel = (entry) => {
  if(entry.i18n){
    return getTranslationByKey(entry.i18n) || entry.i18n;
  }
  return entry.label !== undefined ? entry.label : entry.value;
};

const dynamicOptionsFromEntry = function(entry,selectConfig,{trigger,attributes,sections,casc}){
  switch(entry.type){
    case 'static':
      return [{value:entry.value,label:dynamicOptionLabel(entry)}];
    case 'section':
      return (sections[entry.section] || []).map((id) => {
        const label = attributes[`${entry.section}_${id}_${entry.label}`];
        return {
          value:id,
          label: label === undefined || label === null || `${label}` === '' ?
            id :
            `${label}`
        };
      });
    case 'function':
      if(!funcs[entry.function]){
        debug(`!!!Warning!!! no function named ${entry.function} found. Dynamic options for ${selectConfig.name} could not be generated.`,true);
        return [];
      }
      return (funcs[entry.function]({trigger,attributes,sections,casc}) || [])
        .map((o) => ({value:o.value,label:o.label !== undefined ? o.label : o.value}));
    default:
      return [];
  }
};

/**
 * Rebuilds the option list of one dynamic select from its registry entry and pushes it to the sheet with `populateListOptions`. If the select's current value is no longer one of the available options (e.g. the selected row was removed), the value is reset to the select's fallback static option. Automatically called by the K-scaffold when the sheet opens and whenever a wired attribute, row, or dependency changes; exposed as `k.updateDynamicOptions` for custom generators that need to refresh a list themselves.
 * @memberof Dynamic Options
 * @param {string} selectName - The attribute name of the select (e.g. `equipped_item`).
 * @param {object} args
 * @param {object} [args.trigger] - The trigger that caused the rebuild. Passed through to custom generator functions.
 * @param {attributesProxy} args.attributes - The K-scaffold attributes proxy
 * @param {sections} args.sections - The K-scaffold sections object
 * @param {object} args.casc - The expanded cascade
 * @example
 * const refreshSlots = function({trigger,attributes,sections,casc}){
 *   k.updateDynamicOptions('spell_slot',{trigger,attributes,sections,casc});
 * };
 */
const updateDynamicOptions = function(selectName,{trigger,attributes,sections,casc}){
  const selectConfig = dynamicOptions[selectName];
  if(!selectConfig){
    debug(`!!!Warning!!! ${selectName} is not a select with dynamic options.`,true);
    return;
  }
  const rebuildTrigger = trigger || casc[`attr_${selectName}`] || {name:selectName};
  const optionsArray = selectConfig.entries.reduce((memo,entry) => {
    memo.push(...dynamicOptionsFromEntry(entry,selectConfig,{trigger:rebuildTrigger,attributes,sections,casc}));
    return memo;
  },[]);
  const current = `${attributes[selectName]}`;
  const selectedValue = optionsArray.some((o) => `${o.value}` === current) ?
    current :
    selectConfig.fallback;
  if(`${selectedValue}` !== current){
    attributes[selectName] = selectedValue;
  }
  optionsArray.forEach((o) => {
    if(`${o.value}` === `${selectedValue}`){
      o.selected = true;
    }
  });
  populateListOptions({
    elemSelector:selectConfig.selector,
    optionsArray
  });
};
kFuncs.updateDynamicOptions = updateDynamicOptions;

// Does a change to the named attribute/section mean this registry entry's options may have changed?
const dynamicEntryDependsOn = function(entry,triggerName){
  const templated = triggerName.replace(/^(repeating_[^_]+_)[^_]+/,'$1$x');
  if(entry.section && triggerName === entry.section){
    return true;
  }
  if(entry.type === 'section' && templated === `${entry.section}_$x_${entry.label}`){
    return true;
  }
  return (entry.affects || []).includes(templated);
};

/**
 * Cascade function that the K-scaffold wires into label attributes, fieldsets, and custom generator dependencies at compile time. Rebuilds every dynamic select whose option source depends on the trigger.
 * @memberof Dynamic Options
 * @param {object} trigger - The trigger that caused the function to be called
 * @param {attributesProxy} attributes - The K-scaffold attributes proxy
 * @param {sections} sections - The K-scaffold sections object
 * @param {object} casc - The expanded cascade
 */
const kDynamicOptionsUpdate = function({trigger,attributes,sections,casc}){
  const triggerName = `${trigger?.name || ''}`.toLowerCase();
  Object.values(dynamicOptions).forEach((selectConfig) => {
    if(selectConfig.entries.some((entry) => dynamicEntryDependsOn(entry,triggerName))){
      updateDynamicOptions(selectConfig.name,{trigger,attributes,sections,casc});
    }
  });
};
registerFuncs({kDynamicOptionsUpdate});

/**
 * Sheet open handler. `populateListOptions` changes are not persisted by Roll20, so every dynamic select is rebuilt each time the sheet is opened.
 * @memberof Dynamic Options
 * @param {attributesProxy} attributes - The K-scaffold attributes proxy
 * @param {sections} sections - The K-scaffold sections object
 * @param {object} casc - The expanded cascade
 */
const kDynamicOptionsOnOpen = function({attributes,sections,casc}){
  Object.keys(dynamicOptions).forEach((selectName) => {
    updateDynamicOptions(selectName,{attributes,sections,casc});
  });
};
registerFuncs({kDynamicOptionsOnOpen},{type:['opener']});

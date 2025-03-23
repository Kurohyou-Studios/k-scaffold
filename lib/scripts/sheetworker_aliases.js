/*jshint esversion: 11, laxcomma:true, eqeqeq:true*/
/*jshint -W014,-W084,-W030,-W033*/
/**
 * These are functions that provide K-scaffold aliases for the basic Roll20 sheetworker functions. These functions also provide many additional features on top of the standard Roll20 sheetworkers.
 * @namespace Sheetworkers.Sheetworker Aliases
 */
/**
 * Alias for [setSectionOrder()](https://wiki.roll20.net/Sheet_Worker_Scripts#setSectionOrder.28.3CRepeating_Section_Name.3E.2C_.3CSection_Array.3E.2C_.3CCallback.3E.29) that allows you to use the section name in either `repeating_section` or `section` formats. Note that the Roll20 sheetworker [setSectionOrder](https://wiki.roll20.net/Sheet_Worker_Scripts#setSectionOrder.28.3CRepeating_Section_Name.3E.2C_.3CSection_Array.3E.2C_.3CCallback.3E.29) currently causes some display issues on sheets.
 * @memberof Sheetworker Aliases
 * @name setSectionOrder
 * @param {string} section - The name of the section, with or without `repeating_`
 * @param {string[]} order - Array of ids describing the desired order of the section.
 * @returns {void}
 * @example
 * //Set the order of a repeating_weapon section
 * k.setSectionOrder('repeating_equipment',['id1','id2','id3']);
 * //Can also specify the section name without the repeating_ prefix
 * k.setSectionOrder('equipment',['id1','id2','id3']);
 */
const _setSectionOrder = function(section,order){
  let trueSection = section.replace(/repeating_/,'');
  setSectionOrder(trueSection,order);
};
// deprecation warning added to setSectionOrder
kFuncs.setSectionOrder = (section,order) => {
  debug('###Deprecation: It is recommended to use the "move" method of the nested section info feature of the attributes object instead of setSectionOrder');
  _setSectionOrder(section,order);
};

/**
 * Alias for [removeRepeatingRow](https://wiki.roll20.net/Sheet_Worker_Scripts#removeRepeatingRow.28_RowID_.29) that also removes the row from the current object of attribute values and array of section IDs to ensure that erroneous updates are not issued.
 * @memberof Sheetworker Aliases
 * @name removeRepeatingRow
 * @param {string} row - The row id to be removed
 * @param {attributesProxy} attributes - The attribute values currently in memory
 * @param {object} sections - Object that contains arrays of all the IDs in sections on the sheet indexed by repeating name.
 * @returns {void}
 * @example
 * //Remove a repeating Row
 * k.getAllAttrs({
 *  callback:(attributes,sections)=>{
 *    const rowID = sections.repeating_equipment[0];
 *    k.removeRepeatingRow(`repeating_equipment_${rowID}`,attributes,sections);
 *    console.log(sections.repeating_equipment); // => rowID no longer exists in the array.
 *    console.log(attributes[`repeating_equipment_${rowID}_name`]); // => undefined
 *  }
 * })
 */
const _removeRepeatingRow = function(row,attributes,sections){
  Object.keys(attributes.attributes).forEach((key)=>{
    if(key.startsWith(row)){
      delete attributes[key];
    }
  });
  let [,section,rowID] = row.match(/(repeating_[^_]+)_(.+)/,'');
  sections[section] = sections[section].filter((id)=>id!==rowID);
  delete attributes[section][rowID];
  removeRepeatingRow(row);
};
kFuncs.removeRepeatingRow = _removeRepeatingRow;

/**
 * Alias for [getAttrs()](https://wiki.roll20.net/Sheet_Worker_Scripts#getAttrs.28attributeNameArray.2C_callback.29) that converts the default object of attribute values into an {@link attributesProxy} and passes that back to the callback function.
 * @memberof Sheetworker Aliases
 * @name getAttrs
 * @param {string[]} [props=baseGet] - Array of attribute names to get the value of. Defaults to {@link baseGet} if not passed.
 * @param {function(attributesProxy)} callback - The function to call after the attribute values have been gotten. An {@link attributesProxy} is passed to the callback.
 * @example
 * //Gets the attributes named in props.
 * k.getAttrs({
 *  props:['attribute_1','attribute_2'],
 *  callback:(attributes)=>{
 *    //Work with the attributes as you would in a normal getAttrs, or use the superpowers of the K-scaffold attributes object like so:
 *    attributes.attribute_1 = 'new value';
 *    attributes.set();
 *  }
 * })
 */
const _getAttrs = function({props=baseGet,callback}){
  getAttrs(props,(values)=>{
    const attributes = createAttrProxy(values);
    callback(attributes);
  });
};
kFuncs.getAttrs = _getAttrs;

/**
 * Alias for [getAttrs()](https://wiki.roll20.net/Sheet_Worker_Scripts#getAttrs.28attributeNameArray.2C_callback.29) and [getSectionIDs](https://wiki.roll20.net/Sheet_Worker_Scripts#getSectionIDs.28section_name.2Ccallback.29) that combines the actions of both sheetworker functions and converts the default object of attribute values into an {@link attributesProxy}. Also gets the details on how to handle all attributes from the master {@link cascades} object and.
 * @memberof Sheetworker Aliases
 * @param {Object} args
 * @param {string[]} [args.props=baseGet] - Array of attribute names to get the value of. Defaults to {@link baseGet} if not passed.
 * @param {repeatingSectionDetails} sectionDetails - Array of details about a section to get the IDs for and attributes that need to be gotten. 
 * @param {function(attributesProxy,sectionObj,expandedCascade):void} args.callback - The function to call after the attribute values have been gotten. An {@link attributesProxy} is passed to the callback along with a {@link sectionObj} and {@link expandedCascade}.
 * @example
 * //Get every K-scaffold linked attribute on the sheet
 * k.getAllAttrs({
 *  callback:(attributes,sections,casc)=>{
 *    //Work with the attributes as you please.
 *    attributes.some_attribute = 'a value';
 *    attributes.set();//Apply our change
 *  }
 * })
 */
const getAllAttrs = function({props=baseGet,sectionDetails=repeatingSectionDetails,callback}){
  getSections(sectionDetails,(repeats,sections)=>{
    getAttrs([...props,...repeats],(values)=>{
      const casc = expandCascade(cascades,sections);
      const attributes = createAttrProxy(values,sections,casc);
      orderSections(attributes,sections,casc);
      callback(attributes,sections,casc);
    })
  });
};
kFuncs.getAllAttrs = getAllAttrs;

/**
 * Alias for [getSectionIDs()](https://wiki.roll20.net/Sheet_Worker_Scripts#getSectionIDs.28section_name.2Ccallback.29) that allows you to iterate through several functions at once. Also assembles an array of repeating attributes to get.
 * @memberof Sheetworker Aliases
 * @param {object[]} sectionDetails - Array of details about a section to get the IDs for and attributes that need to be gotten.
 * @param {string} sectionDetails.section - The full name of the repeating section including the `repeating_` prefix.
 * @param {string[]} sectionDetails.fields - Array of field names that need to be gotten from the repeating section
 * @param {function(string[],sectionObj)} callback - The function to call once all IDs have been gotten and the array of repating attributes to get has been assembled. The callback is passed the array of repating attributes to get and a {@link sectionObj}.
 * @example
 * // Get some section details
 * const sectionDetails = {
 *  {section:'repeating_equipment',fields:['name','weight','cost']},
 *  {section:'repeating_weapon',fields:['name','attack','damage']}
 * };
 * k.getSections(sectionDetails,(attributeNames,sections)=>{
 *  console.log(attributeNames);// => Array containing all row specific attribute names
 *  console.log(sections);// => Object with arrays containing the row ids. Indexed by section name (e.g. repeating_eqiupment)
 * })
 */
const getSections = function(sectionDetails,callback){
  let queueClone = _.clone(sectionDetails);
  const worker = (queue,repeatAttrs=[],sections={})=>{
    let detail = queue.shift();
    getSectionIDs(detail.section,(IDs)=>{
      sections[detail.section] = IDs;
      IDs.forEach((id)=>{
        detail.fields.forEach((f)=>{
          repeatAttrs.push(`${detail.section}_${id}_${f}`);
        });
      });
      repeatAttrs.push(`_reporder_${detail.section}`);
      if(queue.length){
        worker(queue,repeatAttrs,sections);
      }else{
        callback(repeatAttrs,sections);
      }
    });
  };
  if(!queueClone[0]){
    callback([],{});
  }else{
    worker(queueClone);
  }
};
kFuncs.getSections = getSections;

// Sets the attributes while always calling with {silent:true}
// Can be awaited to get the values returned from _setAttrs
/**
 * Alias for [setAttrs()](https://wiki.roll20.net/Sheet_Worker_Scripts#setAttrs.28values.2Coptions.2Ccallback.29) that sets silently by default.
 * @memberof Sheetworker Aliases
 * @alias setAttrs
 * @param {object} obj - The object containting attributes to set
 * @param {boolean} [vocal=false] - Whether to set silently (default value) or not.
 * @param {function()} [callback] - The callback function to invoke after the setting has been completed. No arguments are passed to the callback function.
 * @example
 * //Set some attributes silently
 * k.setAttrs({attribute_1:'new value'})
 * //Set some attributes and triggers listeners
 * k.setAttrs({attribute_1:'new value',true})
 * //Set some attributes and call a callback function
 * k.setAttrs({attribute_1:'new value'},null,()=>{
 *  //Do something after the attribute is set
 * })
 */
const set = function(obj,vocal=false,callback){
  setAttrs(obj,{silent:!vocal},callback);
};
kFuncs.setAttrs = set;

const generateCustomID = function(string){
  if(!string.startsWith('-')){
    string = `-${string}`;
  }
  rowID = generateRowID();
  let re = new RegExp(`^.{${string.length}}`);
  return `${string}${rowID.replace(re,'')}`;
};


/**
 * Alias for generateRowID that adds the new id to the {@link sectionObj}. Also allows for creation of custom IDs that conform to the section ID requirements.
 * @memberof Sheetworker Aliases
 * @name generateRowID
 * @param {sectionObj} sections
 * @param {string} [customText] - Custom text to start the ID with. This text should not be longer than the standard repeating section ID format.
 * @returns {string} - The created ID
 * @example
 * k.getAllAttrs({
 *  callback:(attributes,sections,casc)=>{
 *    //Create a new row ID
 *    const rowID = k.generateRowID('repeating_equipment',sections);
 *    console.log(rowID);// => repeating_equipment_-p8rg908ug0suzz
 *    //Create a custom row ID
 *    const customID = k.generateRowID('repeating_equipment',sections,'custom');
 *    console.log(customID);// => repeating_equipment_-custom98uadj89kj
 *  }
 * });
 */
const _generateRowID = function(section,sections,customText){
  let rowID = customText ?
    generateCustomID(customText) :
    generateRowID();
  section = section.match(/^repeating_[^_]+$/) ?
    section :
    `repeating_${section}`;
  sections[section] = sections[section] || [];
  sections[section].push(rowID);
  return `${section}_${rowID}`;
};
kFuncs.generateRowID = (section,sections,customText) => {
  debug('###Deprecation: It is recommended to use the "create" method of the nested section info feature of the attributes object instead of k.generateRowID');
  return _generateRowID(section,sections,customText);
};

/**
 * An alias for [Roll20's getTranslationByKey](https://wiki.roll20.net/Sheet_Worker_Scripts#getTranslationByKey.28.5Bkey.5D.29) that also supports data-i18n-vars syntax replacement and returns the translation key if no value is found instead of `false`.
 * @memberof Sheetworker Aliases
 * @name getTranslationByKey
 * @param {string} key - The translation key to look up.
 * @param {string[]} [variables = []] - An array of variable values to replace variable indexes with.
 * @returns {string}
 */
const _getTranslationByKey = (key,variables = []) => {
  let translate = getTranslationByKey(key) || key;
  console.warn('getTranslationByKey',getTranslationByKey(key));
  console.warn('translate:',translate);
  variables.forEach((v,i) => {
    translate = translate.replace(new RegExp(`\\{\\{${i}\\}\\}`,'g'),v);
  });
  return translate;
}
kFuncs.getTranslationByKey = _getTranslationByKey;

/**
 * Assembles the roll string from the roll object
 * @param {object} rollObj - object describing the roll
 * @param {string} [rollStart = '@{template_start}'] - The string to start the roll with.
 * @returns {string}
 */
const assembleRoll = (rollObj,rollStart = kFuncs.defaultRollStart) => {
  return Object.entries(rollObj).reduce((str,[field,content])=>{
    return str += ` {{${field}=${content ?? ''}}}`;
  },`${rollStart}`);
};


/**
 * @typedef {Object} kRoll
 * @property {Object} roll - The roll object returned by [Roll20's startRoll](https://wiki.roll20.net/Custom_Roll_Parsing#Sheetworker_Functions).
 * @property {Function} roll.finish - Finishes the associated roll passing it the computeObj and rollId.
 * @property {Object} computeObj - object for storing manipulations to the roll. Assign manipulations to this, DO NOT reassign it to a new object.
 */

/**
 * 
 * @param {object} rollObj - Object specifying the fields to pass to the rolltemplate. Object keys are field names. Object values are the field values.
 * @param {string} [startString = '@{template_start}'] - Text that should be prepended to the roll string that results from rollObj.
 * @returns {kRoll} 
 */
const _startRoll = async (rollObj,startString) => {
  const rollString = assembleRoll(rollObj,startString);
  const roll = await startRoll(rollString);
  const computeObj = {};
  roll.finish = () => {
    finishRoll(roll.rollId,computeObj);
  };
  return {roll, computeObj};
};
kFuncs.startRoll = _startRoll;
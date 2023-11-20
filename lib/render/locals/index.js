const defaultCascObj = require('./defaultCascObj');
const customCascKeys = require('./customCascKeys');
/**
 * The local functions and variables that the K-scaffold provides for use in your pug.
 * @namespace Locals
*/

const defaultVarObject = () => {
  return {
    repeatingSectionDetails:[],
    actionAttributes:[],
    cascades:{
      attr_character_name:{
        name:'character_name',
        type:'text',
        defaultValue:'',
        affects:[],
        triggeredFuncs:['setActionCalls'],
        listenerFunc:'accessSheet',
        listener:'change:character_name'}
      },
    persistentTabs:[]
  };
};

const defaultKObject = () => {
  return {
    scriptUsed: false,
    repeatingPrefix:'',
    repeatsIgnoreSystemPrefix:false,
    systemPrefix:'',
    scriptBlocks:[],
    styles:{},
    fonts:[]
  };
}
/**
 * Object that stores attributes that are updated based on the pug but are used in the sheetworkers. The user can add properties to this object to export data from the pug to the sheetworkers.
 * @memberof Locals
 * @property {object[]} repeatingSectionDetails - Array of objects that describe each repeating section and the attributes contained in them.
 * @property {string[]} actionAttributes - Array of attribute names created by use of the `roller` mixin.
 * @property {object} cascades - Object that accumulates the trigger information for all attributes created using k-scaffold mixins. Items are added and updated here via the {@link storeTrigger} function.
 */
const varObjects = defaultVarObject();

/**
 * Object that describes the state of k-scaffold prefixes and info that are manipulated in reaction to mixins being used or direclty by the user, but are not used in the sheetworkers.
 * @memberof Locals
 * @property {boolean} scriptUsed - Boolean that tracks whether the kScript mixin has been called or not. Default `false`.
 * @property {string} repeatingPrefix - The prefix for the current repeating section. Empty when no repeating section is currently being worked in. Automatically updated when using the fieldset mixins. Default `''`
 * @property {boolean} repeatsIgnoreSystemPrefix - Boolean that controls whether repeating sections ignore the system prefix or not. Default `false`.
 * @property {string} systemPrefix - A prefix that is added to all attribute names until changed. Useful for sheets that handle multiple systems and need separate tracking for similarly named attributes. Default `''`
 */
const k = defaultKObject();

const resetObjs = () =>{
  Object.keys(varObjects).forEach((key)=>delete varObjects[key]);
  Object.assign(varObjects,defaultVarObject());

  Object.keys(k).forEach((key)=>delete k[key]);
  Object.assign(k,defaultKObject());
};

/**
 * checks that the kScript mixin is the final mixin used.
 * @memberof Render
 */
const checkKUse = () => {
  if(k.scriptUsed){
    throw Error('kScript mixin already used. Kscript should be the final mixin used in the sheet code.');
  }
};
  
/**
 * Gets the current state of the system prefix
 * @memberof Locals
 * @returns {string}
 */
const getSystemPrefix = () => k.systemPrefix || '';

/**
 * Updates the k.systemPrefix K-scaffold global variable so that any attributes created after this point will be prepended with the prefix. By default attributes in repeating sections are not prepended; instead the repeating section name is prefixed. Returns the previous prefix.
 * @memberof Locals
 * @param {string} val - The value to set the prefix to. If not a string or falsy, will reset the prefix to an empty string.
 * @param {boolean} normalRepeating - Whether the prefix should be applied to repeating section names (default), or to the attribute name itself in repeating sections.
 * @returns {string}
 */
const setSystemPrefix = (val,normalRepeating = false) => {
  k.repeatsIgnoreSystemPrefix = normalRepeating;
  const prevPrefix = k.systemPrefix;
  k.systemPrefix = typeof val === 'string' ? val : '';
  return prevPrefix;
};

/**
 * Converts an attribute name into an attribute call for that attribute. Converts `_max` attribute names to the proper attribute call syntax for `_max` attributes (see second example). If called from inside the block of a {@link fieldset} mixin, will also add the appropriate information for calling a repeating attribute.
 * @memberof Locals
 * @param {string} string - The attribute name to create an attribute call for.
 * @returns {string}
 */
const attrTitle = (string) => `@{${k.repeatingPrefix}${replaceSpaces(string).replace(/_max$/,'|max')}}`;

/**
 * Converts a string to a valid snake_case attribute name or kebab-case action button name.
 * @memberof Locals
 * @param {string} string - The string to adapt
 * @returns {string}
 */
const attrName = (string) => {
  const sysPrefix = getSystemPrefix();
  let tempString = replaceSpaces(`${
  (k.repeatingPrefix && !k.repeatsIgnoreSystemPrefix) || !sysPrefix ?
    '' :
    `${sysPrefix} `
  }${string}`);
  if(sysPrefix){
    tempString = tempString
      .replace(new RegExp(`${sysPrefix}[_-]${sysPrefix}`),sysPrefix);
  }
  return tempString;
};

/**
 * Converts an ability name into an ability call for that attribute. If called from inside the block of a {@link fieldset} mixin, will also add the appropriate information for calling a repeating attribute.
 * @memberof Locals
 * @param {string} string - The ability name to create a call for.
 * @returns {string}
 */
const buttonTitle = (string) => `%{${k.repeatingPrefix}${replaceSpaces(string)}}`;
  
/**
 * Replaces spaces in a string with underscores (`_`).
 * @memberof Locals
 * @param {string} string - The string to work on
 * @returns {string}
 */
const replaceSpaces = (string) => string.replace(/\s+/g,'_');

/**
 * Escapes problem characters in a string for use as a regex.
 * @memberof Locals
 * @param {string} string - The string to work on
 * @returns {string}
 */
const replaceProblems = (string) => string.replace(/[\(\)\[\]\|\/\\]/g,'-');

/**
 * Capitalizes the first letter of words in a string.
 * @memberof Locals
 * @param {string} string 
 * @returns {string}
 */
const capitalize = (string)=> string.replace(/(?:^|\s+|\/)[a-z]/ig,(letter)=>letter.toUpperCase());

/**
 * Converts a string to a valid kebab-case action button name
 * @memberof Locals
 * @param {string} name - The string to convert to an action button name
 * @returns {string}
 */
const actionButtonName = (name) => `${name.replace(/_|\s+/g,'-')}`;
/**
 * Converts the name of an action button in a roller construction to the controlling attribute name.
 * @memberof Locals
 * @param {string} name - The string to convert
 * @returns {string}
 */
const actionInputName = (name) => `${name}_action`.replace(/roll_action/,'action');

/**
 * Converts a title back to an attribute name
 * @param {string} string - The string to convert to an attribute name
 * @memberof Locals
 * @returns {string}
 */
const titleToName = (string) => string.replace(/[@%]\{|\}/g,'');

/**
 * Adds an item to a designated array property of `varObjects` for tracking.
 * @memberof Render
 * @param {any} item - 
 * @param {string} arrName - Name of the array to manipulate
 */
const addIfUnique = (item,arrName) => {
  varObjects[arrName] = varObjects[arrName] || [];
  if(varObjects[arrName].indexOf(item) === -1){
    varObjects[arrName].push(item);
  }
};
const formulaBases = [
  // {name:'attribute_with_formula',contents:['attribute_1','attribute_2']}
];
/**
 * Stores the attribute in the cascades object.
 * @memberof Render
 * @param {object} element - Object describing the element
 */
const storeTrigger = function(element){
  let trigger = element.trigger || {};
  const namePrefix = {
    roll:'roll_',
    action:'act_',
    fieldset:'fieldset_'
  };
  let elementName = element.title ?
    titleToName(element.title) :
    element.name;
  trigger.name = elementName.replace(/\|/g,'_').toLowerCase();
  let cascName = `${namePrefix[element.type] || 'attr_'}${trigger.name}`;
  varObjects.cascades = varObjects.cascades || {};
  const cascObj = varObjects.cascades[cascName] ||
    defaultCascObj(cascName,element,trigger);
  const arrayProps = ['affects','triggeredFuncs','addFuncs']
  // handle the implicit affects linkage of other formulas
  formulaBases.forEach(({name,contents}) => {
    if(contents.includes(trigger.name)){
      cascObj.affects.push(name);
    }
  });
  // Handle the implicit affects linkage of this attribute's formula
  if(cascObj.formula){
    const attrCalls = cascObj.formula.match(/@{.+?}/g) ||
      [];
    const formulaObj = {
      name:trigger.name,
      contents:attrCalls.map(call => call.toLowerCase().replace(/@{|}/g,''))
    };
    formulaBases.push(formulaObj);
    formulaObj.contents.forEach(attrName => {
      const cName = `attr_${attrName}`;
      if(varObjects.cascades[cName]){
        varObjects.cascades[cName].affects = [...new Set([...varObjects.cascades[cName].affects,formulaObj.name])];
      }
    })
  }
  arrayProps.forEach(prop => {
    if(Array.isArray(trigger[prop])){
      cascObj[prop] = [...new Set([...cascObj[prop],...(trigger[prop] || [])])];
    }
  });
  if(Array.isArray(trigger.affects)){
    cascObj.affects = cascObj.affects.map((affect)=>replaceSpaces(affect).toLowerCase());
  }
  varObjects.cascades[cascName] = customCascKeys(cascObj,trigger);
};

/**
 * Finds the details for a specific repeating section
 * @memberof Render
 * @param {string} section - The name of the repeating section
 * @returns {object}
 */
const getSectionDetails = function(section){
  return varObjects.repeatingSectionDetails?.find((obj)=>obj && obj.section === section);
};

/**
 * Creates an object to store information about a repating section in `varObjects` and pushes it to `repeatingSectionDetails`.
 * @memberof Render
 * @param {string} section - The name of the repeating section
 */
const createFieldsetObj = function(section){
    !getSectionDetails(section) ? 
    varObjects.repeatingSectionDetails.push({section,fields:[]}) :
    null;
};

/**
 * Adds info on an attribute to an existing repeating section detail object.
 * @memberof Render
 * @param {object} obj - Object describing the attribute element being created
 */
const addFieldToFieldsetObj = function(obj){
  let section = k.repeatingPrefix.replace(/_[^_]+_$/,'');
  let sectionDetails = getSectionDetails(section);
  let name = obj.name.replace(/^attr_/,'');
  if(sectionDetails && sectionDetails.fields.indexOf(name) < 0){
    sectionDetails.fields.push(name);
  }
};

/**
 * Converts a k-scaffold element object with a trigger to an element object without k-scaffold specific information.
 * @memberof Render
 * @param {object} obj - The object to convert
 * @returns {object}
 */
const makeElementObj = function(obj){
  const newObj = {...obj};
  delete newObj.trigger;
  return newObj;
};

module.exports = { varObjects, k, resetObjs, checkKUse, getSystemPrefix, setSystemPrefix, attrTitle, attrName, buttonTitle, replaceSpaces, replaceProblems, capitalize, actionButtonName, actionInputName, titleToName, addIfUnique, storeTrigger, getSectionDetails, createFieldsetObj, addFieldToFieldsetObj, makeElementObj };
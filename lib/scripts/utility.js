/*jshint esversion: 11, laxcomma:true, eqeqeq:true*/
/*jshint -W014,-W084,-W030,-W033*/
/**
 * These are utility functions that are not directly related to Roll20 systems. They provide easy methods for everything from processing text and numbers to querying the user for input.
 * @namespace Sheetworkers.Utilities
 * @alias Utilities
 */
/**
 * Replaces problem characters to use a string as a regex
 * @memberof Utilities
 * @param {string} text - The text to replace characters in
 * @returns {string}
 * @example
 * const textForRegex = k.sanitizeForRegex('.some thing[with characters]');
 * console.log(textForRegex);// => "\.some thing\[with characters\]"
 */
const sanitizeForRegex = function(text){
  return text.replace(/\.|\||\(|\)|\[|\]|\-|\+|\?|\/|\{|\}|\^|\$|\*/g,'\\$&');
};
kFuncs.sanitizeForRegex = sanitizeForRegex;

/**
 * Converts a value to a number, it\'s default value, or `0` if no default value passed.
 * @memberof Utilities
 * @param {string|number} val - Value to convert to a number
 * @param {number} def - The default value, uses 0 if not passed
 * @returns {number|undefined}
 * @example
 * const num = k.value('100');
 * console.log(num);// => 100
 */
const value = function(val,def){
  const convertVal = +val;
  if(def !== undefined && isNaN(def)){
    throw(`K-scaffold Error: invalid default for value(). Default: ${def}`);
  }
  return convertVal === 0 ?
    convertVal :
    (+val||def||0);
};
kFuncs.value = value;

/**
 * Extracts the section (e.g. `repeating_equipment`), rowID (e.g `-;lkj098J:LKj`), and field name (e.g. `bulk`) from a repeating attribute name.
 * @memberof Utilities
 * @param {string} string - The string to parse
 * @returns {array} - Array of matches. Index 0: the section name, e.g. repeating_equipment | Index 1:the row ID | index 2: The name of the attribute
 * @returns {string[]}
 * @example
 * //Extract info from a full repeating name
 * const [section,rowID,attrName] = k.parseRepeatName('repeating_equipment_-8908asdflkjZlkj23_name');
 * console.log(section);// => "repeating_equipment"
 * console.log(rowID);// => "-8908asdflkjZlkj23"
 * console.log(attrName);// => "name"
 * 
 * //Extract info from just a row name
 * const [section,rowID,attrName] = k.parseRepeatName('repeating_equipment_-8908asdflkjZlkj23');
 * console.log(section);// => "repeating_equipment"
 * console.log(rowID);// => "-8908asdflkjZlkj23"
 * console.log(attrName);// => undefined
 */
const parseRepeatName = function(string){
  let match = string.match(/(repeating_[^_]+)_([^_]+)(?:_(.+))?/);
  match.shift();
  return match;
};
kFuncs.parseRepeatName = parseRepeatName;

/**
 * Parses out the components of a trigger name similar to [parseRepeatName](#parserepeatname). Aliases: parseClickTrigger.
 * 
 * Aliases: `k.parseClickTrigger`
 * @memberof Utilities
 * @param {string} string The triggerName property of the
 * @returns {array} - For a repeating button named `repeating_equipment_-LKJhpoi98;lj_roll`, the array will be `['repeating_equipment','-LKJhpoi98;lj','roll']`. For a non repeating button named `roll`, the array will be `[undefined,undefined,'roll']`
 * @returns {string[]}
 * @example
 * //Parse a non repeating trigger
 * const [section,rowID,attrName] = k.parseTriggerName('clicked:some-button');
 * console.log(section);// => undefined
 * console.log(rowID);// => undefined
 * console.log(attrName);// => "some-button"
 * 
 * //Parse a repeating trigger
 * const [section,rowID,attrName] = k.parseTriggerName('clicked:repeating_attack_-234lkjpd8fu8usadf_some-button');
 * console.log(section);// => "repeating_attack"
 * console.log(rowID);// => "-234lkjpd8fu8usadf"
 * console.log(attrName);// => "some-button"
 * 
 * //Parse a repeating name
 * const [section,rowID,attrName] = k.parseTriggerName('repeating_attack_-234lkjpd8fu8usadf_some-button');
 * console.log(section);// => "repeating_attack"
 * console.log(rowID);// => "-234lkjpd8fu8usadf"
 * console.log(attrName);// => "some-button"
 */
const parseTriggerName = function(string){
  let match = string.replace(/^clicked:/,'').match(/(?:(repeating_[^_]+)_([^_]+)_)?(.+)/);
  match.shift();
  return match;
};
kFuncs.parseTriggerName = parseTriggerName;
const parseClickTrigger = parseTriggerName;
kFuncs.parseClickTrigger = parseClickTrigger;

/**
 * Parses out the attribute name from the htmlattribute name.
 * @memberof Utilities
 * @param {string} string - The triggerName property of the [event](https://wiki.roll20.net/Sheet_Worker_Scripts#eventInfo_Object).
 * @returns {string}
 * @example
 * //Parse a name
 * const attrName = k.parseHtmlName('attr_attribute_1');
 * console.log(attrName);// => "attribute_1"
 */
const parseHTMLName = function(string){
  let match = string.match(/(?:attr|act|roll)_(.+)/);
  match.shift();
  return match[0];
};
kFuncs.parseHTMLName = parseHTMLName;

/**
 * Capitalize each word in a string
 * @memberof Utilities
 * @param {string} string - The string to capitalize
 * @returns {string}
 * @example
 * const capitalized = k.capitalize('a word');
 * console.log(capitalized);// => "A Word"
 */
const capitalize = function(string){
  return string.replace(/(?:^|\s+|\/)[a-z]/ig,(letter)=>letter.toUpperCase());
};
kFuncs.capitalize = capitalize;

/**
 * Extracts a roll query result for use in later functions. Must be awaited as per [startRoll documentation](https://wiki.roll20.net/Sheet_Worker_Scripts#Roll_Parsing.28NEW.29). Stolen from [Oosh\'s Adventures with Startroll thread](https://app.roll20.net/forum/post/10346883/adventures-with-startroll).
 * @memberof Utilities
 * @param {string} query - The query should be just the text as the `?{` and `}` at the start/end of the query are added by the function.
 * @returns {Promise} - Resolves to the selected value from the roll query
 * @example
 * const rollFunction = async function(){
 *  //Get the result of a choose from list query
 *  const queryResult = await extractQueryResult('Prompt Text Here|Option 1|Option 2');
 *  console.log(queryResult);//=> "Option 1" or "Option 2" depending on what the user selects
 * 
 *  //Get free form input from the user
 *  const freeResult = await extractQueryResult('Prompt Text Here');
 *  consoel.log(freeResult);// => Whatever the user entered
 * }
 */
const extractQueryResult = async function(query){
  const rollObj = {
    query:`[[0[response=?{${query}}]]]`
  };
	let {roll} = await _startRoll(rollObj,'!');
  roll.finish();
	return roll.results.query.expression.replace(/^.+?response=|\]$/g,'');
};
kFuncs.extractQueryResult = extractQueryResult;

/**
 * Simulates a query for ensuring that async/await works correctly in the sheetworker environment when doing conditional startRolls. E.g. if you have an if/else and only one of the conditions results in `startRoll` being called (and thus an `await`), the sheetworker environment would normally crash. Awaiting this in the condition that does not actually need to call `startRoll` will keep the environment in sync.
 * @memberof Utilities
 * @param {string|number} [value] - The value to return. Optional.
 * @returns {Promise} - Resolves to the value passed to the function
 * @example
 * const rollFunction = async function(){
 *  //Get the result of a choose from list query
 *  const queryResult = await pseudoQuery('a value');
 *  console.log(queryResult);//=> "a value"
 * }
 */
const pseudoQuery = async function(value){  
  const rollObj = {
    query:`[[0[response=${value}]]]`
  };
	let {roll} = await _startRoll(rollObj,'!');
  roll.finish();
	return roll.results.query.expression.replace(/^.+?response=|\]$/g,'');
};
kFuncs.pseudoQuery = pseudoQuery;

/**
 * An alias for console.log.
 * @memberof Utilities
 * @param {any} msg - The message can be a straight string, an object, or an array. If it is an object or array, the object will be broken down so that each key is used as a label to output followed by the value of that key. If the value of the key is an object or array, it will be output via `console.table`.
 */
const log = function(msg){
  if(typeof msg === 'string'){
    console.log(`%c${kFuncs.sheetName} log| ${msg}`,"background-color:#159ccf");
  }else if(typeof msg === 'object'){
    Object.keys(msg).forEach((m)=>{
      if(typeof msg[m] === 'string'){
        console.log(`%c${kFuncs.sheetName} log| ${m}: ${msg[m]}`,"background-color:#159ccf");
      }else{
        console.log(`%c${kFuncs.sheetName} log| ${typeof msg[m]} ${m}`,"background-color:#159ccf");
        console.table(msg[m]);
      }
    });
  }
};
kFuncs.log = log;

/**
 * Alias for console.log that only triggers when debug mode is enabled or when the sheet\'s version is `0`. Useful for entering test logs that will not pollute the console on the live sheet.
 * @memberof Utilities
 * @param {any} msg - 'See {@link k.log}
 * @param {boolean} force - Pass as a truthy value to force the debug output to be output to the console regardless of debug mode.
 * @returns {void}
 */
const debug = function(msg,force){
  if(!kFuncs.debugMode && !force && kFuncs.version > 0) return;
  if(typeof msg === 'string'){
    console.warn(`%c${kFuncs.sheetName} DEBUG| ${msg}`,"background-color:tan;color:red;");
  }else if(typeof msg === 'object'){
    Object.keys(msg).forEach((m)=>{
      if(typeof msg[m] === 'string'){
        console.warn(`%c${kFuncs.sheetName} DEBUG| ${m}: ${msg[m]}`,"background-color:tan;color:red;");
      }else{
        console.warn(`%c${kFuncs.sheetName} DEBUG| ${typeof msg[m]} ${m}`,"background-color:tan;color:red;font-weight:bold;");
        console.table(msg[m]);
      }
    });
  }
};
kFuncs.debug = debug;

/**
 * Orders the section id arrays for all sections in the `sections` object to match the repOrder attribute.
 * @memberof Utilities
 * @param {attributesProxy} attributes - The attributes object that must have a value for the reporder for each section.
 * @param {object[]} sections - Object containing the IDs for the repeating sections, indexed by repeating section name.
 */
const orderSections = function(attributes,sections,casc){
  Object.keys(sections).forEach((section)=>{
    attributes.attributes[`_reporder_${section}`] = commaArray(attributes[`_reporder_${section}`]);
    sections[section] = orderSection(attributes.attributes[`_reporder_${section}`],sections[section],attributes,section,casc);
  });
};
kFuncs.orderSections = orderSections;

/**
 * Orders a single ID array.
 * @memberof Utilities
 * @param {string[]} repOrder - Array of IDs in the order they are in on the sheet.
 * @param {string[]} IDs - Array of IDs to be ordered. Aka the default ID Array passed to the getSectionIDs callback
 * @param {AttributesProxy} [attributes] - The Kscaffold attributes object
 * @param {string} [section] - the name of the section being ordered. If section and attributes are passed, will return an ordered array that does not include IDs for rows that do not exist.
 * @param {object} [casc] - the object describing the default state of the sheet.
 * @returns {string[]} - The ordered id array
 */
const orderSection = function(repOrder,IDs=[], attributes, section,casc){
  const idArr = [...repOrder.filter(v => v),...IDs.filter(id => !repOrder.includes(id.toLowerCase()))]
    .filter(id => {
      const testAttr = Object.keys(casc).find(a => a.toLowerCase().startsWith(`attr_${section}_${id}`));
      const testName = testAttr?.replace(/attr_/,'');
      const idName = testName?.replace(/\$x/,id);
      return (!section && !casc) ||
        (
          idName && 
          (
            attributes.attributes.hasOwnProperty(idName) ||
            attributes.updates.hasOwnProperty(idName)
          )
        );
    });
  return idArr;
};
kFuncs.orderSection = orderSection;

/**
 * Splits a comma delimited string into an array
 * @memberof Utilities
 * @param {string} string - The string to split.
 * @returns {array} - The string segments of the comma delimited list.
 */
const commaArray = function(string=''){
  return string.toLowerCase().split(/\s*,\s*/);
};
kFuncs.commaArray = commaArray;

// Roll escape functions for passing data in action button calls. Base64 encodes/decodes the data.
const RE = {
  chars: {
      '"': '%quot;',
      ',': '%comma;',
      ':': '%colon;',
      '}': '%rcub;',
      '{': '%lcub;',
  },
  escape(data) {
    return typeof data === 'object' ?
      `KDATA${btoa(JSON.stringify(data))}` :
      `KSTRING${btoa(data)}`;
  },
  unescape(string) {
    const isData = typeof string === 'string' &&
      (
        string.startsWith('KDATA') ||
        string.startsWith('KSTRING')
      );
    return isData ?
      (
        string.startsWith('KDATA') ?
          JSON.parse(atob(string.replace(/^KDATA/,''))) :
          atob(string.replace(/^KSTRING/,''))
      ) :
      string;
  }
};


/**
 * Encodes data in Base64. This is useful for passing roll information to action buttons called from roll buttons.
 * @function
 * @param {string|object|any[]} data - The data that you want to Base64 encode
 * @returns {string} - The encoded data
 * @memberof! Utilities
 */
const escape = RE.escape;
/**
 * Decodes Base64 encoded strings that were created by the K-scaffold
 * @function
 * @param {string|object|any[]} string - The string of encoded data to decode. If this is not a string, or is not a string that was encoded by the K-scaffold, it will be returned as is.
 * @returns {string|object|any[]}
 * @memberof! Utilities
 */
const unescape = RE.unescape;

Object.assign(kFuncs,{escape,unescape});

/**
 * Parses a macro so that it is reduced to the final values of all attributes contained in the macro. Will drill down up to 99 levels deep. If the string was not parseable, string will be returned with as much parsed as possible.
 * @memberof Utilities
 * @param {string} mutStr - The string macro to parse
 * @param {AttributesProxy} attributes - The K-scaffold Attributes Proxy
 * @param {Object} sections - The K-scaffold sections object
 * @returns {string} - The string with all attributes replaced by their values (if possible).
 */
const parseMacro = (str,attributes,sections) => {
  let iter = 0;
  let mutStr = str;
  while(mutStr.match(/@{.+?}/) && iter < 99){
    mutStr = mutStr.replace(/@{(.+?)}/g,(match,name) => {
      name = name.replace(/\|/,'_');
      return attributes[name] !== null && attributes[name] !== undefined ?
        attributes[name] :
        `@(${name})`;
    })
    iter++;
  }
  mutStr = mutStr.replace(/@\((.+?)\)/g,'@{$1}');
  return mutStr;
}
kFuncs.parseMacro = parseMacro;

/**
 * Sends data to another character sheet to cause a change on that sheet. WARNING, this function should not be used in response to an attribute change to avoid spamming the chat with api messages.
 * 
 * ![k.send.gif](/k-scaffold/k.send.gif)
 * @memberof Utilities
 * @param {string} characterName - The character to connect to
 * @param {string} funcName - Name of the function to call similar to function name used in {@link callFunc}.
 * @param  {...any} args - The arguments to pass to the function call no the other sheet. These are passed after the normal destructure object for a K-scaffold function call.
 * @example
 * //Function that is called by the source sheet
 * const dispatchPartner = async function({trigger,attributes,sections,casc}){
 *  const partnerName = await (
 *    attributes.partner_name ?
 *      k.pseudoQuery(attributes.partner_name) :
 *      k.extractQueryResult('Partner name')
 *  );
 *  attributes.partner_name = partnerName;
 *  //passing the attributes of the source sheet
 *  k.send(partnerName,'receivePartner',attributes);
 *  attributes.set();
 * };
 * k.registerFuncs({dispatchPartner});
 * 
 * //Function called on target sheet. Partner is the attributes from the source sheet
 * const receivePartner  = function({trigger,attributes,sections,casc},partner){
 *   attributes.from_partner = partner.for_partner;
 *   attributes.partner_name = partner.character_name;
 * };
 * k.registerFuncs({receivePartner });
 */
const send = async function(characterName,funcName,...args){
  const data = RE.escape({
    funcName,
    args
  });
  const roll = await startRoll(`!@{${characterName}|character_name}%{${characterName}|k-network-call||${data}}&{noerror}`);
  finishRoll(roll.rollId);
};
kFuncs.send = send;

const kReceive = function({trigger,attributes,sections,casc}) {
  const data = trigger.rollData;
  callFunc(data.funcName,{attributes,sections,casc},...data.args);
};
funcs.kReceive = kReceive;
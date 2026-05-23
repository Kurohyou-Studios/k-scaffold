// This code adapted from Nic Bradley's R20 test framework from the WFRP4e official sheet.
import { vi } from 'vitest';
import _ from 'underscore';
import translation from './translation.json' assert {type:'json'}
import diceRollerParser from 'dice-roller-parser';

const { DiceRoller } = diceRollerParser;
const rollParser = new DiceRoller();

/**
 * @namespace {object} mock20
 */
/**
 * @memberof mock20
 * @var
 * A mock environment variable for keeping track of triggers, other character information, and predefined query results.
 * @property {array} triggers - The triggers that have been registered by `on`
 * @property {object} queryResponses - Pre defined results you want the roll parser to use for a given roll query. Keys in the objects are roll query prompts. Values are what the user input should be for that query.
 */
const environment = {
  // PLACE DEFAULT ATTRIBUTES
  triggers: [],
  translation,
  otherCharacters: {
    // Attribute information of other test characters indexed by character name
  },
  queryResponses:{
    // object defining which value to use for roll queries, indexed by prompt text
  }
};
global.environment = environment;

const on = vi.fn((trigger, func) => {
  environment.triggers.push({ trigger, func });
});
global.on = on;
const getAttrs = vi.fn((query, callback) => {
  let values = {};
  for (const attr of query) {
    if (attr in environment.attributes) values[attr] = environment.attributes[attr];
  }
  if (typeof callback === "function") callback(values);
});
global.getAttrs = getAttrs;
const setAttrs = vi.fn((submit, params, callback) => {
  if (!callback && typeof params === "function") callback = params;
  for (const attr in submit) {
    environment.attributes[attr] = submit[attr];
  }
  if (typeof callback === "function") callback();
});
global.setAttrs = setAttrs;
const getSectionIDs = vi.fn((section, callback) => {
  const ids = [];
  const sectionName = section.indexOf("repeating_") === 0 ? section : `repeating_${section}`;
  const attributes = environment.attributes;
  for (const attr in attributes) {
    if (attr.indexOf(sectionName) === 0) ids.push(attr.split("_")[2]);
  }
  const idMap = [...new Set(ids)];
  if (typeof callback === "function") callback(idMap);
});
global.getSectionIDs = getSectionIDs;
const getSectionIDsSync = vi.fn((section) => {
  const ids = [];
  const sectionName = section.indexOf("repeating_") === 0 ? section : `repeating_${section}`;
  const attributes = environment.attributes;
  for (const attr in attributes) {
    if (attr.indexOf(sectionName) === 0) ids.push(attr.split("_")[2]);
  }
  const idMap = [...new Set(ids)];
  return idMap;
});
global.getSectionIDsSync = getSectionIDsSync;
const removeRepeatingRow = vi.fn((id) => {
  const attributes = environment.attributes;
  for (const attr in attributes) {
    if (attr.indexOf(id) > -1) delete environment.attributes[attr];
  }
});
global.removeRepeatingRow = removeRepeatingRow;
const setSectionOrder = vi.fn((section, order, callback) => {
  const sectionName = section.indexOf('repeating_') === 0 ? section : `repeating_${section}`;
  environment.attributes[`_reporder_${sectionName}`] = Array.isArray(order) ? order.join(',') : order;
  if (typeof callback === 'function') callback();
});
global.setSectionOrder = setSectionOrder;
const getCompendiumPage = vi.fn((request, callback) => {
  const pages = compendiumData;
  if (!pages)
    throw new Error(
      "Tried to use getCompendiumPage, but testing environment does not contain compendiumData."
    );
  if (typeof request === "string") {
    const [category, pageName] = request.split(":");
    const response = {
      Name: pageName,
      Category: category,
      data: {},
    };
    if (pages[request]) response.data = pages[request].data;
    if (typeof callback === "function") callback(response);
  } else if (Array.isArray(request)) {
    const pageArray = [];
    for (const page of request) {
      if (pages[request] && pages[request].Category === category) pageArray.push(pages[pageName]);
    }
    if (typeof callback === "function") callback(pageArray);
  }
});
global.getCompendiumPage = getCompendiumPage;
const generateUUID = vi.fn(() => {
  var a = 0,
    b = [];
  return (function () {
    var c = new Date().getTime() + 0,
      d = c === a;
    a = c;
    for (var e = Array(8), f = 7; 0 <= f; f--)
      (e[f] = "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(c % 64)),
      (c = Math.floor(c / 64));
    c = e.join("");
    if (d) {
      for (f = 11; 0 <= f && 63 === b[f]; f--) b[f] = 0;
      b[f]++;
    } else for (f = 0; 12 > f; f++) b[f] = Math.floor(64 * Math.random());
    for (f = 0; 12 > f; f++)
      c += "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(b[f]);
    return c.replace(/_/g, "z");
  })();
});
global.generateUUID = generateUUID;
const generateRowID = vi.fn(() => {
  return generateUUID().replace(/_/g, "Z");
});
global.generateRowID = generateRowID;
const simulateEvent = vi.fn((event) => {
  environment.triggers.forEach((trigger) => {
    const splitTriggers = trigger.trigger.split(" ") || [trigger.trigger];
    splitTriggers.forEach((singleTrigger) => {
      if (event === singleTrigger) {
        trigger.func({
          sourceAttribute: "test",
        });
      }
    });
  });
});
global.simulateEvent = simulateEvent;
const getTranslationByKey = vi.fn((key) => environment.translation?.[key] || false);
global.getTranslationByKey = getTranslationByKey;
// Roll Handlingglobal.getTranslationByKey = getTranslationByKey;

const extractRollTemplate = (rollString) => {
  const rollTemplate = rollString.match(/&\{template:(.*?)\}/)?.[1];
  environment.attributes.__rolltemplate = rollTemplate;
};

const cleanRollElements = (value) => {
  const cleanText = value
    .replace(/\{\{|\}}(?=$|\s|\{)/g, "")
    .replace(/=/,'===SPLITHERE===');
  const splitText = cleanText.split("===SPLITHERE===");
  return splitText;
};

const extractRollElements = (rollString) => {
  const rollElements = rollString.match(/\{\{(.*?)\}{2,}(?=$|\s|\{)/g);
  if (!rollElements || rollElements.length < 1) return {}
  return  Object.fromEntries(rollElements.map(cleanRollElements));
};

const getExpression = (element) => element.replace(/(\[\[|\]\])/gi, "");

const getDiceOrHalf = (size) => {
  const diceStack = environment.diceStack;
  if (!diceStack?.[size] || diceStack[size].length < 0) return size / 2;
  return environment.diceStack[size].pop();
};

const applyMathOperation = (left, operator, right) => {
  switch (operator) {
    case '+':
      return left + right;
    case '-':
      return left - right;
    case '*':
      return left * right;
    case '/':
      return left / right;
    case '%':
      return left % right;
    default:
      throw new Error(`Unsupported roll math operator: ${operator}`);
  }
};

const applyMathFunction = (operator, value) => {
  switch (operator) {
    case 'ceil':
      return Math.ceil(value);
    case 'floor':
      return Math.floor(value);
    case 'round':
      return Math.round(value);
    case 'abs':
      return Math.abs(value);
    default:
      throw new Error(`Unsupported roll math function: ${operator}`);
  }
};

// Evaluate the dice-roller-parser AST ourselves so tests can supply exact die rolls through environment.diceStack.
const evaluateExpression = (node, state) => {
  if (!node) return 0;
  switch (node.type) {
    case 'number':
      return node.value;
    case 'expression':
    case 'diceExpression':
      return node.ops.reduce((memo, operation) => {
        return applyMathOperation(memo, operation.op, evaluateExpression(operation.tail, state));
      }, evaluateExpression(node.head, state));
    case 'mathfunction':
      return applyMathFunction(node.op, evaluateExpression(node.expr, state));
    case 'die':
      return evaluateDieExpression(node, state);
    case 'inline':
      return evaluateExpression(node.expr, state);
    default:
      throw new Error(`Unsupported roll expression type: ${node.type}`);
  }
};

const compareRollTarget = (value, operator, target) => {
  switch (operator) {
    case '>':
      return value > target;
    case '>=':
      return value >= target;
    case '<':
      return value < target;
    case '<=':
      return value <= target;
    case '=':
      return value === target;
    default:
      return value === target;
  }
};

const compareExplodeTarget = (value, operator, target) => {
  if (operator === '>') return value >= target;
  if (operator === '<') return value <= target;
  return compareRollTarget(value, operator, target);
};

const shouldExplode = (value, size, modifier, state) => {
  if (!modifier) return false;
  if (!modifier.target) return value === size;
  // Roll20-style exploding compare points are inclusive in the mock's existing behavior.
  return compareExplodeTarget(value, modifier.target.mod, evaluateExpression(modifier.target.value, state));
};

const getModifierValue = (modifier, state) => {
  return Math.max(0, evaluateExpression(modifier.expr, state));
};

const applyKeepDropModifier = (rolledDice, modifier, state) => {
  if (!modifier) return rolledDice;
  const count = Math.min(getModifierValue(modifier, state), rolledDice.length);
  const sortedDice = [...rolledDice].sort((a,b) => a - b);
  // Roll20 treats bare k as keep-highest and bare d as drop-lowest.
  const highLow = modifier.highlow || (modifier.type === 'keep' ? 'h' : 'l');
  if (modifier.type === 'keep') {
    return highLow === 'l' ? sortedDice.slice(0, count) : sortedDice.slice(-count);
  }
  return highLow === 'h' ? sortedDice.slice(0, sortedDice.length - count) : sortedDice.slice(count);
};

const applyTargetModifiers = (rolledDice, targets, state) => {
  if (!targets?.length) return rolledDice.reduce((memo, value) => memo + value, 0);
  return rolledDice.reduce((total, value) => {
    return targets.reduce((targetTotal, target) => {
      const targetValue = evaluateExpression(target.expr, state);
      if (!compareRollTarget(value, target.mod, targetValue)) return targetTotal;
      return target.type === 'failure' ? targetTotal - 1 : targetTotal + 1;
    }, total);
  }, 0);
};

const evaluateDieExpression = (node, state) => {
  const count = evaluateExpression(node.count, state);
  const size = evaluateExpression(node.die, state);
  const explodeMod = node.mods?.find(({ type }) => type === 'explode');
  const keepDropMod = node.mods?.find(({ type }) => type === 'keep' || type === 'drop');
  const dieTotals = [];
  for (let i = 0; i < count; i++) {
    // Exploded rolls stay attached to the originating die for keep/drop totals, but every physical roll is reported.
    let currentRoll = getDiceOrHalf(size);
    let dieTotal = +currentRoll;
    state.dice.push(currentRoll);
    while (shouldExplode(currentRoll, size, explodeMod, state)) {
      currentRoll = getDiceOrHalf(size);
      dieTotal += +currentRoll;
      state.dice.push(currentRoll);
    }
    dieTotals.push(dieTotal);
  }
  return applyTargetModifiers(
    applyKeepDropModifier(dieTotals, keepDropMod, state),
    node.targets,
    state
  );
};

const calculateRoll = (expression) => {
  const state = { dice: [] };
  const result = evaluateExpression(rollParser.parse(expression), state);
  return {
    result,
    dice: state.dice,
  };
};

const replaceAttributes = (element) => {
  const test = /@\{(.*?)\}/i;
  while (test.test(element)) {
    element = element.replace(/@\{(.*?)\}/gi, (sub, ...args) => {
      const attributeName = args[0];
      const attributeValue = environment.attributes[attributeName];
      const attributeExists = typeof attributeValue !== "undefined";
      const possibleAttributes = Object.keys(environment.attributes);
      if (attributeExists) return attributeValue;
      else
        throw new Error(
          `Roll called ${sub} but no corresponding attribute "${attributeName}" was found. Attributes are: ${possibleAttributes.join(
            ", "
          )}`
        );
    });
  }
  return element;
};

const replaceQueries = (element) => {
  return element.replace(/\?\{(.+?)[|}]([^}]+?\})?/g,(match,p,a) => {
    a = a?.split(/\s*\|\s*/) || [];
    return environment.queryResponses[p] || a[0] || '';
  });
};

const calculateRollResult = (rollElements) => {
  const results = {};
  for (const key in rollElements) {
    const element = rollElements[key];
    if (element.indexOf("[[") === -1) continue;
    const attributeFilled = replaceAttributes(element);
    const queryAnswered = replaceQueries(attributeFilled);
    const expression = getExpression(queryAnswered);
    const { result, dice } = calculateRoll(expression);
    results[key] = {
      result,
      dice,
      expression,
    };
  }
  return results;
};

const startRoll = vi.fn(async (rollString) => {
  if (!rollString) throw new Error("startRoll expected a Roll String but none was provided.");
  const rollResult = { results: {} };
  extractRollTemplate(rollString);
  const rollElements = extractRollElements(rollString);
  rollResult.results = calculateRollResult(rollElements);
  rollResult.rollId = generateUUID();
  return rollResult;
});
global.startRoll = startRoll;
const finishRoll = vi.fn(() => {});
global.finishRoll = finishRoll;

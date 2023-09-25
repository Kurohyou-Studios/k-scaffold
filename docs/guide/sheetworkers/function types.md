---
outline: 'deep'
---
# Writing sheetworkers
Because the K-scaffold handles event listening and interacting with the Roll20 database, you can write very focused sheetworker functions. This allows your functions to be simpler, shorter, and easier to read (and debug!). A basic K-scaffold sheetworker declaration is made up of the function declaration and a registration of the function with the k-scaffold.
```js
const myFunc = function({trigger,attributes,sections,casc}){
  // Manipulate your sheet here
};
k.registerFuncs({myFunc});
```
The function definition is where our actual code is contained. The arguments here are described in detail in [arguments & variables](/guide/sheetworkers/arguments.html). The final line registers the function with the K-scaffold so that it can call the function when needed. Note that the name that you register it as should be the same as the name used for the function in the trigger property in your pug.
There are several broad categories of K-scaffold sheetworkers; [calculations](#calculations) (sometimes called pure functions), [triggered functions](#triggered-functions) (or functions with side effects), [roll functions](#roll-functions), and [setup functions](#setup-functions). Information about how to create and use each of these is contained below.
## Calculations
Calculations are usually the simplest form of sheetworker. These functions are used in the `calculation` property of the `trigger` in a K-scaffold mixin and are meant to take several attribute values from the sheet and calculate the value of another attribute. These are "pure" functions because they should not directly set any attribute values and should return the value that they calculated.
```js
const calcMod = function({trigger,attributes}){
  // Convert the mod name into the base attribute name. e.g. strength_mod => strength
  const baseName = trigger.name.replace(/_mod/,'');
  return Math.floor((attributes[baseName] - 10) / 2);
};
k.registerFuncs({calcMod});
```
The K-scaffold expects calculation functions to return a valid attribute value (e.g. not `undefined`, `null`, or `NaN`). If a calculation function returns an invalid value, the value of the attribute being calculated won't be set.
## Triggered Functions
Triggered functions are more typically more complex than calculations and are functions that are used in the `triggerdFuncs` array of the `trigger`. These are functions that are reacting to some change on the sheet and typically do lots of things directly. A common use case for these types of functions is to control the display of various sheet elements by the [Roll20 Jquery implementation](https://wiki.roll20.net/Sheet_Worker_Scripts#jQuery.28NEW.29).
```pug
+checkbox({name:'my section control',value:1,trigger:{triggeredFuncs:['displaySection']}})
.invisible.my-section
  span hidden by default
```
```js
const displaySection = function({trigger,attributes}){
  // Convert the mod name into the base attribute name. e.g. strength_mod => strength
  const sectionName = trigger.name
    .replace(/_control/,'')
    .replace(/_/g,'-');
  // set the action to add or remove a class depending on whether the attribute is 0 or 1.
  const action = attributes[trigger.name] ?
    'addClass' :
    'removeClass';
  // add or remove the invisible class
  $20(`.${sectionName}`)[action]('invisible');
};
k.registerFuncs({displaySection});
```
Note that this function doesn't explicitly return anything. The return value of triggered functions is not used by the K-scaffold or checked in any way. It simply checks the attribute value and then calls the Roll20 jquery to manipulate the class on the designated section.
### Roll Functions
A subset of triggered functions are roll functions. These are functions that are expected to call [startRoll()](https://wiki.roll20.net/Custom_Roll_Parsing), usually in response to an action button being clicked. `startRoll` is the first Roll20 sheetworker function to allow us to use [async/await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) without breaking the connection between our sheetworker instance and the active character sheet. It is recommended that you use [async/await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) with `startRoll` instead of the callback option.
```js
const rollAction = async function({trigger,attributes}){
  const roll = await startRoll('&{template:my-template} {{name=A roll}} {{roll=[[1d20+2]]}}')
  finishRoll(roll.rollId);
};
k.registerFuncs({rollAction});
```
Because roll functions are asynchronous, even if you use the callback form of `startRoll` they interact with the K-scaffold slightly differently than other functions. This is particularly true if you need to set attribute values after the roll has been sent. By the time the roll completes, the cascade this function call was part of will have already completed.
```js
const rollAction = async function({trigger,attributes}){
  const roll = await startRoll('&{template:my-template} {{name=A roll}} {{roll=[[1d20+2]]}}')
  finishRoll(roll.rollId);
  attributes.rolled = roll.results.roll.result;
};
k.registerFuncs({rollAction});
```
This won't currently set the `rolled` attribute to the result of the roll because the attributes have already been set by the time we get to that declaration. Instead, we need to explicitly call the `set` method of the `attributes` object.
```js
const rollAction = async function({trigger,attributes}){
  const roll = await startRoll('&{template:my-template} {{name=A roll}} {{roll=[[1d20+2]]}}')
  finishRoll(roll.rollId);
  attributes.rolled = roll.results.roll.result;
  attributes.set()
};
k.registerFuncs({rollAction});
```
This will then cause a new K-scaffold cascade of attribute effects to be generated and any side effects of setting that attribute will be run as well.
## Setup Functions
Setup functions are a unique type of sheetworker that are needed on most character sheets at some point in their development. These are functions that are not called in response to a change in some attribute. Instead these are functions that are called when the sheet is opened. Setup functions might be functions that need to run to initialize a new sheet, update a sheet to a new version of the sheet, or even do preparations that have to be run each time the sheet is opened. For the K-scaffold, these are called `new`, `updater`, and `opener` respectively.

While other types of K-scaffold sheetworkers receive the `trigger` argument, setup functions do not, because there is not an attribute that is triggering the change. You define a function as a setup function by registering it and passing the optional second registration property.
```js
const setupFunction = function({trigger,attributes,sections,casc}){
  // do some setup
};
k.registerFuncs({setupFunction},{type:['opener']});
```
The type array can have any string in it of `new`, `updater`, `opener`. This defines under what conditions the function is run when the sheet is opened.
### Opener functions
Opener functions are run every time the sheet is opened. They are particularly useful for handling the recurring setup required if you are using Roll20 Jquery to show/hide elements.
### New functions
New functions are run when a sheet is created and the sheet has been newly created (aka `sheet_version` is falsy). This does require that you properly set the version of your sheet using `k.version`.
### Updater functions
As the name implies, these are functions that are run when a sheet needs to update. The K-scaffold will automatically figure out which update functions to run, and will run them in increasing order of version number. However, the K-scaffold does not use semantic versioning for this. Instead, it simply uses decimal numbers. The reason for this is that Roll20 character sheets are forced to the most recent version, so all updates should be made backwards compatible, which makes the "breaking change" part of semantic versioning useless.

Additionally, updater functions need to be registered with the K-scaffold slightly differently from other functions.
```js
const updateTo1x4 = function({trigger,attributes,sections,casc}){
  // do some setup
};
k.registerFuncs({'1.4':updateTo1x4},{type:['updater']});
```
The K-scaffold indexes update functions based on their registered key, with the key being the version that the function updates to. However, javascript function and variable names can't start with a number or include `.`. Because of this, name your function whatever makes the most sense to you, but then assign it to the appropriate version key in the registration object.
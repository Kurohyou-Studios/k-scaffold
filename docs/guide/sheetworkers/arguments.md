---
outline: 'deep'
---
# K-scaffold Sheetworker Arguments
Because the K-scaffold handles event listeners for the sheet, you can focus on writing simple functions to power your sheet instead of listeners, getters, and setters for specific attributes or buttons. A basic function written to be called from the K-scaffold looks like this:
```js
const myFunc = function({trigger,attributes,sections,casc}){
  // Manipulate your sheet here
};
k.registerFuncs({myFunc});
```
## Destructuring Assignment
This function declaration may look weird to you. This is because the K-scaffold expects to call functions using [destructuring assignment syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment). While there are many details to destructuring assignment, what this means functionally is that all four of the arguments in the function above are optional to be declared in your function. This means that the below functions are also valid K-scaffold functions:
```js
const triggerOnly = function({trigger}){
  // Manipulate your sheet here with only the trigger argument available in the function
};
k.registerFuncs({triggerOnly});
const triggerAndSections = function({trigger,sections}){
  // Manipulate your sheet here with only the trigger and sections arguments available
};
k.registerFuncs({triggerAndSections});
const triggerAndSections = function({trigger,sections,customArgument}){
  // Manipulate your sheet here with only the trigger and sections arguments plus a custom argument available
};
k.registerFuncs({triggerAndSections});
const noArgs = function(){
  // Manipulate your sheet here with no arguments available. This is probably not a case you'll ever actually use.
};
k.registerFuncs({noArgs});
```
This makes it very easy to write a function that uses only the arguments you actually need, or even a function that expects to be called from the K-scaffold, but can also be called in other situations with different arguments.
## Specific Arguments
Each of the predefined arguments that are passed to a K-scaffold function contain different pieces of information. These are all useful to varying degrees and in different situations.
### Trigger Argument
The trigger argument is one of the most likely to be used. This argument is an object that describes the attribute that the K-scaffold is currently working on in the cascade. It is an extension of the trigger property used in the K-scaffold pug mixins and allows functions to be written in a generic manner to respond to any of a collection of related attributes or buttons. It contains the following properties:
```js
trigger = {
  name: "full name of the attribute including repeating info",
  type:'Type of input the attribute is associated with',
  defaultValue: number || "string",
  affects:['array of attribute names'],
  listener:'listener string that would be passed to on()',
  triggeredFuncs:['array of function names'],
  listenerFunc:'functionName',
  initialFunc:'functionName',
  calculation:'functionName',
  previousValue:'previous value pulled from the R20 event'
}
```

For instance, if we were writing a character sheet based on D&D 5e, we'd likely have around 6 ability score modifiers that are calculated based on specifici ability scores. With the trigger property we can connect all of these modifiers to a single calculation function that will calculate each modifier.
```pug
//- Strength
+number({name:'strength',trigger:{affects:['strength_mod']}})
+number({name:'strength',trigger:{calculation:'calcMod'}})
//- Dexterity
+number({name:'dexterity',trigger:{affects:['dexterity_mod']}})
+number({name:'dexterity',trigger:{calculation:'calcMod'}})
```
In our pug, we set up the relationships between these ability scores and their modifiers so that the base ability score affects the mod attribute and the mod attributes use `calcMod` as the function to calculate their value. We can then write calcMod to get the attribute name based on the name in the trigger.
```js
const calcMod = function({trigger,attributes}){
  // Convert the mod name into the base attribute name. e.g. strength_mod => strength
  const baseName = trigger.name.replace(/_mod/,'');
  // Do calculation here
};
k.registerFuncs({calcMod});
```
### Attributes Argument
While the trigger argument gives us information about what attribute is currently being worked on, the `attributes` argument stores the information about what the current values of all the sheet's attributes are. This includes any changes that have been made to our attribute values. We can use the attributes to finish our `calcMod` function above.
```js
const calcMod = function({trigger,attributes}){
  // Convert the mod name into the base attribute name. e.g. strength_mod => strength
  const baseName = trigger.name.replace(/_mod/,'');
  return Math.floor((attributes[baseName] - 10) / 2);
};
k.registerFuncs({calcMod});
```
We simply get our appropriate attribute value directly off of the attributes object and use it as needed for the calculation.
### Working with repeating sections
Character sheets are far more complex than simply having raw attributes though. Almost all character sheets also have repeating sections for handling dynamic areas where a player might have any number of items added (e.g. weapons or spells). 
#### Calculating repeating attributes
If we were writing a raw Roll20 sheetworker to handle updating the attack total of all repeating weapons everytime that the `strength_mod` or `proficiency` attributes changed, we'd need to do something like the below to work with repeating section items.
```js
const weaponAttributes = ['proficiency_checkbox','attack_mod'];
on('change:strength_mod change:proficiency',() => {
  getSectionIDs('repeating_weapons',idArray => {
    const getArr = idArray.reduce((arr,id) => {
      weaponAttributes.forEach(attr => {
        arr.push(`repeating_weapons_${id}_${attr}`);
      });
      return arr;
    },['strength_mod','proficiency']);
    getAttrs(getArr,values => {
      const setObj = {};
      const strengthMod = +values.strength_mod || 0;
      const proficiency = +values.proficiency || 2;
      idArray.forEach(id => {
        const weaponMod = +values[`repeating_weapons_${id}_attack_mod`] || 0;
        setObj[`repeating_weapons_${id}_attack_total`] = strengthMod + proficiency + weaponMod;
      });
      setAttrs(setObj,{silent:true})
    });
  });
});
```
This of course gets exponentially more complex as you increase the number of sections that you want to work with at a given time or the number of different attributes that a given attribute affects. You need to continually nest the getSectionIDs calls and either write a function that handles all the changes stemming from a given attribute change or write separate listeners for each possible change from that attribute. With the K-scaffold, you can just get the row id of the currently active attribute from the trigger property and do your calculations simply.
```pug
+number({name:'strength mod',value:0,trigger:{affects:['repeating_weapons_$X_attack_total']}})
+number({name:'proficiency',value:2,trigger:{affects:['repeating_weapons_$X_attack_total']}})
+fieldset({name:'weapons'})
  +number({name:'attack mod',trigger:{affects:['repeating_weapons_$X_attack_total']}})
  +checkbox({name:'proficiency checkbox',value:1,trigger:{affects:['repeating_weapons_$X_attack_total']}})
  +number({name:'attack total',value:0,trigger:{calculation:'calcAttack'}})
```
```js
const calcAttack = function({trigger,attributes,sections,casc}){
  const [section,id] = k.parseTriggerName(trigger.name);
  const prof = attributes.proficiency * attributes[`${section}_${id}_proficiency_checkbox`];
  return attributes.strength_mod + prof + attributes[`${section}_${id}_attack_mod`];
};
k.registerFuncs({calcAttack});
```
Our calculation function is now setup to calculate the total attack bonus for any weapon. This function also only needs to be written this once and will be used regardless of if the attack total is changing because the strength_mod or proficiency changed outside the repeating item, or the attack_mod or proficiency_checkbox changed inside the repeating item.
#### Sections argument
Of course, repeating sections don't just react to attribute changes. Other attributes on the sheet can rely on the values contained within an attribute section as well. The simplest example of this is an inventory section that also has an attribute showing the total weight of what the character is carrying. GiGs, an excellent sheet author in the Roll20 community, created the [repatingSum()](https://wiki.roll20.net/RepeatingSum) function to help new sheet authors solve this common problem. With the K-scaffold, it can be solved very easily as well, and with a minimum of extra code added to your sheet using the `sections` argument.

The `sections` argument is an object with the keys being the names of repeating sections, and the values being arrays of the ids for the rows in that section. Using it we can easily iterate over all rows in a given section and calculate a total or do anything else that we need to do on a per row basis.
```pug
+number({name:'carried weight',trigger:{calculation:'calcWeight'}})
+number({name:'gold',trigger:{affects:['carried_weight']}})
+number({name:'silver',trigger:{affects:['carried_weight']}})
+number({name:'copper',trigger:{affects:['carried_weight']}})
+fieldset({name:'inventory'})
  +checkbox({name:'carried',value:1,trigger:{affects:['carried_weight']}})
  +text({name:'name'})
  +number({name:'quantity',value:1,trigger:{affects:['carried_weight']}})
  +number({name:'weight',trigger:{affects:['carried_weight']}})
```
```js
const calcWeight = function({trigger,attributes,sections,casc}){
  const coinWeight = attributes.gold + attributes.silver * 0.5 + attributes.copper * 0.25;
  return sections.repeating_inventory.reduce((total,id) => {
    const row = `repeating_inventory_${id}`;
    const itemWeight = attributes[`${row}_quantity`] * attributes[`${row}_weight`];
    return total + attributes[`${row}_carried`] * itemWeight;
  },coinWeight);
};
k.registerFuncs({calcWeight});
```
### Casc argument
The casc argument is an argument that is rarely required, but is provided in case you need to do complex manipulation of the cascade. The casc argument is a copy of the base K-scaffold cascade for the specific sheet that is being worked on. This means that it contains the `trigger` object for all attributes, buttons, and repeating sections on the sheet. An in depth overview of the casc argument is not currently available as its use is usually not required. However, one aspect of the casc argument should be noted; any changes made to it will affect the cascade that the current K-scaffold iteration is working on.

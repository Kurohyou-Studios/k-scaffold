## Pug Library
The K-scaffold provides a robust library of pug mixins, variables, and functions to let you focus on your vision of your sheet instead of what html element to use. This page details all the mixins along with their arguments and syntax options.

### Integrating with sheetworkers
These mixins also provide automated integration with sheetworkers so that any attribute you've defined with a K-scaffold mixin will always be available for use in a sheetworker. You don't need to do anything aside from use these mixins instead of standard html elements to have the attributes available in your functions.

Telling the K-scaffold what function to call requires a little more work though. Every mixin in the library accepts a `trigger` property in some way. For most mixins, like [input](#input), the trigger property is a property that you add to the `inputObj`. For some, particularly label constructs like [input-label](#input-label), it is a property of one or more of the nested objects in the passed object. Regardless of how it is passed exactly, the trigger object provides the K-scaffold with the information it needs to connect attributes to the functions that need to react to or affect them. It does this through several different properties, described below. All of these properties, along with the trigger object itself are optional; you only need to provide the ones you actually want to use.

#### Trigger Properties
- affects: This is an array of strings that lists what attributes this attribute affects. In other words, what attributes need to be recalculated because this attribute has changed. While you can use this on buttons, the triggeredFuncs property, described below, is probably better for those.
- calculation: A string that gives the name of a function registered to the K-scaffold that should return the calculated value for this attribute. Alternatively use the formula property for simple calculations (see next point).
- formula: A string that specifies the calculation to be done for this attribute. Uses a syntax inspired by Roll20 macro syntax. The syntax is the following:
  - Any attribute from outside of a sheet will be ignored. Roll Queries may cause unexpected results and are not recommended
  - Use normal Roll20 macro syntax for writing non repeating calculations. (e.g. the formula for `attribute_3` might be `@{attribute_1} + @{attribute_2}`).
  - Repeating section attributes are referenced using the `$X` placeholder. Calculations of repeating items that rely only on attributes within the same row or non-repeating items otherwise use normal Roll20 macro syntax. (e.g. the formula to calculate `repeating_equipment_$X_total_weight` would be `@{repeating_equipment_$X_weight} * @{repeating_equipment_$X_quantity}`).
  - It is also possible to write a formula for a non repeating attribute that iterates over all rows in a repeating section. The formula uses the same syntax as above, except that the section that contains the repeating attribute call and needs to be iterated is wrapped in `={...}=`. e.g. To calculate the total weight of held items and coins, the formula would be `@{gold_weight} + @{silver_weight} + @{copper_weight} + ={@{repeating_equipment_$X_weight} * @{repeating_equipment_$X_quantity}}=`.
- triggeredFuncs: This is an array of strings. Each string should be the name of a function that you want to be called every time this attribute is changed or this button is clicked. Note that triggeredFuncs on triggers for repeating sections will run when an item is removed from the section by the user.
- initialFunc: This is a string with the name of a function that you want to be called only when this attribute is changed directly by the user, not by another function in the cascade.
- addFuncs: This is an array of function names similar to triggeredFuncs. However, this one is only used on triggers for repeating sections where these functions when a new item is added in a [customControlFieldset](#customControlFieldset) or [inlineFieldset](#inlineFieldset).
- listenerFunc: This is a string that is the name of a function to be called in response to the events for this attribute/button/fieldset. If you don't provide this, the K-scaffold will use its default listener function, [accessSheet](/sheetworkers#k.accessSheet). Using the default listener as **RECOMMENDED** as using a custom listener will remove nearly all of the K-scaffold automation.

For information about using the trigger object and the other arguments passed to functions called by the K-scaffold, see the [sheetworker library documentation](/sheetworkers).

### Writing your first sheet file

Every sheet has to start somewhere. While there are many ways to organize your code, every sheet needs a master pug file - the file that everything else stems from. For a K-scaffold sheet, that file should look roughly like this:
```pug
include k-scaffold
- const templateName = 'template-name';
//- sheet_state will contain which display of the sheet is currently enabled
+hidden({name:'sheet version',value:0})
//- Now, for our actual sheet. We'll wrap this in a main element and give it an ID of main.
+tabs({name:'main',defaultActiveTab:'settings'})
  +tab({name:'character'})
    +input-label({
      inputObj:{name:'strength',type:'number',value:10},
      spanObj:{'data-i18n':'strength'},
      trigger:{
        affects:['strength mod']
      }
    })
    +input-label({
      inputObj:{name:'strength mod',type:'number',value:0},
      spanObj:{'data-i18n':'strength mod'},
      trigger:{
        calculation:'calcAttributeMod'
      }
    })
  +tab({name:'settings'})
+hidden({name:'template start',value:`@{whisper}&{template:${templateName}} {{character_name=@{character_name}}} {{character_id=@{character_id}}}`})
+kscript
  //- All additional javascript files should be included here, or as the block of a module mixin in another file
```
This imports the K-scaffold's mixins, sets up the attribute to track our sheet's version, and even gets us started on tabbed navigation and ready to write our sheetworkers.
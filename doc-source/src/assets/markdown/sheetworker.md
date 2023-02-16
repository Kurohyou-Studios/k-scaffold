## Sheetworker Library

The K-scaffold sheetworker library is the workhorse of the K-scaffold. This library powers up your javascript with many super powers. These powers do require some specific syntax though, specifically any function (other than a [listenerFunc](/pug)) that is designed to be called by the k-scaffold must use the [destructuring assignment pattern](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#unpacking_properties_from_objects_passed_as_a_function_parameter); more on that below.

### Writing your first function

Before we dive into the weeds of K-scaffold sheetworkers, we need to define a function and register it with the K-scaffold. If you've set up a pug file as described in the [pug library introduction](/pug), then you can simply include a new js file inside the block of the kscript.
```pug
+kscript
  include ./mySheetworker.js
```
So, let's write the function that is going to be in mySheetworker.js. To start we need to define it and register it:
```js
// mySheetworker.js
const calcAttributeMod = function({trigger,attributes,sections,casc}){
  // code to come
};
k.registerFuncs({calcAttributeMod});
```
In the [pug introduction](/pug), we setup a very basic sheet with a strength attribute that affects a strength mod attribute. This function will eventually calculate the value of strength mod. We also call [k.registerFuncs](#k.regsiterFuncs) to register the function with the k-scaffold.

#### Function arguments

But what about those arguments that we've defined for this function? Where are those coming from? These are the arguments that are passed to all functions called by the K-scaffold's built in cascade handling.

- **trigger**: This is an object that describes everything the k-scaffold knows about the attribute that is currently being worked on. The properties that every trigger has are:
  - name: The name of the attribute.
  - type: What type of attribute originally defined the attribute or what type of data is stored in the attribute (e.g. string or number).
  - defaultValue: What the attribute is when the sheet is first opened
  - affects: The affects array that you defined in the pug
  - triggeredFuncs: The triggeredFuncs array that you defined in the pug
  - listenerFunc: Which function is used to respond to user changes to this attribute/button
  - listener: The actual text that is used in the on listener to listen to the attribute/button
  - In addition to the above, if this attribute was changed directly by the user, then the trigger will also contain all of the properties specified for the [Roll 20 event object](https://wiki.roll20.net/Sheet_Worker_Scripts#Events).
  - If the trigger describes a button, and that button was used to pass data from a roll back to the sheet, there will also be a `rollData` property that will contain the unescaped data that was passed via the button's `originalRollId` property.
- **attributes**: This is a K-scaffold object that contains all the attribute data of the sheet. This object will automatically coerce values into their proper types for a given attribute (e.g. values of a number element are returned as actual numbers). To update a value, simply assign a value to a property on attributes, like `attributes.strength_mod = 5`. In addition, you can specifically get the original or new values with one of two properties on it:
  - attributes: The original values at the time the initial event was received
  - updates: The values that have been set by sheetworkers up to this point.
- **sections**: An object that describes the ids for each section
- **casc**: The full cascade object of the K-scaffold. This will probably not be required that often, but is provided in case you need to do something truly wacky.

#### Calculate

Now we know what the arguments for our function are, we can write the actual code that goes inside it:

```js
// mySheetworker.js
const calcAttributeMod = function({trigger,attributes}){
  const baseAttribute = trigger.name.replace(/_mod/,'');
  return (attributes[baseAttribute] - 10) / 2;
};
k.registerFuncs({calcAttributeMod});
```
Since we only really need the trigger and the attributes for this function, we can remove the `sections` and `casc` arguments. Also, because this function is a function that is used in the `calculation` property of a trigger, we simply return the result we get. Other functions like triggered functions would need to directly assign the new value to the attribute.

#### Put it all together
Now that we've written our function, let's look at how the whole sheet looks with this code:

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
  include ./mySheetworker.js
```
Run that in a custom sheet Roll20 game or a Roll20 custom sheet sandbox and you should see the strength_mod adjust as you change the strength value.

See below for more on all the functions and variables available.
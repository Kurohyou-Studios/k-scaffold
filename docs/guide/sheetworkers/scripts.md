---
outline: 'deep'
---
# Connecting your Pug and Sheetworkers
While the pug mixins provided by the K-scaffold are useful, they are most useful when using sheetworkers to power a character sheet. The mixins create a link between the attributes on your sheet and the sheetworkers so that you don't have to worry about event listeners or database interaction.
## Defining attribute relationships
The first step to connecting your attributes to your sheetworkers in the K-scaffold is to define how those are attributes are related to each other. This is done in the pug via the trigger property. The trigger property is a property that can be passed on any object describing an attribute, such as the object passed to the [input mixin](/reference/pug/Mixins.html#input) or the `inputObj` of the [input-label mixin](/reference/pug/Mixins.html#input-label). In the pug mixin, the trigger property is an object that can have any of several properties.
- `affects` An array of attribute names that are affected when this attribute changes.
- `calculation` The name of a function to be called to calculate the value of this attribute.
- `formula` A Roll20 macro expression that the K-scaffold will parse to do simple calculations on an attribute. Can be used in place of a calculation function name for simple calculations. Replicates the low complexity coding of [Roll20 Autocalcs](https://wiki.roll20.net/Building_Character_Sheets/Auto-Calc) without [the performance concerns](https://wiki.roll20.net/Sheet_Worker_Scripts#Sheet_Workers_vs._Auto-Calculating_Fields:_Which_should_I_use.3F).
- `triggeredFuncs` An array of function names to be called when this attribute is affected, either by the user changing it directly or when another attribute that affects it is changed by a sheetworker. When used on a fieldset, defines functions to run when an item is removed from the section.
- `initialFunc` A function that will only be run if the user manually changed this attribute.
- `addFuncs` Similar to triggeredFuncs, but only used by customControlFieldset to define functions that should be run when an item is added to the section
- `type` The type of value stored by the attribute. This is automatically set by the K-scaffold based on the mixin that is first used to create the attribute, but can be overriden by passing it as part of the trigger.
- `defaultValue` The default value of the attribute. This is automatically set by the K-scaffold based on the value and mixin that is first used to create the attribute, but can be overriden by passing it as part of the trigger.

This means that we can define a simple cause and effect relationship between two attributes by passing the `affects` property on the trigger of one, and a `formula` or `calculation` property on the trigger of the other.
```pug
+number({
  name:'base attribute',
  trigger:{
    affects:['dependent_attribute']
  }
})
+number({
  name:'dependent attribute',
  trigger:{
    formula:'@{base_attribute} + 2'
  }
})
```
This will set `dependent_attribute` to be calculated anytime that `base_attribute` is changed. It should be noted that regardless of if a trigger is used to create an attribute, that attribute will be accessible in your sheetworker functions using the K-scaffold. Additionally, because Roll20 does not have a way to differentiate between different instances of a given attribute, the trigger is shared between all instances of that attribute.
### Cascading changes
Frequently in character sheets, one attribute does not simply affect a single attribute and/or the attribute that is changed itself affects other attributes. These complex relationships can also be created by chaining affects together.
```pug
+number({
  name:'base attribute',
  trigger:{
    affects:['dependent_attribute_1','dependent_attribute_2','dependent_attribute_3']
  }
})
//- Affected by changes to the base attribute
+number({
  name:'dependent attribute 1',
  trigger:{
    formula:'@{base_attribute} + 2',
    affects:['chained_dependent_1','chained_dependent_2']
  }
})
+number({
  name:'dependent attribute 2',
  trigger:{
    formula:'@{base_attribute} * 2'
  }
})
+number({
  name:'dependent attribute 3',
  trigger:{
    formula:'@{base_attribute} / 2'
  }
})
//- Affected by changes to the 1st dependent attribute
//- These will be recalculated regardless of if the user
//- manually changed base_attribute or dependent_attribute_1
+number({
  name:'chained dependent 1',
  trigger:{
    formula:'@{dependent_attribute_1} * 4'
  }
})
+number({
  name:'chained dependent 2',
  trigger:{
    formula:'@{dependent_attribute_1} * 5'
  }
})
```
:::danger
Defining a circular relationship will lead to an infinite loop of cause and effect.
:::
### Repeating Attribute Relationships
These relationships can also be defined between attributes inside and outside of repeating sections, and even between attributes within different repeating sections by prepending the affected attribute name with `repeating_<section-name>_$X_`, replacing `<section-name>` with the name of the section.
```pug
+number({
  name:'base attribute',
  trigger:{
    affects:['repeating_weapons_$X_attack_total']
  }
})
+fieldset({
  name:'weapons'
})
  +text({
    name:'name'
  })
  +number({
    name:'attack mod',
    trigger:{
      affects:['repeating_weapons_$X_attack_total']
    }
  })
  +number({
    name:'attack total',
    trigger:{
      formula:'@{base_attribute} + @{repeating_weapons_$X_attack_mod} + (@{repeating_buffs_$X_value})'
    }
  })
+fieldset({
  name:'buffs'
})
  +text({
    name:'name'
  })
  +number({
    name:'value',
    trigger:{
      affects:['repeating_weapons_$X_attack_total']
    }
  })
```
This code sets up a sheet where changes to the `base_attribute` or any buff's `value` would cause the `attack_total` for all weapons to recalculate. However, changing a weapon's `attack_mod` will only cause that weapon's `attack_total` to recalculate. This is because of the implicit relationship that the K-scaffold assumes between repeating and non-repeating attributes. If an attribute affects another attribute inside the same repeating section, it will only affect that row. However, if an attribute affects a repeating attribute and it is not a repeating attribute or is an attribute in a different repeating section, it will affect that attribute in all the rows of the affected section.
## kscript mixin
The final step in creating a connection between your attributes and sheetworkers is to use the `kscript` mixin at the end of your master pug file. This adds all of the k-scaffold's javascript to your sheet. Additionally, you will include all of your javascript in the block for this mixin. If the `kscript` mixin is not added to your pug, the K-scaffold's sheetworkers will not be present, and won't work (for obvious reasons). Also note that `kscript` needs to be the last k-scaffold mixin that you call in your pug.
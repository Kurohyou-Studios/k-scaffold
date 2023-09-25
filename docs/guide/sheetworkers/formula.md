---
outline: 'deep'
---
# Formula Calculations
The K-scaffold provides a simple method for doing basic calculations of attributes. This is the K-scaffold replacement for [Roll20 autocalcs](https://wiki.roll20.net/Building_Character_Sheets/Auto-Calc). The formula is declared in your pug like so:
```pug
+number({
  name:'dependent attribute',
  trigger:{
    formula:'3 + 2'
  }
})
```
There are a number of reasons to use this as opposed to the native auto-calcs.
- The K-scaffold formulas are only evaluated when they are needed, which makes them more performant than Roll20 auto-calcs.
- Because the formula result is what the value of the attribute is set to, formula calculated attributes are compatible with other sheetworkers.
- Formulas can sum repeating section data.
## Syntax
The syntax for K-scaffold formulas is nearly identical to [Roll20 macro syntax](https://wiki.roll20.net/Complete_Guide_to_Macros_%26_Rolls#Character_Attributes). A simple summation of two non repeating attributes would look like this:
```pug
+number({
  name:'base 1',
  value:2,
  trigger:{
    affects:['dependent_attribute']
  }
})
+number({
  name:'base 2',
  value:4,
  trigger:{
    affects:['dependent_attribute']
  }
})
+number({
  name:'dependent attribute',
  trigger:{
    formula:'@{base_1} + @{base_2}'
  }
})
```
All of the [math operators](https://wiki.roll20.net/Dice_Reference#Math_Operators_and_Functions) available in Roll20 macros are available in K-scaffold formulas.

If you need to do more complex calculations such as determining which values to include in the calculation and which to ignore, or other logic, you'll need to use a full calculation function.
### Repeating section formulas
K-scaffold formulas can also be used to do math operations on repeating sections. When working within a repeating section, you simply prepend the repeating attribute names with `repeating_<section-name>_$X_`, replacing `<section-name>` with the name of the section.
```pug
+fieldset({name:'demo'})
  +number({
    name:'base 1',
    value:2,
    trigger:{
      affects:['repeating_demo_$X_dependent_attribute']
    }
  })
  +number({
    name:'base 2',
    value:4,
    trigger:{
      affects:['repeating_demo_$X_dependent_attribute']
    }
  })
  +number({
    name:'dependent attribute',
    trigger:{
      formula:'@{repeating_demo_$X_base_1} + @{repeating_demo_$X_base_2}'
    }
  })
```
If you need to do an operation where you are going to sum all of the values in a repeating section, you need to wrap the section that will be summed together in parentheses.
```pug
+number({
  name:'dependent attribute',
  trigger:{
    formula:'(@{repeating_demo_$X_base_1} + @{repeating_demo_$X_base_2}) + 2'
  }
})
+fieldset({name:'demo'})
  +number({
    name:'base 1',
    value:2,
    trigger:{
      affects:['dependent_attribute']
    }
  })
  +number({
    name:'base 2',
    value:4,
    trigger:{
      affects:['dependent_attribute']
    }
  })
```
The above will add the `base_` and `base_2` for each item in `repeating_demo`, then add all of those together, and finally add 2 to the total.
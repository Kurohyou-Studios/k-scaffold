---
outline: 'deep'
---
# Repeating Sections
While a character sheet will have lots of static attributes that are always present (e.g. ability scores in D&D 5e), there are also many times when we need to make a section of a character sheet dynamic so that a user can enter any number of items (e.g. weapons, spells, etc). [Roll20's repeating sections](https://wiki.roll20.net/Character_Sheet_Development/Repeating_Section) handle this for us. There are however several aspects of repeating sections that create issues during character sheet development. The K-scaffold's `fieldset` mixins help to avoid or at least alleviate many of these issues.

- The name of the fieldset will be automatically set to `kebab-case`.
- The tooltips for attributes/buttons in the repeating section will be automatically formatted to show how to reference them in the repeating section.
- The event handling of the K-scaffold will ensure that we have access to all of our repeating attributes in our sheetworker functions.

Basic repeating section creation is simply a matter of using the `fieldset` mixin and giving it a name:
```pug
+fieldset({name:'my section'})
  +input({name:'name',type:'text',class:'underline'})
```
There's much more you can do with this though.
## Reacting to Item Deletions
There are many times when a character sheet needs to do things in response to a repeating item being deleted. For instance when an inventory item is removed, the encumbrance of the character needs to be updated. The `fieldset` mixin allows for handling of this through the `trigger` argument. In the fieldset mixin, the `triggeredFuncs` property of the `trigger` is a list of functions to call when an item is removed from the repeating section.
```pug
+fieldset({
  name:'my section',
  trigger:{
    triggeredFuncs:['removeEffect']
  }
})
  +input({name:'name',type:'text',class:'underline'})
```
## Custom Control Fieldsets
While the basic fieldset works for most use cases, some character sheets need to react to the addition of a repeating item on the sheet. This is where the `customControlFieldset` mixin comes in. The K-scaffold styling will hide the normal add button for the fieldset and the pug mixin will create a new add button that hooks into the K-scaffold event system. You can specify what functions need to be run when an item is created by passing the `addFuncs` argument to the mixin:
```pug
+customControlFieldset({
  name:'my section',
  trigger:{
    addFuncs:['addItemEffect']
  }
})
  +input({name:'name',type:'text',class:'underline'})
```
This will call the `addItemEffect` after the item is created in the scaffold, but before the creation is sent to Roll20. From the standpoint of your sheetworkers, the section will fully exist, but it won't appear on the sheet until all of the functions that need to be called are finished resolving.
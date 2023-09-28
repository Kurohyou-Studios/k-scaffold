---
outline: 'deep'
---
# Attributes and Abilities
At base, a character sheet needs attributes to store character information and abilities to use that character information. The K-scaffold provides several ways to easily create the html content for your attributes and ability buttons.

## Inputs & Buttons
Inputs and buttons are the work horses of the K-scaffold. They are how you define attributes to be created on your character sheet, and how you connect the attributes and buttons to your sheetworkers. There are mixins for all input and button types that are valid on Roll20 character sheets.

### Creating an input or button
The most basic method of creating an input and button is to simply use the [input](/reference/pug/Attributes.html#input) or [button](/reference/pug/Buttons.html#button) mixins.
```pug
+input({name:'my attribute',type:'text'})
+button({name:'my button',type:'action'})
```
You might notice that the name here is not a valid Roll20 character sheet name. The K-scaffold will handle adding the `attr_` prefix to the name and replacing any spaces in the name with underscores (`_`). This results in created html like this:
```html
<!-- Created html -->
<input type="text" name="attr_my_attribute">
<button type="action" name="act_my-button">
```
The object that is passed to the mixin can have any properties that an input or button html element can have. For example, adding inline styling to an input element would look like:
```pug
+input({name:'my attribute',type:'text',style:'border-bottom:1px solid black'})
+button({name:'my button',type:'action',style:'border-bottom:1px solid black'})
```
```html
<!-- Created html -->
<input type="text" name="attr_my_attribute" style="border-bottom:1px solid black">
<button type="action" name="act_my-button" style="border-bottom:1px solid black">
```
In addition to the normal html element properties, you can also add a [trigger property](/guide/sheetworkers/scripts.html) to the object in order to tell the K-scaffold how this attribute should be treated in your sheetworkers.
```pug
+input({name:'my attribute',type:'number',trigger:{affects:['other_attribute'],formula:'@{base_attribute} + @{base_mod}'}})
+button({name:'my button',type:'action',trigger:{triggeredFuncs:['rollButton']}})
```
See the [trigger property](/guide/sheetworkers/scripts.html) section for more details.
### Related elements
There are other elements that are related to inputs or buttons, such as selects. These work the same as the base input/button mixins, but with some additions.
#### Textareas
Textareas work just like inputs, but use the `+textarea` mixin instead.
```pug
+textarea({name:'my textarea'}).my-class
```
```html
<textarea name="attr_my_textarea" class="my-class"></textarea>
```
#### Selects (and options)
In addition to the functionality of an input mixin, the select mixin uses the pug `block` to pass options to the select. Options should use the `option` mixin, which uses the same object syntax as an input mixin. You can pass any property that would be valid on an option html element as a key/value pair on the object. The option mixin also accepts a block for passing content of the option.
```pug
+select({name:'my select'})
  +option({value:''})
    |Select One
  +option({value:1})
    |Option 1
  +option({value:2})
    |Option 2
  +option({value:3})
    |Option 3
```
```html
<select name="attr_my_select">
  <option value="">Select One</option>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</select>
```
## Attribute backed elements
Roll20 also provides the ability to name several types of elements that will pull their display state from attributes, but do not allow direct editing.
### Spans
Attribute backed spans are useful for displaying dynamic content within the context of other inline text. The K-scaffold provides the `span` mixin to allow the creation of these attribute backed elements while connecting them to the rest of the automation that the K-scaffold offers.
```pug
+span({name:'my span'})
  |default display
```
```html
<span name="attr_my_span">default display</span>
```
### Images
You can also display images dynamically based on an attribute that stores the url of the image to be used. This can be done with either the img element or the div element.
```pug
+img({name:'my image',src:'www.default-image.png'})
+div({name:'my background image',style:"background-image:url('default-image-url')"})
```
```html
<img name="attr_my_image" src="www.default-image.png">
<div name="attr_my_background_image" style="background-image:url('default-image-url')"></div>
```
See the [Roll20 wiki for more information](https://wiki.roll20.net/Image_use_in_character_sheets#Dynamic_Image_Source).
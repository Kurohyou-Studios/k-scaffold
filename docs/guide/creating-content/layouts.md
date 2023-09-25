---
outline: 'deep'
---
# Premade layouts
The K-scaffold offers several mixins that automatically create layouts commonly used in sheets. These layout mixins use the basic mixins for creating attributes and abilities and add additional functionality.
## Labels
The needs of character sheets mean that frequently you need to create inputs that have a label associated with them. In order to make your sheet as accessible as possible, these should also use the html label element. The K-scaffold's label mixins create premade layouts for the label text and the input or button.
### Label Basics
All of the label mixins use the same basic format:
```pug
+input-label({
  inputObj:{name:'my attribute',type:'text'},
  spanObj:{'data-i18n':'my label'}
}).div-class
```
```html
<label class="input-label">
  <span class="input-label__text" data-i18n="my label"></span>
  <input class="input-label__input" name="attr_my_attribute" type="text">
</label>
```
The K-scaffold's styling presets will give these elements a flexbox display and spacing. You can override these settings, or use the K-scaffold's utility classes to give this construction the layout that you want.
## Fill to left
Many RPG systems use pip systems or another display where the user fills in boxes from the start of the boxes to the end to denote how much of a resource they have use or have available. The Roll20 sheet author community has [solved how to do this easily](https://wiki.roll20.net/CSS_Wizardry#Fill_Radio_Buttons_to_the_Left), but the solution does require lots of html and styling. The K-scaffold's `fillLeft` mixin provides this functionality out of the box with easily customizable styling.
```pug
+fillLeft({
  radioObj:{name:'my radio',value:2},
  valueArray:[1,2,3,4,5]
}).my-custom-class
```
```html
<div class="fill-left my-custom-class">
  <input class="fill-left__radio" name="attr_my_radio" value="0" type="hidden" title="@{my_radio}"/>
  <input class="fill-left__radio" name="attr_my_radio" value="1" type="checkbox" title="@{my_radio}"/>
  <input class="fill-left__radio" name="attr_my_radio" value="2" checked type="checkbox" title="@{my_radio}"/>
  <input class="fill-left__radio" name="attr_my_radio" value="3" type="checkbox" title="@{my_radio}"/>
  <input class="fill-left__radio" name="attr_my_radio" value="4" type="checkbox" title="@{my_radio}"/>
  <input class="fill-left__radio" name="attr_my_radio" value="5" type="checkbox" title="@{my_radio}"/>
</div>
```
This uses checkboxes as an easy way to clear the fill to left area.
## Collapsible content
Another frequent layout pattern in a digital character sheet is that there is a collapsed and expanded view of various sections on the sheet. This is particularly true of the individual items of a repeating section.
The K-scaffold provides the `collapse` mixin to easily create a controller for this setup. In addition it provides the `collapse-container`, `collapsed`, and `expanded` utility classes for creating these different views.
### Collapsing repeating content
In repeating sections, you simply need the mixin and the `collapsed` and `expanded` classes.
```pug
+fieldset({name:'section'})
  +collapse
  span Always displayed content
  span.collapsed Content displayed when collapsed
  span.expanded Content displayed when expanded
```
### Collapsing non repeating content
Outside of a repeating section, you need to use the `collapse-container` utility class to define what element holds the collapsible elements and the collapse control. You also need to specify a unique name for the collapse mixin.
```pug
.collapse-container
  +collapse('my collapse')
  span Always displayed content
  span.collapsed Content displayed when collapsed
  span.expanded Content displayed when expanded
```
### Nesting collapsible elements
You can also use the `collapse-container` class to create nesting collapsible elements.
```pug
.collaps-container
  +collapse('my collapse')
  span Always displayed content
  .collapsed.collapse-container
    +collapse('nested collapse')
    span Always displayed content
    span.collapsed Content displayed when collapsed
    span.expanded Content displayed when expanded
  span.expanded Content displayed when expanded
```
## Content scaled elements
Character sheets frequently have inputs and textareas that need to grow based on the content that a user has entered. The K-scaffold's adaptive mixins provide this functionality without needing to manually recreate the [styling created by the sheet author community](https://wiki.roll20.net/CSS_Wizardry#Content-scaled_Inputs).

Both `adaptiveInput` and `adaptiveTextarea` work the same. `adaptiveTextarea` will be used for demonstration purposes:
```pug
+adaptiveTextarea({name:'character description'})
```
```html
<div class="adaptive adaptive--text">
  <span class="adaptive--text__span" name="attr_character_description" title="@{character_description}"></span>
  <textarea class="adaptive--text__textarea" name="attr_character_description" title="@{character_description}"></textarea>
</div>
```
The K-scaffold's included styling will allow this textarea to auto size vertically. You can also override this styling to give a different minimum height (or width in the case of the input), or a different maximum.
## Compendium Attributes
If your system has a compendium on Roll20, you probably want to integrate your sheet with the system's compendium. The first step to doing this is creating attributes to accept the dropped information from the compendium and an element to target with the drop.
### All in one mixin
The K-scaffold provides an all in one solution for creating the drop target and the attributes.
```pug
+compendiumContainer({vttCategories:['npcs','vehicles']})
  |Rest of your sheet code here
```
This will create a compendium drop target div as well as the attributes to accept the drop information. See the [reference](reference/pug/Mixins.html#compendiumContainer) for more detailed information.

Note that the vttCategories must be categories that Roll20 has marked as direct vtt drop capable. This is something you will need to work with Roll20 on to enable if your categories are not already marked as such. Common categories like NPCs or Vehicles should already be marked as such.
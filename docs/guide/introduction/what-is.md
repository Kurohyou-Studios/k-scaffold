---
aside: false
title: Guide
---
# What is the K-scaffold?
The K-scaffold is a library of Pug, SCSS, and Javascript code that simplifies the task of writing Roll20 character sheets. While it is not a "no code" or "low code" solution, it does dramatically reduce the amount code you will need to write to create a complex sheet.

There are three libraries that make up the K-scaffold.

## Pug Library
The [Pug library](/reference/pug/Attributes.html) provides mixins and functions that speed up common creations for Roll20 character sheets and automate the linking of your sheet's attributes to your sheetworkers. These range from basic inputs to complex constructions of autosizing textareas. In addition, the mixins provided by the library ensure that your attribute and button names follow a good naming scheme where attribute and roll button names are in `snake_case` while action buttons are in `kebab-case`. These casing rules ensure that your sheet avoids known issues with naming conventions.

## Style Library
The [style library](/reference/style/mixin.html) provides out of the box functionality for several of the constructions created by the Pug Library, particularly the auto sizing inputs and textareas, and the fill to left constructions.

In addition, the library provides a gamut of CSS variables to allow you to easily customize how the scaffold's default styling works and how your sheet responds to dark/light mode.

## Sheetworker Library
The [sheetworker library](/reference/sheetworkers/Sheetworkers.html) allows you to ignore the event management of Roll20. Instead, your functions will have automatic access to all attributes on your sheet that were created by a mixin from the Pug library. In addition the library provides aliases for many of the Roll20 sheetworkers that add additional features to the base sheetworkers.
---
outline: 'deep'
---
# Single File Components
The K-scaffold also makes it possible to write single file components (SFCs). This is possible by using the [module](/k-scaffold/reference/pug/Scripts.html#module) and [scss](/k-scaffold/reference/pug/Scripts.html#scss) mixins. SFCs provide a simple project structure that ensures code for a given section is located near the rest of the code for that section.
## Setup your project to use SFCs
To setup an SFC based project, you will need to modify the directory setup described in [getting started](/k-scaffold/guide/introduction/getting-started.html). Instead of separating files by file type, they should be separated by purpose.
```
Project Name/
  source/
    components/
      _index.pug
    views/
      _index.pug
    sections/
      _index.pug
    scss/
      _index.scss
    javascript/
      _index.pug
    _rolltemplate.scss
    projectName.pug
    projectName.scss
    translation.json
    sheet.json
    readme.md
  package.json
  k.config.mjs
  jsconfig.json
```
The directories have specific uses.
- `components/`: holds your reusable components; what would have been mixins in the none SFC setup.
- `views/`: holds the specific views of the pages, aka tabs.
- `rolltemplate/`: holds the content for your roll template(s)
- `sections/`: holds discrete sections of the sheet (e.g. an ability score section)
- `scss/`: holds the generic styling for the sheet, specifically variables and fonts.

When working with single file components, it is recommended to use [the official K-scaffold VSCode extension](https://marketplace.visualstudio.com/items?itemName=kurohyou-studios.pugfold). This will ensure that your embedded SCSS and JS will be syntax highlighted properly.

The `projectName.pug` and `projectName.scss` will also be modified from what is described in getting started.
::: code-group
```js [main.js]
// main.js
k.version = 0.2;//Set to the current version of your sheet
```
```pug [projectName.pug]
//- projectName.pug
include k-scaffold
include ./components/_index.pug
include ./sections/_index.pug
//- Other globally required pug files should be included here
- const templateName = 'project Name';
+hidden({name:'sheet version',value:0})
//- Now, for our actual sheet. We'll wrap this in a main element and give it an ID of main.
main#main
  +tabs({name:'project-name',defaultActiveTab:'settings'})
    include ./views/_index.pug
+hidden({name:'template start',value:`@{whisper}&{template:${templateName}} {{character_name=@{character_name}}} {{character_id=@{character_id}}}`})
include ./rolltemplate/_index.pug
+kscript('projectName')
  //- All additional javascript files should start here
  include ./javascript/_index.pug
```
```scss [projectName.scss]
// projectName.scss
@use 'k-scaffold' as k;
@use './scss';
// use the K-scaffold's sfc export:
@use 'sfc';

html {
  font-size: 16px;
}
body {
  @include scss.variables;
  font-size: 1rem;
  .ui-dialog {
    .tab-content {
      .charsheet {
        @include k.defaultStyles;
        @include sfc.sheet;
      }
    }
  }
  &.sheet-darkmode{
    @include scss.dark;
  }
}
```
:::
### Generic styles
Most projects will also have styles that are generic to the entire sheet. These are handled by creating scss files in the `scss` folder and aggregating them into a mixin in the `_index.scss` file in that directory.
::: code-group
```scss [scss/_text-utility.scss]
@mixin style{
  .text1{
    font-size:175%
  }
  .text2{
    font-size:150%
  }
  .text3{
    font-size:125%
  }
  .text4{
    font-size:100%
  }
}
```
```scss [scss/_index.scss]
@use './text-utility';

@mixin generic{
  @include text-utility.style;
}
```
:::
Creating these as mixins allows us to then easily add these into the basic styling for the character sheet and for roll template(s).
::: code-group
```scss{17} [projectName.scss]
// projectName.scss
@use 'k-scaffold' as k;
@use './scss';
// use the K-scaffold's sfc export:
@use 'sfc';

html {
  font-size: 16px;
}
body {
  @include scss.variables;
  font-size: 1rem;
  .ui-dialog {
    .tab-content {
      .charsheet {
        @include k.defaultStyles;
        @include scss.variables;
        @include scss.generic;
        @include sfc.sheet;
      }
    }
  }
  &.sheet-darkmode{
    @include scss.dark;
  }
}
```
```scss [rolltemplate.scss]
// ./scss/_rolltemplate.scss
@use 'k-scaffold' as k;
@use './scss';
// use the K-scaffold's sfc export:
@use 'sfc';
.sheet-rolltemplate-project-name{
  @include scss.variables;
  @include k.defaultRollStyling;
  @include scss.generic;
  @include sfc.rollTemplate;
  // Additional styling as needed here.
}
```
:::
## Creating a SFC
Components and sections will be made of pug mixins, scss, and sheetworker functions (if applicable). These should built so that they can be used in any other position on the sheet. Views are created the same way, but will not declare mixins as they are not intended to be used in multiple places.
::: code-group
```pug [Component]
//- components/_ability.pug
mixin ability(name)
  .ability-container
    +roller({name,role:'heading',class:'ability-button','aria-level':3,'data-i18n':name,trigger:{triggeredFuncs:'rollAbilityCheck'}}).ability-header
    .ability-scoreaaaa
      +number({name,class:'underlined ability-score',trigger:{affects:[`${name}_mod`]}})
      +span({name:`${name} mod`,class:'abilty-mod',trigger:{affects:[`${name}_save`],calculation:'calcMod'}})
    .save-container
      +roller({name:`${name} save`,class:'ability-save-button'})
      +span({name:`${name} save`,class:'ability-save',trigger:{calculation:'calcSave'}})
+module.
  const calcMod = ({trigger,attributes}) => {
    const base = trigger.name.replace(/_mod/,'');
    return Math.floor((attributes[base] - 10) / 2);
  };
  const calcSave = ({trigger,attributes}) => {
    const mod = trigger.name.replace(/save/,'mod');
    return mod + attributes.proficiency;
  };
  k.registerFuncs({calcMod,calcSave});
+scss.
  .ability-container{
    display: flex;
    gap: var(--half-gap);
    .ability-score,
    .save-container{
      display:flex;
      flex-direction: column;
      gap: var(--tiny-gap);
    }
  }
```
```pug [View]
//- views/_abilities.pug
+tab({name:'abilities',container:'article'})
  .ability-view
    each ability in ['strength','dexterity','consitution']
      +ability(ability)
+scss.
  .ability-view{
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
  }
```
:::
By combining multiple views, sections, and components you can create anything you need in a sheet and keep your code organized, simple, and maintainable.
### Scoping Styles
In Roll20 character sheets, many of the advanced scoping solutions for CSS seen in modern web development are not currently possible. The best option for creating scoped styles is to wrap your components/views and styles in a wrapper element.
```pug{3,7,10}
//- views/_abilities.pug
+tab({name:'abilities',container:'article'})
  .ability-view
    each ability in ['strength','dexterity','consitution']
      +ability(ability)
+scss.
  .ability-view{
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
  }
```
This will ensure that your style for the component is only applied to elements contained within it. Of course, you'll want to be aware of if your component is meant to contain other components within it.
#### Sheet vs. Rolltemplate styles
By default, the styles added via the `scss` mixin are added to both `sfc.sheet` and `sfc.rollTemplate`. You can scope these to the sheet or the roll template by adding an argument specifying which style sheet they should be available in.

::: code-group
```pug{6} [Sheet Component]
//- views/_abilities.pug
+tab({name:'abilities',container:'article'})
  .ability-view
    each ability in ['strength','dexterity','consitution']
      +ability(ability)
+scss('sheet').
  .ability-view{
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
  }
```
```pug{3-5} [Global Component]
mixin dRow
  .display-row
    block
+scss.
  .display-row,
  .sheet-display-row{
    display:flex;
    gap:1rem;
    justify-content:space-around;
    align-items:start;
  }
```
```pug{3-5} [Roll Template]
+rolltemplate('template-name')
  .roll-header
    +characterLink
  .roll-content
    +templateConditionalDisplay('roll')
      +display-row
        h3(data-i18n='roll')
        span {{roll}}
+scss('roll').
  .sheet-roll-header{
    background-color: blue;
  }
  .sheet-roll-content{
    background-color: green;
  }
```
:::
Here, we've designated the ability view styling as only being available in the sheet sfc styles because we won't be making an ability view for our roll template. Our display row styling is available in both, because it is a simply layout mixin that is meant to be used in both environments. And finally, the styling for our rolltemplate is only needed in the template itself, so we designate its scss as `roll`.

Because of the restrictions present in roll templates, any styles that are meant to be used in the rolltemplate should be written so that they are valid css to [the legacy sanitizer](https://wiki.roll20.net/Legacy_Sheet_Sanitization). Also, note that any sheetworker modules written for a component will not react to or affect the component when it is in the roll template.
```pug{3-5}
mixin dRow
  .display-row
    block
+scss.
  .display-row,
  .sheet-display-row{
    display:flex;
    gap:1rem;
    justify-content:space-around;
    align-items:start;
  }
```
This component is intended to be used in both the sheet and the roll template. Because of this, the scss for is written to be compatible with both the legacy and  CSE sanitization. You could alternatively simply write your class names in the pug with the `sheet-` prepend, but which option is better is largely a personal choice. The only recommendation is that the presence or absence of the `sheet-` prepend in the pug should be consistent throughout the project instead of being present sometimes and absent other times.
### Syntax Highlighting & Intellisense
It is recommended to use the [official K-scaffold Sheet Framework VSCode extension](https://marketplace.visualstudio.com/items?itemName=kurohyou-studios.pugfold) in order to provide SCSS and JS syntax highlighting within your single file components. Unfortunately, the intellisense features of SCSS and Javascript are not currently available when writing single file components, even with the extension.

If you feel you need JS and/or SCSS intellisense, you can instead write single directory components. These are very similar to SFCs, but instead of all the code being present in a single file, you will make a directory for each component. The directory and files for our ability container above would look like this:

::: code-group
``` [abilityContainer/]
abilityContainer/
  _index.pug
  _style.scss
  sheetworkers.js
```
```pug [_index.pug]
mixin ability(name)
  .ability-container
    +roller({name,role:'heading',class:'ability-button','aria-level':3,'data-i18n':name,trigger:{triggeredFuncs:'rollAbilityCheck'}}).ability-header
    .ability-scoreaaaa
      +number({name,class:'underlined ability-score',trigger:{affects:[`${name}_mod`]}})
      +span({name:`${name} mod`,class:'abilty-mod',trigger:{affects:[`${name}_save`],calculation:'calcMod'}})
    .save-container
      +roller({name:`${name} save`,class:'ability-save-button'})
      +span({name:`${name} save`,class:'ability-save',trigger:{calculation:'calcSave'}})
+module
  include ./sheetworkers.js
+scss
  include ./style.scss
```
```scss [_style.scss]
.ability-container{
  display: flex;
  gap: var(--half-gap);
  .ability-score,
  .save-container{
    display:flex;
    flex-direction: column;
    gap: var(--tiny-gap);
  }
}
```
```js [sheetworkers.js]
const calcMod = ({trigger,attributes}) => {
  const base = trigger.name.replace(/_mod/,'');
  return Math.floor((attributes[base] - 10) / 2);
};
const calcSave = ({trigger,attributes}) => {
  const mod = trigger.name.replace(/save/,'mod');
  return mod + attributes.proficiency;
};
k.registerFuncs({calcMod,calcSave});
```
:::

This results in a more complex directory structure, but each file will provide the full suite of language features you expect. Note that the only difference in the `module` and `scss` mixin calls is that they are not followed by the [pug block dot](https://pugjs.org/language/plain-text.html#block-in-a-tag) (e.g `+scss` instead of `+scss.`). Also, note that if you decide to use single directory components, there is no need to use the `.pug` file type.
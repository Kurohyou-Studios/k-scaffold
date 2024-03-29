# First Files
Once your file structure is created and your config file set up, the first files you need to create for your project are your master Pug and SCSS files. These will group all of your ./Pug/SCSS into a single final file that will be parsed by the scaffold. These master Pug and SCSS files will be the only Pug/SCSS files whose names do **not** start with an underscore (`_`). If you used the K-scaffold Initializer, these files will already be setup for you.
## Pug file
Your master Pug file will import the K-scaffold's pug library as well as be the entry point for all the rest of your Pug files. For a tabbed character sheet, this will look like:
```pug
//- projectName.pug
include k-scaffold
//- Other globally required pug files should be included here
- const templateName = 'project Name';
+hidden({name:'sheet version',value:0})
//- Now, for our actual sheet. We'll wrap this in a main element and give it an ID of main.
main#main
  +tabs({name:'project-name',defaultActiveTab:'settings'})
    +tab({name:'settings',button:{content:'settings',class:'material-icons'},container:'article',active:true})
      include ./pug/_settings.pug
    +tab({name:'pc',container:'article'})
      include ./pug/_pc.pug
    +tab({name:'npc',container:'article'})
      include ./pug/_npc.pug
+hidden({name:'template start',value:`@{whisper}&{template:${templateName}} {{character_name=@{character_name}}} {{character_id=@{character_id}}}`})
+kscript('projectName')
  //- All additional javascript files should start here
  include ./js/_index.pug
```
This will create a basic tabbed layout that is used by many sheets that have multiple "sheets" that need to be available (e.g. PC vs. NPC). You'll add additioinal content to this by adding content to the various files that are included within each tab. You can do this by writing the pug for each tab directly in those files or by including additional sub files in them.
## SCSS file
For your SCSS, you'll need to create two initial files. The first one will be the top level SCSS file that will act as an index for your other style files.
```scss
// projectName.scss
@use './scss/fonts';
@use './scss/general';
@use './scss/rolltemplate';
```
This file is very simple, and only acts as a directory to your active files. Within your `scss/` directory, you'll create these additional files.
- `_fonts.scss` will be where you put your font import statement for any fonts you are using from [google fonts](https://fonts.google.com/). See the [Roll20 wiki](https://wiki.roll20.net/CSS_Wizardry#Legacy_Sheet) for information on how to format your font import. Note that the legacy font import should always be used so that your fonts will work in the roll template as well as the sheet.
- `_general.scss` will be where the styling for your sheet actually happens.
```scss
// ./scss/_general.scss
@use 'k-scaffold' as k;
@use './variables';
@use './components';
@use './sections';

html {
  font-size: 16px;
}
body {
  @include variables.all;
  font-size: 1rem;
  .ui-dialog {
    .tab-content {
      .charsheet {
        @include k.defaultStyles;
        @include components.all;
        @include sections.all;
      }
    }
  }
  &.sheet-darkmode{
    @include variables.dark;
  }
}
```
- `_rolltemplate.scss` will be where the styling for your roll template happens.
```scss
// ./scss/_rolltemplate.scss
@use 'k-scaffold' as k;
@use './variables';
@use './components';
// Change rolltemplate class name to match project's rolltemplate.
.sheet-rolltemplate-project-name{
  @include variables.all;
  @include k.defaultRollStyling;
  @include components.all;
  // Additional styling as needed here.
}
```
## Templating
In addition to the creation of your pug and scss files, you can also create files that will act as templates for the creation of the `sheet.json` and translation.json files for your sheet.
### translation.json
The `translation.json` template is simply a json files that contains translation keys that don't exist in your pug, or whose values are different from the value auto generated by the K-scaffold.
```json
// ./source/translation.json
{
  "key 1":"value of key 1"
}
```
### sheet.json
The K-scaffold will automatically insert the correct name of your html and css files in the generated `sheet.json` file. In addition to this, you can specify the other fields of the `sheet.json` file by putting them in the `sheet.json` located in `source/`. See the [Roll20 wiki](https://wiki.roll20.net/Sheet.json) for more details on `sheet.json` properties.

In addition, you can write the contents of the `instructions` property using markdown format in the `source/readme.md` file. This allows you to write detailed instructions for your sheet easily.
<!-- ## Advanced Topics
A character sheet is of course much more involved than these simple files. For a more involved tutorial on using the K-scaffold to create a sheet, see the [Sheet Author's Journey (WIP)](/guide/sheet-journey-1) which creates an actual sheet from project initialization to deployment.

You can also read the rest of the generic guide which will go over how to use each piece of the library. -->
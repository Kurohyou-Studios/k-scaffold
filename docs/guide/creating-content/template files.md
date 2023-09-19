---
outline: 'deep'
---
# Template Files
When preparing a character sheet for release on the Roll20 repo, there are more files than just html and css that you need to have for release. You also need a `sheet.json` and `translation.json` file. The `sheet.json` file tells Roll20's system what files to load for your character sheet, what instructions to display for your sheet, and what compendium it should automatically connect to (if any). The `translation.json` file gives the default translation values for the sheet and is used by crowdin to generate the language specific files.

In order to simplify the generation of these files, the K-scaffold offers template functionality. To enable it, simply add a `templates` path to your `k.config.mjs`:
```js{7}
export default {
  source:'./source',
  destination:'./build',
  testDestination:'../__tests',
  pugOptions:{},
  scssOptions:{},
  templates:'./source'
};
```
You'll put a `sheet.json`, `translation.json`, and `readme.md` file in this directory.
## Templating sheet.json
The K-scaffold will take care of generating the references to the built html and css, but your template `sheet.json` file should specify other [properties of the `sheet.json` file](https://wiki.roll20.net/Sheet.json). At minimum this should be your roll20userid and the names of the authors:
```json
{
  "authors": "Scott Casey",
  "roll20userid": "459831"
}
```
The sheet.json properties you specify are taken as is by the K-scaffold and combined with the reference to the sheet's html and css files, so these can be used as documented in [the wiki](https://wiki.roll20.net/Sheet.json).
### Sheet Instructions
You can write the instructions for your sheet directly in the `instructions` property of the `sheet.json`, but it is difficult to write instructions that are more than a single paragraph in the JSON. To make good documentation of your sheet easier, the K-scaffold provides the ability to write your instructions in mardown. Simply create a `readme.md` file in the directory you specified as your templates directory in your `k.config.mjs`. In this file you can write the instructions for your sheet using normal markdown syntax. The K-scaffold will convert store this in the generated `sheet.json` file in your build directory so that it will be displayed on your sheet's selection page when a GM selects it for their game.
```md
# My Sheet
Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptates pariatur veritatis, molestias officiis blanditiis eius odio fugiat repellat magnam nulla et molestiae ullam, omnis libero adipisci dolores minima obcaecati culpa vel repellendus deleniti aspernatur quod. Ducimus architecto atque autem accusantium debitis unde inventore at, ex quibusdam eveniet illum temporibus.
## Functionality
Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptates pariatur veritatis, molestias officiis blanditiis eius odio fugiat repellat magnam nulla et molestiae ullam, omnis libero adipisci dolores minima obcaecati culpa vel repellendus deleniti aspernatur quod. Ducimus architecto atque autem accusantium debitis unde inventore at, ex quibusdam eveniet illum temporibus.
## Contact
Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, molestiae?
```
## Templating translation.json
The K-scaffold automates many of the tasks for creating a `translation.json` file, however there are times when it cannot add the proper keys or the proper values for keys. By creating a `translation.json` file in your templates directory, you can specify keys that aren't present in your pug/generated html or a value for a key that is different from what the K-scaffold's automated translation creation will set. Simply write any keys that you need to add or override with their values in the template `translation.json` file:
```json
{
  "key that is only in sheetworker":"some value",
  "key that is in pug, but needs different value":"other value"
}
```
This is particularly useful for translating the generated content of tab buttons (which by default use a string based on the tab container name and specific tab name), and for creating translation keys that are only used in your sheetworkers via [`k.getTranslationByKey`](/reference/sheetworkers/Sheetworker%20Aliases.html#getTranslationByKey). Any key/value pair that you put in the template `translation.json` will override the value for that key in the generated `translation.json`.
# K-scaffold
## Changelog
### 2.5.4
- Update translation handling to use the i18nreplacer package

### 2.5.1
- Fixed missing newRow passing in `addItem`
### 2.5.0
- Json method on `attributesProxy`
- hidden k-scaffold action button for use by `k.send`
- startRoll Alias that accepts object instead of string
- fix for collapse container hover styling
### v2.4.2
- Fixes error with passing of event object when no previousValue.
### v2.4.0
#### New Features
- Added ability to define custom trigger properties
  - primitive values (e.g. numbers/strings) will only use the value for that key from the first time it is declared in the pug
  - Array values will create a merge of arrays
  - Object values will also create a recursive merge of objects, with properties from the first declaration of the object taking precedence. The recursive merge follows these rules as well.
- Added sfc k.config property. This is a boolean that will force reparsing of both pug and scss files when either is changed
- The K-scaffold mixins are now exposed to scss used in the `+scss` mixin calls
#### Bug Fixes
- Fixed a bug that prevented the googlefont mixin from being parsed correctly
### v2.3.0
- Improved sanitization for capitalization in attribute/button names
- Expose the K-scaffolds `updateSheet` function
- Attributes are now properly passed to all pug mixins (e.g. `+text({name:'my text'}).my-class` will now work as expected)
- Error added when using the `input` mixin without specifying a type.

### v2.2.3
- Fixes an error with extraction of sfc styles using nested styles that caused a non crashing error message to be logged.
- Moved the changelog to a separate file.
### v2.2.2
- Updates dependencies for production to remove critical vulnerabilities.
### v2.2.1
- Fixes an issue where scss would not recompile when changes were made to scss in a `+scss` mixin in the pug.
- Fixed a potential crash when using sfc before creating sfc scss content (Thanks Rich!).
- Updated sfc backend to use better object management.
- Adds the `googleFont` pug mixin to provide a unified font import between the fonts the K-scaffold is dependent on and custom fonts for your sheet.

### v2.2.0
- Adds a macro parser function to the K-scaffold
- Adds an scss mixin to the pug library for making Single File Components of pug, SCSS, and sheetworkers
  - Also adds an `sfc` import for use in scss files to access the sfc styling.

### v2.1.0
- Adds support for Roll20 macro based formula property on trigger.
  - formulas are an easy way to define a simple calculation that a given attribute should use to calculate it's value.
  - Formulas are an alternative to writing basic calculation functions, although more complex calculations will still require the use of a calculation function.
  - Formulas can be used in addition to calculations, and are run before custom calculation functions.
  - Formulas can also sum the values of a repeating section's attributes. Simply write the call to the repeating section's attributes in the generic $X syntax (e.g. `@{repeating_equipment_$X_weight}`), and surround the calculation to be done on the repeating attribute(s) with `={...}=` (e.g. `={@{repeating_equipment_$X_weight} * @{repeating_equipment_$X_quantity}}=`.
    - Note that if you are referencing a repeating attribute from within the repeating section itself, you don't need to wrap the expression.
  - The math functions and syntax available in [Roll20 macros](https://wiki.roll20.net/Dice_Reference#Math_Operators_and_Functions) can be used in formulas.
- Fixed an issue that caused repeating row attributes to affect all rows in the section instead of just the attributes in the given row.
  
### v2.0.2
- Fix an error in the translation list order generation

### v2.0.1
- Fixed an error in the addFunc handling that caused a crash when improperly defined.

### v2.0.0
- Potentially breaking changes
- attribute queue management is now more dynamic and is set when the attribute value is changed
- Watch mode now only changes file types that were actually changed (e.g. only css is updated when a scss file is updated)

### v1.7.4
- Fixed an error that caused action buttons in repeating sections to not trigger

### v1.7.3
- Fix an error in the scaffold when encoding cascade information for an action button

### v1.7.2
- Fix readme encoding for sheet.json templating

### v1.7.1
- Fix handling of prefixes in action buttons and rollers

### v1.7.0
- Added ability to template sheet.json, and instructions property of sheet.json.
  - Instructions can be templated by adding a `readme.md` file to your source directory. This will be converted to sheet.json format and added as the instructions format. If no readme is provided, instructions property will not be set/will use what was in the sheet.json template file.
  - The html and css properties will use the generated html and css file names as their values
  - Works with dynamic directory setting
  - the preview property will use either the value set in the template file or will default to .jpg file named the same as the generated html file.
### v1.6.1
- Fixed a crash in watch from the translation template changes.

### v1.6.0
- Added the ability to define a translation template file instead of relying on the scaffold to not overwrite manual changes to the generated translation file.

### v1.5.7
- Expose setActionCalls function

### v1.5.6
- fixes an error where defining a triggeredFunc for a tab would overwrite the default of kSwitchTab

### v1.5.5
- Miscellaneous blocks in the tabs mixin are now added to nav instead of at the top of the tabs container.

### v1.5.4
- Updated rolltemplate mixin `characterLink` to accept a level argument to customize what level of h1-h6 it uses.
- Updated `characterLink` to use the attributes passed to it via pug.
- Fixed an error in the `select` mixin that prevented `option`s from using custom content.

### v1.5.2
- Fixed an error that prevented the scaffold from responding to removal of repeating section rows.
- Fixed an error that caused an empty string to be the first "id" stored for each section.

### v1.5.1
- Fixed an error in `orderSection`/`orderSections` that caused rowIDs to be improperly ordered when IDs were a mix of user ordered and unordered IDS. **NOTE** This changes how `orderSection` works. It now returns the ordered array instead of mutating the ID array in place.

### v1.4.2
- Fixed an issue that prevented translation automation from handling complex i18n entities like `data-i18n-placeholder`.

### v1.4.1
- Add ul element wrapper around nav buttons
- Add ability to specify source url for scripts

### v1.3.0
- Fixed an issue that caused the existing key/value pairs of the translation file to be overwritten every time.
- Fixed an issue that prevented some mixins from using passed attributes (e.g. `+text({name:'my-text'}).quick-class`).
- Fixed an issue that prevented attribute backed spans from using the attribute prefix that the user has defined.
- Added a modal mixin

### v1.2.3
- Fixed an issue that caused the build to fail on some linux systems.

### v1.2.2
- Fixed an issue that caused the watch build mode to ignore dynamic destinations

### v1.2.1
- Fixed a dependency issue with node-watch
- Updated readme.

### v1.2.0
- Added the ability for dynamic destination directories

### v1.1.0
- Added module mixin to Pug Library

### v1.0.0
- Soft Launch

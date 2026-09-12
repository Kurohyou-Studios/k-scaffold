# K-scaffold
## Changelog
### 2.8.1
- **Cascade keying: key on the attribute `name`, not the element `title`.** `storeTrigger` used to derive the cascade key by parsing the element's `title` back into an attribute name. Mixins default `title` to the attribute call (e.g. `@{repeating_x_$X_field}`) so this normally worked, but a user-supplied `title` (a custom tooltip) replaced the key, silently breaking the cascade, listeners, and `affects` links for that attribute. New `cascadeName()` in `lib/render/locals/index.js` builds the key from the element's `name` plus the current repeating prefix; `title` is now purely user-facing. Reported by Riernar.

### 2.8.0
- **Watch mode: live terminal dashboard.** `k-build --watch` now renders a top-anchored compact dashboard instead of streaming log output: a coloured status bar at the top with one segment per tracked file (green = success, red = error), with source-file `->` lines and full error output appearing below only on failure. Redraws cleanly on terminal resize across Windows ConPTY (VS Code integrated terminal), other Windows terminals, and *nix (multi-source resize detection: stdout/stdin `resize` events, `SIGWINCH`, plus a 250 ms `process.stdout.rows` poll for ConPTY where the resize event is unreliable). First-build errors that fire before chokidar's `ready` event are captured. Non-TTY environments (CI, piped output) print a one-time `[k-watch] Watching for changes (no TTY — dashboard unavailable)` banner and otherwise stay quiet. **Behavior change**: one-shot builds no longer print `Processing ...` or `written to ...` messages; failures still surface with full SASS/pug error output.
- **Error attribution: SCSS in `+scss.` blocks.** New `lib/render/scssErrorAttribution.js` re-parses the pug source tree (recursing into includes) when SASS errors hit and identifies the originating `+scss.` block. Two strategies: a brace-imbalance scan that catches errors mislocated by an unclosed `{` or extra `}` inside user content (otherwise SASS reports the error on the synthetic SFC `@mixin roll` line, far from the real bug), and a snippet match against `err.span.context` / `err.span.text` for non-imbalance errors. The dashboard's `-> source` line now points at the actual partial (e.g. `views/_edit-equipment.pug`) rather than the root pug entry.
- **Error attribution: pug `@babel/parser` failures.** `renderPug.js` walks the pug AST when the `with` package's babel pass rejects a Code node — previously surfaced as "Error parsing body of the with expression" with no location because `with` strips the source map before re-parsing. The walk recurses into included pug files and reports `file:line: <babel message>` plus the offending expression.
- **Error attribution: general source-file extraction.** `extractSourceFile` (in `reporter.js`) pulls source paths from `err.span.url` (sass-embedded), `err.filename` (pug parse errors), or absolute paths embedded in `err.message` (pug runtime throws). Paths inside `node_modules` are annotated `[k-scaffold]/...` so framework internals are obvious vs. user code.
- **Reporter cleanup.** Removed the standalone `errorHead` utility — `reporter.error` now handles uniform formatting across console and dashboard modes.
- **attributesProxy: correct change detection in the set trap.** Previously stringified the entire attributes/updates container objects instead of the compared field, so same-value writes would always queue a spurious update. The fix compares `obj.attributes[prop]` and `obj.updates[prop]` directly, and uses `hasOwnProperty` so falsy updates (`0`, `''`) participate in the comparison.
- **attributesProxy: preserve `attributes.set({callback})` across cascade-queue processing.** The callback used to be dropped silently when the queue was non-empty, because the recursive `set()` call inside cascade handling was invoked with no callback. Callbacks are now stashed on `_pendingCallback` so they survive the round trip and fire once when the flush completes.
- **attributesProxy: defer `setSectionOrder` in `sort()` and `move()` until after pending `setAttrs` commits.** Previously fired synchronously inside the sort, which raced with row creation/writes from the same sort callback. Deferring via an `attributes.set({callback})` ensures setAttrs lands first.
- **attributesProxy: stop clobbering non-numeric checkbox values with numeric `defaultValue`.** The getter used to substitute the cascade's `defaultValue` whenever `typeof defaultValue === 'number'`, which silently returned `0` for checkboxes whose checked value was a non-numeric string like `/w gm`. The check is now scoped to `type === 'number'`. **Behavior change**: attributes whose cascade has a numeric `defaultValue` but a non-`number` type will now pass through their raw stored value instead of the default. Sheets that relied on the old coercion should declare `type: 'number'` explicitly.
- **Build: watch-loop fix.** `k-build --watch` would spontaneously process the same source files many times in a row (often 30+) for no visible reason, with the storm eventually clearing on its own. Root cause: external processes on Windows (antivirus, search indexer) touch file metadata and fire `node-watch` events without real content changes; the watcher had no debouncing or change-detection, so each event ran the full pipeline. Fix applies a 300 ms per-file trailing debounce and an MD5 content-hash cache that makes `processSheet` a no-op when the file's bytes are unchanged. Also fixes a latent bug in the `node_modules` skip regex that never matched on Windows (`\node_modules\`) because it only checked forward slashes.
- **Tests: added `setSectionOrder` mock to `mock20.js`** so generated test frameworks can exercise sort/move paths without `ReferenceError`.
- **Tests: fixed `underscore` import in `mock20.js`** so the generated test framework can use the lodash-style helpers via the default-imported binding. Changes `import { _ } from 'underscore'` to `import _ from 'underscore'`. (Community PR #143 from @CliveEvans.)

### 2.7.2
- **attributesProxy: fixed row deletion** in repeating sections (`lib/scripts/attribute_proxy.js`).

### 2.5.5
- Updates k.send so that sheetworkers running on the called sheet will get the correct values even if that sheet has not been opened.
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

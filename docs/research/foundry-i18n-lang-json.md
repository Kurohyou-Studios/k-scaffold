# Foundry VTT i18n: generating `lang/en.json` from k-scaffold `data-i18n*` markup (v13 / v14)

Research date: 2026-09-20 (GitHub issue #160). Sources are restricted to foundryvtt.com (API docs, knowledge base, release notes), Foundry's own GitHub organisation (the `foundryvtt/foundryvtt` issue tracker and the first-party `foundryvtt/dnd5e` system repo), Roll20's help centre for Roll20 semantics, and this repo (`lib/render/outputPug.js`, `lib/**/*.pug`, `node_modules/i18nreplacer`). The Foundry `client/` source is proprietary and no local install was found on this machine, so anything that depends on *implementation* rather than *documented contract* is flagged **unverified**. Where the community wiki (foundryvtt.wiki) is the only place a behaviour is written down it is cited as such and treated as secondary.

Version notes: unversioned `foundryvtt.com/api/...` URLs currently serve **v14** (14.365); `/api/v13/` serves v13. Roll20's `wiki.roll20.net` was behind a bot-check during this pass; the help-centre article is used instead (it is Roll20's own primary text).

---

## 1. How Foundry loads languages

### `languages` in `system.json`

- KB (system development): "The game system may designate an array of languages specifications that it supports by default. Each element in the languages array is an object which defines the language tag, label, and path to its localization file."
  - `lang` — "The official 2-character language code in lower-case letters, for example 'en'."
  - `name` — "The formal and readable name for the language, for example 'English'."
  - `path` — "Path to a JSON file relative to the system directory where language translation strings are provided."
  - https://foundryvtt.com/article/system-development/
- API type `PackageLanguageData` (v14) adds two optional filters:
  - `lang: string` — "A string language code which is validated by Intl.getCanonicalLocales"
  - `name: string` — "The human-readable language name"
  - `path: string` — "The relative path to included JSON translation strings"
  - `module?: string` — "Only apply this set of translations when a specific module is active"
  - `system?: string` — "Only apply this set of translations when a specific system is being used"
  - https://foundryvtt.com/api/interfaces/foundry.packages.types.PackageLanguageData.html
- `flags` is not in the documented interface but Foundry's own dnd5e manifest ships `"flags": {}` on its language entry, and the community wiki says "the flags object is tacked on by Foundry". Treat as harmless, not something the emitter needs to write. https://raw.githubusercontent.com/foundryvtt/dnd5e/master/system.json , https://foundryvtt.wiki/en/development/api/localization
- `BasePackage.defineSchema()` types `languages` as a `SetField` (i.e. an unordered set of entries). https://foundryvtt.com/api/classes/foundry.packages.BasePackage.html

### Multiple files per language

- The `module`/`system` filters only make sense if several entries may share the same `lang`, and the KB localisation article says translation files are "JSON object[s] where the keys represent string identifiers", plural. The community wiki states it outright: "you can provide two english translations, one for dnd5e the other for pf2e". So **multiple entries with the same `lang` are allowed** (documented contract via the filter fields; the "all entries are merged" behaviour itself is **unverified at source level**).
  - https://foundryvtt.com/article/localization/
  - https://foundryvtt.wiki/en/development/api/localization

### When they load, and merge order

- Hook `i18nInit`: "fires once after Localization translations have been loaded and are ready for use. Runs after `init` but before `setup`." So translations are **not** available during `init`; anything that reads `game.i18n` (e.g. localising `CONFIG` labels) belongs in `i18nInit` or later. https://foundryvtt.com/api/functions/hookEvents.i18nInit.html
- `Localization#initialize()`: "Discover available language translations and apply the current language setting"; `setLanguage(lang)`: "Set a language as the active translation source for the session". https://foundryvtt.com/api/classes/foundry.helpers.Localization.html
- Merge/override: Foundry's tracker issue #12507 (a core-team-acknowledged feature request) describes the current behaviour as translation files being "merged globally", so "a module [can] override translations from another module" — i.e. later-loaded files overwrite same-key entries. The order (core → system → modules → world) is stated by the community wiki ("core software, the system, any modules, and then the world") and is **unverified** in primary docs. https://github.com/foundryvtt/foundryvtt/issues/12507 , https://foundryvtt.wiki/en/development/api/localization
- Fallback: `Localization#_fallback` — "Fallback translations if the target keys are not found"; `has(stringId, fallback=true)` — "Allow fallback translations to count?". English is the fallback language (the wiki states it; the API only documents that a fallback dictionary exists). https://foundryvtt.com/api/v13/classes/foundry.helpers.Localization.html
- Hot reload: dnd5e's manifest sets `"hotReload": {"extensions": ["css","hbs","json"], "paths": ["dnd5e.css","templates","lang"]}`, i.e. lang JSON edits can hot-reload in development. The KB text for `flags.hotReload` was not fetched in this pass (**unverified** beyond the first-party example). https://raw.githubusercontent.com/foundryvtt/dnd5e/master/system.json

---

## 2. `game.i18n` API surface and key legality

### Surface (v14)

| Member | Doc text (v14 unless noted) |
|---|---|
| `lang: string` | "The target language for localization" |
| `defaultModule: string` | "The package authorized to provide default language configurations" |
| `translations: Object` | "The translation dictionary for the target language" |
| `_fallback: Object` (internal) | "Fallback translations if the target keys are not found" |
| `localize(stringId, data?)` | "Localize a string by drawing a translation from the available translations dictionary ... Variables can be included in the template enclosed in curly braces". v13: "If a translation is not available, the original string is returned". |
| `format(stringId, data)` | v13: "Localize a string including variable formatting for input arguments ... Variables can be included in the template enclosed in braces and will be substituted using those named keys." Example `game.i18n.format("MYMODULE.GREETING", {name: "Andrew"})` on `"Hello {name}, this is my module!"`. |
| `has(stringId, fallback=true)` | "Return whether a certain string has a known translation defined" |
| `sortObjects`, `getListFormatter` | locale-aware sort/list helpers |
| `Localization.localizeDataModel(model)` / `localizeSchema` (static) | "Perform one-time localization of the fields in a DataModel schema" / "Localize the label and hint properties for all fields in a data schema" |

- https://foundryvtt.com/api/classes/foundry.helpers.Localization.html
- https://foundryvtt.com/api/v13/classes/foundry.helpers.Localization.html
- v14 change: issue #13357 "Merge game.i18n.localize() and game.i18n.format()" (milestone 14.353): "Localization#localize is now inclusive of the features provided by Localization#format"; `format` remains as an alias and a global `_loc` shorthand was added. https://github.com/foundryvtt/foundryvtt/issues/13357
- Missing key ⇒ the key string itself is returned (v13 doc text). There is no `[key]` red-text marker as on Roll20.

### Flat dotted keys vs nested objects — equivalent

Primary docs never say "nested" or "flat"; they show flat: the KB example is `{"DND5E.Title": "...", "DND5E.Abilities": "..."}` and describes the file as "a JSON object where the keys represent string identifiers". https://foundryvtt.com/article/localization/

Evidence that both shapes are interchangeable and may be mixed in one file:

- Foundry's own dnd5e `lang/en.json` (parsed in-browser during this pass, 1 080 top-level keys): 957 top-level values are strings under flat dotted keys (`"DND5E.AbbreviationCR": "CR"`), while 123 top-level keys are *dotted keys whose value is an object*, e.g. `"TYPES.Actor": {"character": "Player Character", ...}`, `"DND5E.ABILITY": {...}`, and `"TYPES.RegionBehavior": {"dnd5e.applyActiveEffect": "..."}` (a dotted key *inside* a nested object). The documented lookup key for the create dialog is `TYPES.Actor.character` (§4), which can only resolve against that file if Foundry expands dotted keys into a nested tree before lookup. https://raw.githubusercontent.com/foundryvtt/dnd5e/master/lang/en.json
- `foundry.utils.expandObject`: "Expand a flattened object to be a standard nested Object by converting all dot-notation keys to inner objects." `getProperty(object, key)`: "supports the notation a.b.c which would return object[a][b][c]". https://foundryvtt.com/api/functions/foundry.utils.expandObject.html , https://foundryvtt.com/api/functions/foundry.utils.getProperty.html
- Community wiki: "A foundry language.json file can mix-and-match of .-separated fields and traditional JSON nesting." https://foundryvtt.wiki/en/development/api/localization

Conclusion: `{"KSCAFFOLD.Strength": "Strength"}` and `{"KSCAFFOLD": {"Strength": "Strength"}}` are equivalent. The exact mechanism (`mergeObject` expanding dotted keys and `localize` using `getProperty`) is **unverified at source level** — the `mergeObject` doc page does not mention expansion — but the first-party data file cannot work any other way.

### Which characters break lookup

- **`.` is the path separator** and the only character with special meaning in lookup. A key containing `.` is split: `"KSCAFFOLD.Str."` becomes `KSCAFFOLD → Str → ""`; `"KSCAFFOLD.e.g. bonus"` becomes three levels. There is no documented escape. (Same finding as `docs/research/foundry-data-model-nesting.md` §2.)
- **Prefix collisions**: because the tree is expanded, `"KSCAFFOLD.Strength": "Strength"` and `"KSCAFFOLD.Strength.mod": "Mod"` conflict (a node cannot be both a string and an object). Which one wins, or whether `expandObject` throws, is **unverified**; treat any key that is a dotted prefix of another as invalid.
- **Spaces, punctuation other than `.`, unicode**: JSON object keys may be any string, and `getProperty` only splits on `.`, so `"KSCAFFOLD.Hit Points (max)"` is a legal, resolvable key. dnd5e uses none (0 of 1 080 keys contain whitespace or characters outside `[A-Za-z0-9_.-]`), so this is *unconventional*, not illegal. **Unverified**: whether `getProperty` trims or otherwise normalises segments.
- **Handlebars quoting**: `{{localize "KEY"}}` takes a string literal; a key containing `"` must be written with single quotes and vice-versa. Whether Handlebars string literals support backslash escapes is **unverified**; avoid keys containing both quote characters. Keys are also passed to `localize` as raw strings — issue #9240 records that non-string `SafeString` values from `concat` broke the helper ("key.split is not a function", fixed in v11), confirming the helper splits the key on `.` internally. https://github.com/foundryvtt/foundryvtt/issues/9240
- **Placeholders in values**: Foundry substitutes `{name}` (single braces, named). Roll20 values may contain `{{0}}` (double braces, positional, see §5). A value like `"This text {{0}}"` passed through v14 `localize(key, data)` would be scanned for `{...}` — how `{{0}}` survives is **unverified**; the emitter should either rewrite `{{n}}`→`{n}` or never pass such strings through `format`.
- **HTML in values**: Roll20 explicitly allows HTML inside translated strings. Handlebars `{{localize}}` output is HTML-escaped by the double-stash; HTML-bearing values need `{{{localize "KEY"}}}` (triple-stash) or the value must be plain text. (Standard Handlebars behaviour; not Foundry-specific.)

---

## 3. Handlebars helpers and attribute/notification localisation

- `localize` helper — "Translate a provided string key by using the loaded dictionary of localization strings." Signature `localize(value: string, options: {hash})`; hash properties are "interpolation data passed to `Localization#format`". Examples from the doc: `{{localize "ACTOR.Create"}}` → "Create Actor"; `{{localize "CHAT.InvalidCommand" command=foo}}`. https://foundryvtt.com/api/functions/foundry.applications.handlebars.localize.html
- The KB recommends single quotes in templates: `{{localize 'KEY_NAME'}}`. https://foundryvtt.com/article/localization/
- Attribute text: there is **no** `localize`-style helper for attributes; the convention is `title="{{localize 'KEY'}}"` inside the attribute. The one auto-localised attribute is `data-tooltip`: `TooltipManager` — "The `data-tooltip` text will be automatically localized." (v13+: `data-tooltip-text` is plain text and "do[es] not support HTML"; `data-tooltip-html` is cleaned HTML.) `aria-label` has no auto-localisation. https://foundryvtt.com/api/classes/foundry.helpers.interaction.TooltipManager.html
- Form helpers: `createSelectInput`'s `SelectInputConfig.localize` — "Localize value labels"; the `selectOptions` helper exposes the same option. https://foundryvtt.com/api/interfaces/foundry.applications.fields.SelectInputConfig.html , https://foundryvtt.com/api/modules/foundry.applications.handlebars.html
- Notifications: `ui.notifications.info|warn|error(message, options)` with `options.localize` ("Localize updates to presented progress text" — i.e. treat `message` as a key) and `options.format` ("A mapping of formatting strings passed to Localization#format"). https://foundryvtt.com/api/classes/foundry.applications.ui.Notifications.html
- Window titles: `ApplicationWindowConfiguration.title` — "The window title. Displayed only if the application is framed". Whether it is passed through `localize` is **unverified** in the doc text (it is, in practice, the universal convention: dnd5e passes keys).  https://foundryvtt.com/api/interfaces/foundry.applications.types.ApplicationWindowConfiguration.html
- Data-model field labels: `DataFieldOptions.label` — "A localizable label displayed on forms which render this field."; `hint` — "Localizable help text ..."; `placeholder` — "Localizable text displayed in placeholders of form inputs which render this field." These are filled automatically for system sub-type models from `LOCALIZATION_PREFIXES` (§4). https://foundryvtt.com/api/interfaces/foundry.data.types.DataFieldOptions.html

---

## 4. Foundry's own key conventions and keys a system is expected to provide

### Namespacing

KB: "It is recommended to namespace the translation strings defined by your module or system to help ensure that all localization strings remain unique." Conventionally the namespace is an upper-case form of the package id (dnd5e → `DND5E`). Because files merge globally (§1), an un-namespaced key like `Strength` would silently collide with any other package's `Strength`. https://foundryvtt.com/article/localization/

### `TYPES.<Document>.<type>` — required for sub-type labels

- Deprecation enacted (issue #11815, v13): "Legacy translation keys for document types under `{DOCUMENT_NAME}.Type{TypeName}` are no longer supported in favor of localization keys under `TYPES.{documentName}.{typeName}`". So in v13/v14 the **only** convention is `TYPES.Actor.<type>` / `TYPES.Item.<type>`. https://github.com/foundryvtt/foundryvtt/issues/11815
- KB (module sub-types) shows the shape for a sub-type: `{"TYPES.JournalEntryPage.quest-pages.quest": "Quest"}` and says "The translation key is then formatted in a specific way to allow the core software to use it in the appropriate places in the UI." https://foundryvtt.com/article/module-sub-types/
- `CONFIG.Actor.typeLabels: Record<string,string>` and `CONFIG.Actor.typeHints` still exist in v14 (14.365). Whether core pre-populates `typeLabels` from `TYPES.*` or the create dialog reads `TYPES.*` directly is **unverified** (the `createDialog` doc text was not reachable in this pass); the community wiki states the `TYPES` keys "are used in core applications like the Create Dialog". https://foundryvtt.com/api/variables/CONFIG.Actor.html , https://foundryvtt.wiki/en/development/api/localization
- Plural forms: dnd5e ships `TYPES.Actor.characterPl`, `TYPES.Item.weaponPl`, etc., and release 13.333 notes "Standardized grammatical number of Document-related localization namespaces." Whether core *reads* a `Pl` suffix is **unverified**; the emitter can cheaply emit both. https://foundryvtt.com/releases/13.333
- Type hints: dnd5e also ships `TYPES.HINTS.<Document>.<type>`; `CONFIG.Actor.typeHints` exists. Optional.

### `<PREFIX>.FIELDS.<path>.label|hint|placeholder` — automatic for system sub-type models

- `TypeDataModel.LOCALIZATION_PREFIXES`: keys are looked up as `PREFIX.FIELDS.foo.label` / `PREFIX.FIELDS.foo.hint`; "Foundry will attempt to automatically localize models registered for a document subtype"; other models call `Localization.localizeDataModel(MyDataModel)` in `i18nInit`. Nested `SchemaField`s use dot paths inside `FIELDS` (`FIELDS.hp.value.label`). https://foundryvtt.com/api/classes/foundry.abstract.TypeDataModel.html
- 13.336: "Prevented a situation where `DataModel.LOCALIZATION_PREFIXES` could cross-contaminate across multiple models." https://foundryvtt.com/releases/13.336
- This is the natural home for per-attribute labels generated from k-scaffold attribute names (ADR 0011/0019 generate the DataModel; the same walk can emit `FIELDS.<attr>.label`).

### Other keys a system commonly provides

- Settings: `game.settings.register(namespace, key, {name, hint, choices})`; the doc example uses plain strings and does not state they are keys (**unverified** that they are auto-localised, though the universal convention is to pass keys). https://foundryvtt.com/api/classes/foundry.helpers.ClientSettings.html
- Core `DOCUMENT.*` keys (`DOCUMENT.Actor`, `DOCUMENT.Create`, `DOCUMENT.New` → "New {type}") are provided by core and can be *reused* by a system, not something it must supply. (Community wiki examples; core `public/lang/en.json` is not on GitHub and was not fetched.)
- Sheet tab labels, section headers, button text, roll-template text: no core convention; namespace them.

---

## 5. Roll20 `translation.json` semantics as k-scaffold uses them

Primary source: Roll20 help centre, "Character Sheet Translation" (Sept 2023). https://help.roll20.net/hc/en-us/articles/360037773493-Character-Sheet-Translation

### Roll20 contract

- Markup: "add the `data-i18n=[unique-key]` attribute to every element that has text in it that you want translated. Keep all of the text that is already there in the element, because it can be used to generate your translation file". Inner HTML inside the translated element is allowed ("there is HTML within the span, this is totally fine").
- File shape: "If you wish to create the translation.json manually, you can use the following format: `{"key": "string", "key-2": "Another string."}`". It is a **flat** object; the key is free text (the article's examples are lower-case hyphenated with disambiguators such as `acrobatics-u` and `components:-u`; nothing forbids spaces or punctuation). Missing keys render as red `[translation-key]`.
- Generation: the `i18nOutput` console object dumps "all of the keys you have used with the corresponding text from within the element/placeholder" — i.e. value = current English text, key = whatever `data-i18n` said.
- Attribute variants: `data-i18n-[attribute]='key'` — "The supported attributes are: title, alt, aria-label, label, placeholder". (The article's own spell-component example uses the older `data-i18n-place`.) So `data-i18n-title`, `data-i18n-placeholder`, `data-i18n-label`, `data-i18n-aria-label`, `data-i18n-alt` each replace that attribute's value with the translation for the key.
- `data-i18n-vars="a|b"` + `{{0}}`/`{{1}}` in the string: "The text inside of the data-i18n-vars attribute will be divided by the '|' character and placed in an array. You can then reference that array using `{{[index]}}`". Positional, double-brace.
- `data-i18n-dynamic` (no value): "tell the parser to use the value that would normally show up in the span as the key to fetch a translation" — runtime lookup keyed by attribute *value* (e.g. `Barbarian` → `Bárbaro`); the translation file then needs `"Barbarian": "Bárbaro"`-style entries whose key is the stored value.
- `data-i18n-list="list-key"` on a container + `data-i18n-list-item="item-key"` on children (+ optional `data-i18n-list-item-num="1"`): a **reordering** feature. The list key's value is "a comma-delimited list of all of the item keys, in the language of the original translation. Reordering these keys will reorder the items." Errors are surfaced as `data-i18n-error`. This has no text payload; it is pure layout metadata.
- `data-i18n-vtitle`: **not present** in the help-centre article. It appears in k-scaffold's issue text and community usage; whether Roll20 documents it (on the bot-gated wiki) is **unverified** in this pass. k-scaffold's `lib/` does not emit it.
- Roll templates: `{{key}}` inside the template HTML is translated; inside a roll string, `^{key}` marks a translation key, resolved *after* attribute substitution.
- Sheet workers: `getTranslationByKey(key)` returns the string (k-scaffold wraps it in `k.getTranslationByKey(key, vars)` which also substitutes `{{n}}` and falls back to the key — `lib/scripts/sheetworker_aliases.js`).
- Workflow: `translation.json` at the sheet root is picked up and pushed to Crowdin; changed source strings propagate, except "changes where the only difference is white space or special characters and changes that only remove characters". Translators therefore see the **key** as the string identity — renaming a key is a new string to them.

### What k-scaffold's pipeline actually does (`lib/render/outputPug.js`)

1. Renders PUG → HTML, parses with JSDOM, writes the sheet HTML.
2. Calls `translate(html)` from `i18nreplacer@1.0.1` (`node_modules/i18nreplacer/source/translation.js`). That function walks every element and every attribute, matches `/(i18n)(?:-(.+))?$/` on the attribute name, and:
   - skips `data-i18n-list-item`;
   - for `data-i18n-list` collects `[data-list-item]` children — a **bug**: the selector should be `[data-i18n-list-item]`, so the package always yields `""` for list keys;
   - otherwise sets `obj[key] = (type ? el.getAttribute(type) : el.textContent.trim()) || key` — i.e. `data-i18n-title="X"` → `X: <title attr>`, `data-i18n="X"` → `X: <textContent>`, falling back to the key itself;
   - sorts keys with `localeCompare`.
3. `outputPug` then re-runs its own reduce for the `-list` subtype only, using the correct `[data-i18n-list-item]` selector, so the emitted `translation.json` has correct comma-joined list values. (The `else` branch in that reduce is dead for the current `i18nSubTypes = ['-list']`.)
4. Merges: `{...translations, ...currTranslation}` where `currTranslation` is the existing `translation.json` (or the one in the `templates` dir) — **existing values win**, so hand-edited English text is preserved and new keys are appended. Writes only if changed; mirrors into the test destination.
5. `apply18n` (auto-tagging every text-bearing element) is exported by the package but **not used** by k-scaffold; only explicitly authored `data-i18n*` attributes produce keys.

Observed quirks (reproduced by running `translate()` in this pass on a synthetic fragment):

- `data-i18n-dynamic` (empty value) produces a `"": ""` entry.
- `data-i18n-vars="a|b"` produces a spurious `"a|b": "a|b"` entry.
- `data-i18n-list-item-num="1"` produces a spurious `"1": "1"` entry.
- Text with inner HTML is captured via `textContent` (HTML stripped), unlike Roll20's `i18nOutput`.

Where k-scaffold's `lib/` authors keys (all flat, all free text):

- `lib/labels/_labels.pug`: `span(data-i18n=label)` for `+input-label`, `+select-label`, `+dual-input-label`; `h3(data-i18n=header)` for `+headedTextarea`; examples use `'data-i18n':'never'` / `'always'` on options and `'data-i18n-placeholder':'The description of your character'`.
- `lib/fieldsets/_fieldsets.pug`: `h2(data-i18n=header)`, `h5(data-i18n=head)` for repeating-section headers/columns.
- `lib/tabs/_tabs.pug` line 94: auto-generates `tabs-${section}-${tab}` when a tab button has no `data-i18n` — the only *generated* key in the library, and the only one that carries structural context (section + tab).
- `lib/attribute_holders/_attribute_backed.pug` (`+img`): `data-i18n-alt` defaults to the attribute's raw name (e.g. `my image`).
- `lib/attribute_holders/_buttons.pug` / `_selects.pug`: examples use `'data-i18n':'action button'`, `'a translation key'`.

So in practice a k-scaffold `translation.json` key is (a) the English label text as typed by the author, with spaces and punctuation, or (b) an author-chosen slug, or (c) the generated `tabs-*` key. The current pipeline records **no** section/mode/tab context for (a)/(b).

---

## 6. Options for mapping Roll20 keys onto Foundry keys (tradeoffs only — no decision)

Constraints from §2: the Foundry key must not contain `.` (or must have its dots removed/replaced), must not be a dotted prefix of another key, and should live under a namespace to survive global merging. Constraint from ADR 0014: translators author each string once, so whatever mapping is chosen must be a *pure function of the Roll20 key* (and optionally of markup context) so that `translation.json` remains the single source and `lang/en.json` (and, later, `lang/<xx>.json` from Roll20's Crowdin output) can be regenerated.

| Option | Example | Legal? | Reversible / single-source cost | Foundry-idiomatic? |
|---|---|---|---|---|
| **A. Verbatim under one namespace** `SYSTEMID.<roll20 key>` | `"KSCAFFOLD.Hit Points": "Hit Points"` | Yes *unless* the Roll20 key contains `.` or is a prefix of another (§2). Spaces/unicode fine. | Zero-cost, trivially invertible; `lang/xx.json` = same transform applied to Roll20's translated file. Emitter must reject/escape keys containing `.` (which are common in English text: `Str.`, `e.g.`, `Max.`). | No — unconventional; `{{localize "KSCAFFOLD.Hit Points"}}` needs quoting care. |
| **B. Slugified under one namespace** `SYSTEMID.<slug(key)>` | `"KSCAFFOLD.hit_points"` or `KSCAFFOLD.HitPoints` | Always, if the slug function strips `.` and other separators. | Not invertible in general (`Str.` and `Str` collide; `a b` and `a_b` collide). Needs a collision check at build time and a generated key→slug map (or embedding the original key as a comment/sidecar) so other-language files can be regenerated. Translators unaffected (they still see the Roll20 key). | Yes — matches dnd5e style (`[A-Za-z0-9_-]`). |
| **C. Structured by context** `SYSTEMID.<mode>.<section>.<slug>` (from ADR 0022 modes / `+tabs` sections / fieldset names) | `"KSCAFFOLD.character.combat.hit_points"` | Yes, same slug caveats as B. | Key depends on *where* the element sits; moving an element changes its Foundry key but not its Roll20 key, so the mapping is no longer a pure function of the Roll20 key — regeneration of other languages needs the same context walk, and identical strings in two sections get two keys (Foundry side) but one key (Roll20 side). Requires the emitter to carry section/mode context that `outputPug.js` does not currently track. | Yes — most readable `en.json`, mirrors dnd5e's `DND5E.ABILITY.SECTIONS.*`. |
| **D. Hybrid: convention keys generated, free text under B** | `TYPES.Actor.character`, `KSCAFFOLD.FIELDS.strength.label` from attribute names; everything from `data-i18n*` as `KSCAFFOLD.<slug>` | Yes. | The convention keys are *new* strings that do not exist in `translation.json` (Roll20 has no actor types or field-label registry). Either they are single-sourced by re-using the Roll20 key the author already put on the matching label (needs a heuristic or an explicit mixin argument), or they are English-only until a Foundry-side translation file is authored — a small, bounded breach of ADR 0014. | Yes — required for create-dialog labels and automatic field labels (§4). |
| **E. No namespace, key verbatim at top level** | `"Hit Points": "Hit Points"` | Legal but collides with core/module keys because files merge globally (§1). | Same as A. | No. |

Cross-cutting costs:

- **`data-i18n-list`** has no Foundry analogue (list reordering is a Roll20 runtime feature). Emitting its comma-list value into `en.json` is harmless but meaningless; the emitter can drop it or keep it for symmetry.
- **`data-i18n-dynamic`** requires the stored *value* to be a key (`Barbarian` → `Bárbaro`). Under A this is `localize("KSCAFFOLD.Barbarian")` at runtime; under B/C the runtime must apply the same slug function to the value.
- **`data-i18n-vars` / `{{n}}`** must be rewritten to Foundry's `{n}` placeholders (or the emitter passes vars as `{0: ...}` data — whether numeric placeholder names work is **unverified**).
- **Inner HTML in values** (Roll20-legal) needs triple-stash output in Handlebars.
- **Other languages**: Roll20's Crowdin output is keyed identically to `translation.json`, so any option whose Foundry key is a pure function of the Roll20 key (A, B, D's free-text half) can generate `lang/<xx>.json` mechanically. Option C cannot without re-walking the markup.

---

## 7. `{{localize}}` vs a runtime `data-i18n` walker in the generated Handlebars partials

- Templates are fetched, compiled and cached by `getTemplate(path, id?)`: "Get a template from the server by fetch request and caching the retrieved result." and registered as a Handlebars partial under `id` (defaults to the path). `{{localize}}` executes at render time against the loaded dictionary. https://foundryvtt.com/api/functions/foundry.applications.handlebars.getTemplate.html
- ApplicationV2 re-renders by replacing part HTML (`_replaceHTML`: "Replace the HTML of the application with the result provided by the rendering backend"), so any post-render DOM walker must run on every render (e.g. in `_onRender`), not once. https://foundryvtt.com/api/classes/foundry.applications.api.ApplicationV2.html
- **Compile-time replacement** (`<span data-i18n="X">Text</span>` → `<span>{{localize "KSCAFFOLD.x"}}</span>`, `title="..."` → `title="{{localize 'KSCAFFOLD.y'}}"`) is the documented convention (KB: "The template helper is: `{{localize 'KEY_NAME'}}`"), needs no runtime code, and renders correctly on first paint. Costs: the emitter must rewrite text nodes and five attributes; HTML-bearing strings need `{{{ }}}`; mixed content (`ACROBATICS <span>(Dex)</span>`) must become a single localised string or be split.
- **Runtime walker** (keep `data-i18n*` in the `.hbs` output and translate in `_onRender`) keeps the emitted markup byte-identical to the Roll20 path (ADR 0003 appeal) and handles `data-i18n-dynamic` naturally, but has **no core precedent**: the only attribute Foundry auto-localises is `data-tooltip` (`TooltipManager`, §3); `TextEditor.enrichHTML` performs no localisation (its doc page never mentions i18n — https://foundryvtt.com/api/classes/foundry.applications.ux.TextEditor.html); `localizeDataModel` localises *schema* labels, not DOM. Roll20 itself is a runtime walker, so the semantics are well understood, but on Foundry it is a k-scaffold-owned runtime dependency shipped into every generated system.
- Either way, `data-i18n-dynamic` and roll-template `^{key}` need runtime `game.i18n.localize` calls; `data-i18n-list` needs neither.

---

## Direct answer

1. `languages[]` entries are `{lang, name, path}` plus optional `system`/`module` filters (`flags` tolerated). Several entries per `lang` are allowed; files merge globally, later overriding earlier; translations are ready at `i18nInit` (after `init`, before `setup`); English is the fallback dictionary.
2. Keys are dotted paths resolved through an expanded object tree; flat `"A.B": "x"` and nested `{"A": {"B": "x"}}` are equivalent and may be mixed (dnd5e does both). `.` is the only reserved character; a key must not be a dotted prefix of another key. Spaces/punctuation/unicode are legal but unconventional. Missing keys return the key string. v14 folds `format` into `localize(key, data)`.
3. `{{localize "KEY"}}` / `{{localize "KEY" a=b}}`; attributes use `attr="{{localize 'KEY'}}"`; `data-tooltip` is auto-localised; `ui.notifications.*(key, {localize: true, format})`.
4. `TYPES.Actor.<type>` / `TYPES.Item.<type>` is mandatory for sub-type labels (legacy form removed in v13); `PREFIX.FIELDS.<path>.label|hint|placeholder` is auto-applied to system sub-type models via `LOCALIZATION_PREFIXES`; namespace everything else.
5. Roll20 keys are flat free-text identifiers (usually the English text or an author slug); `data-i18n[-title|-placeholder|-label|-aria-label|-alt]` replace text/attribute, `-vars` supplies `{{n}}` values, `-dynamic` does runtime value-as-key lookup, `-list`/`-list-item` reorder layout. k-scaffold emits `translation.json` via `i18nreplacer.translate()` plus its own `-list` fix-up, preserving existing values; it tracks no section/mode context and does not use `apply18n`.
6. Verbatim-under-namespace is the cheapest single-source mapping but fails on any key containing `.`; slugified-under-namespace is always legal but needs collision detection and a sidecar map for reversibility; context-structured keys are the most idiomatic but break the "pure function of the Roll20 key" property; convention keys (`TYPES.*`, `FIELDS.*`) have no Roll20 source and need a decision on how they are authored.
7. Compile-time `{{localize}}` rewriting is the documented Foundry path; a runtime `data-i18n` walker has no core precedent beyond `data-tooltip` and would have to re-run on every ApplicationV2 render.

Unverified items: source-level merge/expansion mechanics of `Localization` and `mergeObject`; exact override order core→system→module→world; behaviour on prefix collisions; whether `getProperty` normalises segments; how `{{0}}` survives v14 `localize(key, data)`; whether numeric placeholder names work; whether `createDialog` reads `TYPES.*` directly or via `CONFIG.<Doc>.typeLabels`, and whether core reads the `Pl` suffix; whether `window.title` and `settings.register` `name`/`hint` are auto-localised (convention says yes); the KB text for `flags.hotReload`; Roll20's `data-i18n-vtitle` (not in the help-centre article; wiki unreachable).

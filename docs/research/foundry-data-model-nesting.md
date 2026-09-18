# Foundry VTT `system` data nesting requirements (v12 / v13 / v14)

Research date: 2026-09-17. Sources are restricted to foundryvtt.com (API docs, knowledge base, release notes) and Foundry's own issue tracker (github.com/foundryvtt/foundryvtt). The API docs are generated from the JSDoc in `common/` and `client/`, so quoted doc text is the source's own comment text. No local copy of the Foundry `resources/app/common` source was reachable on this machine, so anything that depends on *implementation* rather than *documented contract* is flagged **unverified**.

Version notes: the unversioned `foundryvtt.com/api/...` URLs currently serve **v14**; `/api/v13/` and `/api/v12/` serve those versions.

---

## 1. Can `system` be completely flat?

**Yes.** Nothing in the documented contract requires a nested `SchemaField` under `system`.

- `TypeDataModel` is "a special subclass of the base `DataModel` class and should always be used when defining `DataModel`s that represent type-specific data." Its only structural requirement is implementing `defineSchema()`: "Define the data schema for models of this type."
  - https://foundryvtt.com/article/system-data-models/
  - https://foundryvtt.com/api/classes/foundry.abstract.TypeDataModel.html
- `defineSchema()` returns a plain object of `name -> DataField`. The `SchemaField` constructor's first argument is simply "The contained field definitions"; the `TypeDataModel` docs never mention a minimum depth.
  - https://foundryvtt.com/api/v13/classes/foundry.data.fields.SchemaField.html
- The knowledge base's own manifest example shows a sub-type with an *empty* schema (`"character": {}`), i.e. even zero fields is legal, so one level of leaf fields is certainly legal.
  - https://foundryvtt.com/article/system-data-models/
- The KB's `SchemaField` example (`health: new SchemaField({...})`) is presented as an *example of organisation*, not a requirement.

So `{ strength: new NumberField(), hp_max: new NumberField(), repeating_weapons_abc123_damage: new NumberField() }` is a fully legal `defineSchema()` return value as far as the documented contract goes. The DataModel docs describe fields becoming "direct properties of the data model" (https://foundryvtt.com/api/classes/foundry.abstract.DataModel.html), which is exactly what a flat schema produces (`actor.system.strength`).

Caveat (unverified, implementation-level): because `_initialize` copies "data from the source object to instance attributes", a field whose name collides with a `DataModel` instance member (`parent`, `_source`, `schema`, `invalid`, `validationFailures`, and method names such as `toObject`, `updateSource`, `validate`, `clone`, `reset`) would shadow or be shadowed by that member. The docs do not enumerate reserved names; avoid these as top-level keys. (https://foundryvtt.com/api/v13/classes/foundry.abstract.DataModel.html)

---

## 2. Key naming constraints

### Characters that break dotted-path helpers

Every path helper splits on `.`:

- `getProperty`: "supports the notation a.b.c which would return object[a][b][c]" and "supports arrays if the provided key is an integer index of the array". https://foundryvtt.com/api/functions/foundry.utils.getProperty.html
- `setProperty`: "supports the notation a.b.c which would target object[a][b][c]". https://foundryvtt.com/api/functions/foundry.utils.setProperty.html
- `expandObject`: "converting all dot-notation keys to inner objects". https://foundryvtt.com/api/functions/foundry.utils.expandObject.html
- `flattenObject`: "converting all nested keys to dot notation". https://foundryvtt.com/api/functions/foundry.utils.flattenObject.html
- `DataModel#updateSource`: "The provided changes are expanded, cleaned, validated, and stored". https://foundryvtt.com/api/classes/foundry.abstract.DataModel.html
- `SchemaField#getField` / `ActiveEffect#getFieldForProperty` accept "a field path like ["abilities", "strength"] or "abilities.strength"". https://foundryvtt.com/api/v13/classes/foundry.data.fields.SchemaField.html , https://foundryvtt.com/api/classes/foundry.documents.ActiveEffect.html

Consequence: **a `.` inside a schema key is unusable** — `update()`, `updateSource()`, `getProperty`, Active Effect keys and roll data would all split it into a nested path. There is no documented escaping mechanism.

### Characters that are fine

- Underscores, digits, hyphens and mixed case are not mentioned as restricted anywhere in the field docs; `DataField#name` is just "The name of this data field within the schema that contains it." https://foundryvtt.com/api/classes/foundry.data.fields.DataField.html
- Integer-looking keys: `getProperty` treats an integer key as an array index only when the container is an array; on a plain object it is an ordinary property. A key such as `abc123` is unambiguous. A purely numeric key (`"0"`) inside an object works with `getProperty` but is confusing with `ArrayField`; avoid.
- Roll-formula references are more restrictive than the schema (see §5): a widely reported reference regex `@([a-z.0-9_-]+)` (case-insensitive) is **unverified** against primary source in this pass, but the documented `@attr` syntax plus the observed behaviour means keys intended for `@` references should be limited to letters, digits, `_`, `-` and `.` separators.

### Reserved / operator prefixes in `update()` payloads

- `-=` **deletion prefix** (v10–v13, documented): `mergeObject({k1:"v1",k2:"v2"}, {"-=k1": null}, {performDeletions:true})` → `{k2:"v2"}`; `performDeletions` "Control whether to perform deletions on the original object if deletion keys are present". https://foundryvtt.com/api/v13/functions/foundry.utils.mergeObject.html
  - Release 13.335: "deletion keys. They now MUST pass `null` as their value." and "Fixed a bug where deleting a property with the `-=` prefix would not work if the property was part of a `DataModel`." https://foundryvtt.com/releases/13.335
- `==` **forced-replacement prefix** (v10–v13, documented): `{"==k1": {i2:"v2"}}` replaces `k1` wholesale instead of merging. Same page as above.
- **v14** replaces these string prefixes with operator objects: `foundry.data.operators.ForcedDeletion` ("Force the deletion of a certain DataModel field, resetting its value back to undefined.") and `ForcedReplacement` ("Force the replacement of a certain DataModel field, assigning it to some explicit value without inner recursion."); `mergeObject` gains `applyOperators` and the v14 page no longer lists `performDeletions`. Serialisation uses the marker `"__$OPERATOR$__"` (`OPERATOR_IDENTIFIER`) and `reconstructOperator`.
  - https://foundryvtt.com/api/classes/foundry.data.operators.ForcedDeletion.html
  - https://foundryvtt.com/api/classes/foundry.data.operators.ForcedReplacement.html
  - https://foundryvtt.com/api/functions/foundry.utils.mergeObject.html
  - https://foundryvtt.com/api/variables/foundry.data.operators.OPERATOR_IDENTIFIER.html
  - Whether v14 still *accepts* the `-=`/`==` string prefixes (with a deprecation warning) is **unverified**: third-party changelogs report a deprecation message pointing at `ForcedDeletion`, but I did not find it in the official 14.3xx release notes.
- Practical rule: never begin a schema key with `-=` or `==`.
- `_id` / `type`: these are top-level Document fields, not `system` fields. Using `_id` or `type` as a key *inside* `system` is not documented as forbidden, but `DatabaseUpdateOperation.updates` notes "Each update object must contain the _id of the target Document", so a `system._id` is merely confusing rather than reserved. Avoid it. https://foundryvtt.com/api/interfaces/foundry.abstract.types.DatabaseUpdateOperation.html

---

## 3. Repeating/collection data without embedded Items

Field types (all v13/v14 unless noted):

| Field | Version | Update addressing | Row deletion | Partial per-index/key update |
|---|---|---|---|---|
| `ArrayField(SchemaField)` | v10+ | replace whole array | replace whole array | **No** |
| `SetField` | v10+ | replace whole set | replace whole set | No (inherits ArrayField) |
| `ObjectField` | v10+ | dotted keys OK (untyped) | `-=` (v13) / `ForcedDeletion` (v14) | Yes (untyped) |
| `TypedObjectField(SchemaField)` | **v13+** (added in 13.335) | dotted keys, e.g. `system.weapons.abc123.damage` | `-=` (v13) / `ForcedDeletion` (v14) | Yes, with element validation |

### `ArrayField` — whole replacement only

- v14 `ArrayField` docs: "When cleaning an ArrayField we must force {partial: false} since arrays are always fully replaced." and `_updateCommit`: "Commit array field changes by replacing array contents while preserving the array reference itself." https://foundryvtt.com/api/classes/foundry.data.fields.ArrayField.html
- Consequence: `actor.update({"system.weapons.2.damage": 5})` is not a supported operation; you must read the array, mutate a copy, and write `{"system.weapons": newArray}`. (The community wiki says the same — "you must replace the entire array" — https://foundryvtt.wiki/en/development/api/document — and the primary `ArrayField` doc above confirms it.)
- `SetField` "supports a set of contained elements. Elements in this set are treated as fungible and may be represented in any order or discarded if invalid." Same replacement semantics. https://foundryvtt.com/api/classes/foundry.data.fields.SetField.html

### `ObjectField` — untyped map

- "A subclass of DataField which deals with object-typed data." `recursive = false`, i.e. the schema does not descend into it; contents are not validated. https://foundryvtt.com/api/classes/foundry.data.fields.ObjectField.html
- Because `updateSource` expands dotted keys, `{"system.weapons.abc123.damage": 5}` merges into the object, and `{"system.weapons.-=abc123": null}` (v13) deletes a row. This is the v12 fallback for keyed rows when `TypedObjectField` is unavailable.

### `TypedObjectField` — typed map keyed by arbitrary ids

- "A subclass of ObjectField that represents a mapping of keys to the provided DataField type." `element` is "The value type of each entry in this object." `recursive = true`. https://foundryvtt.com/api/v13/classes/foundry.data.fields.TypedObjectField.html
- Introduced in v13: "Added the new `TypedObjectField` core field type to assist developers managing complex and dynamic data." https://foundryvtt.com/releases/13.335 . It is **absent** from the v12 `ObjectField` subclass list (https://foundryvtt.com/api/v12/classes/foundry.data.fields.ObjectField.html).
- Key validation: `_defaults` includes `validateKey: (k: any) => boolean` (visible on the `DocumentFlagsField` subclass page, which overrides `TypedObjectField._defaults`). A system can pass its own `validateKey` to reject bad ids. https://foundryvtt.com/api/v13/classes/foundry.data.fields.DocumentFlagsField.html
- Per-key updates: `_updateDiff`/`_updateCommit` are implemented on the field; the 13.335 fix for `-=` "if the property was part of a `DataModel`" plus the general expansion rule mean `{"system.weapons.abc123.damage": 5}` and `{"system.weapons.-=abc123": null}` are the documented way to touch one row. The exact `_updateDiff` code was not readable in this pass (**unverified at source level**), but v14 release notes confirm active maintenance of the `TypedObjectField`+`SchemaField` combination ("Corrected an issue which caused `TypedObjectField` to fail to clean properly if it contained `SchemaField` values."). https://foundryvtt.com/releases/14.352
- v14 deletion: use `{"system.weapons.abc123": new foundry.data.operators.ForcedDeletion()}` semantics (operator object) — see §2.

### Recommendation for a Roll20-style `repeating_<section>_<rowid>_<field>` model

- Do **not** flatten rows into `system.repeating_weapons_abc123_damage`. It is legal, but every row-field is a separate schema field, so the schema cannot be defined ahead of time (ids are dynamic) — you would be forced to an untyped `ObjectField` anyway.
- v13/v14: `weapons: new TypedObjectField(new SchemaField({ damage: new NumberField(), ... }))` gives typed rows addressable as `system.weapons.<rowid>.<field>`.
- v12: `weapons: new ObjectField()` with the same dotted addressing, no validation.

---

## 4. Mechanisms that impose a nesting shape

### Token attribute bars / `trackableAttributes` — the only real shape constraint

- KB: "Certain attributes that define a `value` and `max` can be treated as 'resources' by the core API, and can appear on Tokens as a colored bar." Manifest `primaryTokenAttribute` / `secondaryTokenAttribute` point at such paths. https://foundryvtt.com/article/system-development/
- `TrackedAttributesDescription`: `bar` — "A list of property key arrays to attributes with both a value and a max property."; `value` — "A list of property key arrays to attributes that have only a value property." https://foundryvtt.com/api/interfaces/foundry.documents.types.TrackedAttributesDescription.html
- `TokenDocument.getTrackedAttributes(data)`: "Get an Array of attribute choices which could be tracked for Actors in the Combat Tracker"; `_getTrackedAttributesFromSchema(schema)`: "Retrieve an Array of attribute choices from a SchemaField." (v12 page; same methods exist in v13/v14.) https://foundryvtt.com/api/v12/classes/client.TokenDocument.html , https://foundryvtt.com/api/classes/foundry.documents.TokenDocument.html
- `CONFIG.Actor.trackableAttributes` example shape in the KB: `hero: { bar: [...], value: [...] }` — bar entries must be paths to `{value, max}` objects; `value` entries may be plain numeric paths. https://foundryvtt.com/article/system-development/

So: a **bar** requires a nested object `{ value, max }` (both numeric). This is mandatory *for bars* — the bar code reads `<path>.value` and `<path>.max` — but a flat `hp_value`/`hp_max` pair cannot be a bar. Plain-value tracking (the `value` list) works with any numeric path, flat included. Systems can control the offered list via `CONFIG.Actor.trackableAttributes` or by overriding `_getTrackedAttributesFromSchema`; but the bar reading shape itself is not configurable (documented in the interface above). The auto-discovery walk of the schema and the exact detection rule (a `SchemaField` containing `value` and `max`) is **unverified at source level**; the interface text is the contract.

Minimal accommodation for a flat namespace: keep everything flat except the few resources you want as bars, e.g. `hp: new SchemaField({ value: NumberField, max: NumberField })`.

### Active Effects — no shape constraint, path only

- `EffectChangeData.key`: "The attribute path in the Actor or Item data which the change modifies". https://foundryvtt.com/api/interfaces/foundry.documents.types.EffectChangeData.html
- v14 application: `applyChange` returns "An object of property keys and their updated values"; `applyChangeField` takes `field?: DataField` — "if not supplied, it will be retrieved from the supplied Document" via `getFieldForProperty` ("Traverse the data model instance, obtaining the DataField definition for a field of a particular property."). https://foundryvtt.com/api/classes/foundry.documents.ActiveEffect.html
- v13: `apply` → `applyField` ("Apply EffectChangeData to a field within a DataModel."), with `_applyLegacy` as the heuristic path ("using a heuristic to infer the value types based on the current value and/or the default value in the template.json"). https://foundryvtt.com/api/v13/classes/foundry.documents.ActiveEffect.html
- Any dotted path that resolves through the schema works: `system.strength` on a flat schema is fine. Keys must not contain `.` (they are split), otherwise no constraint.

### Roll data (`@` references) — no constraint (see §5).

### Combat / initiative

`CONFIG.Combat.initiative.formula` is a roll formula evaluated against `getRollData()`, so it follows §5, not a shape. (Not separately fetched; stated from the KB's system-development article structure — treat as low-risk.)

---

## 5. `getRollData()` and `@` resolution

- `Actor#getRollData`: "Return a data object which defines the data schema against which dice rolls can be evaluated. By default, this is directly the Actor's system data, but systems may extend this to include additional properties." https://foundryvtt.com/api/classes/foundry.documents.Actor.html
- `Item#getRollData`: identical wording ("directly the Item's system data") plus "care must be taken not to mutate the original object." https://foundryvtt.com/api/classes/foundry.documents.Item.html
- `Roll.replaceFormulaData(formula, data, {missing, warn})`: "Data references in the formula use the @attr syntax and would reference the corresponding attr key." `missing`: "The value that should be assigned to any unmatched keys. If null, the unmatched key is left as-is." https://foundryvtt.com/api/v13/classes/foundry.dice.Roll.html
- The API doc does not name `getProperty`, but the "attr key" is a dotted path (KB examples such as `@abilities.str.value`), and the only core dotted-path reader is `foundry.utils.getProperty`. Treat "resolution = `getProperty(data, term)`" as **strongly implied, unverified verbatim**.

Bottom line: with a flat `system`, `@strength` resolves to `system.strength` with no override of `getRollData()` at all.

---

## 6. Minimum legal nesting

- **Minimum:** `system` → leaf fields. One `defineSchema()` returning `{ key: DataField }` with no `SchemaField` children is legal in v12, v13 and v14.
- **What concretely forces nesting:**
  1. Token **bars**: each bar attribute must be an object with `value` and `max` (§4). Only resources you want to display as bars need this.
  2. **Repeating rows with dynamic ids**: not a nesting *requirement*, but a `TypedObjectField` (v13+) / `ObjectField` (v12) map is the only way to get per-row dotted updates and `-=`/`ForcedDeletion` row removal; `ArrayField` is whole-replacement only.
  3. Avoid `.` in keys and `-=`/`==` prefixes; avoid names that collide with `DataModel` members.

---

## Direct answer

1. `system` may be flat. `defineSchema()` only needs to return `{ name: DataField }`; no nested `SchemaField` is required (KB shows even `{}`).
2. Keys may use letters, digits, `_`, `-`. Never use `.` (every path helper splits on it) and never begin a key with `-=` or `==` (v10–v13 delete/replace prefixes). No documented reserved names under `system`; steer clear of `DataModel` member names and of `_id`/`type` for sanity.
3. For rows: `ArrayField` = whole-array replacement only ("arrays are always fully replaced"). `TypedObjectField(SchemaField)` (v13+, 13.335) or `ObjectField` (v12) supports `system.rows.<id>.<field>` updates and `system.rows.-=<id>: null` deletion (v13) / `ForcedDeletion` operator (v14).
4. The only shape mandated by core is `{ value, max }` for token **bar** attributes. Active Effects and roll data take any dotted path.
5. `getRollData()` returns `system` directly; `@strength` on a flat schema works with no override.
6. Minimum nesting = none, except a `{value, max}` `SchemaField` for each attribute you want as a token bar, and a `TypedObjectField`/`ObjectField` map for repeating rows.

Unverified items: exact `@` reference regex; whether v14 still accepts string `-=` keys; the exact schema-walk rule inside `_getTrackedAttributesFromSchema`; exact `TypedObjectField#_updateDiff` code.

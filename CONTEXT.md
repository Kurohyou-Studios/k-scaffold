# k-scaffold

A PUG/SCSS/JS framework for authoring VTT character sheet content from a single source. Currently emits Roll20 custom character sheets; gaining Foundry VTT (v14+) system export from the same source.

## Language

**Target**:
An output platform k-scaffold can emit from one build (`roll20` or `foundry`). A single build can produce one or both from the same authored source.
_Avoid_: platform, backend, output format

**Mode**:
A named, self-contained *kind of character* (e.g. player character, NPC, vehicle) with its own data and sheet content, declared via a dedicated mixin family. Any one character is exactly one mode; modes never coexist on a single character. On Roll20 all modes ship in one sheet codebase and render as a top-level tab selecting which kind of character the sheet is (Roll20 allows one sheet per game); on Foundry each mode is emitted as its own Actor type with its own document and data namespace.
_Avoid_: tab (a tab is a same-document visibility toggle *within* a mode; a mode is a document boundary), page, view, sheet, sibling mode (a character has no sibling modes — it *is* one mode)

**Cascade schema**:
The compile-time registry, built as mixins render, of every attribute/button/fieldset and how it reacts to change (`affects`, triggered funcs, formulas). It is the shared intermediate representation both the Roll20 and Foundry emitters read from.
_Avoid_: varObjects (that's the internal implementation name), schema (ambiguous alone — this project's schema is specifically the cascade)

**Alias layer**:
The JS `Proxy` (`lib/scripts/attribute_proxy.js`) that authored sheet-worker code reads and writes character data through. Its external interface is identical on both targets; internally it is backed by Roll20's `getAttrs`/`setAttrs` on one target and by the Foundry actor document's data directly on the other.
_Avoid_: accessor functions, data layer, proxy (ambiguous alone — always qualify as "the alias layer" or "the attribute proxy")

**Cross-document call**:
An explicit RPC (`k.send`, `lib/scripts/utility.js`): a registered function on one *character* is invoked from another character, with serialized arguments, rather than one character reading another's data directly. The target is addressed by a plain runtime identifier (character name on Roll20; actor name or UUID on Foundry), never by a scaffold-declared link. On Roll20 this is a chat-command round trip (no direct object references exist between sheets); on Foundry it resolves to an in-memory function call on the target actor, relayed over the system socket when the calling client cannot write the target. This is the only sanctioned path for character-to-character data access. It is *not* a mode concept: modes are alternative kinds of character, not parts of one character, so there is no mode-to-mode traffic.
_Avoid_: shared pool (that described the Roll20 side-effect this replaces, not the design), cross-actor read, mode-to-mode call, declared link

**Parent read**:
An embedded Item transparently reading its owning Actor's data through the same alias-layer proxy it reads its own fields through — no separate accessor. This mirrors the existing Roll20 pattern where sheet-worker code inside a repeating row already reads non-repeating (character-level) attributes through the same flat `attributes` object as the row's own fields, with no special-casing. Unlike a cross-document call, this is a structural parent/child relationship (an Item always has its Actor), so it does not go through `k.send`.
_Avoid_: shared pool, cross-document call (that term is for peer documents, not parent/child)

**Derived attribute**:
An attribute-holder element (e.g. a named `span`, `div`, or `img`) whose value is computed from other attributes rather than authored input. It participates in the cascade schema like any other attribute, but carries no field of its own in Foundry's `defineSchema()` — its value comes from `prepareDerivedData()` instead. Contrast with an ordinary (stored) attribute, which does own a schema field.
_Avoid_: computed attribute, read-only attribute

**Resource attribute**:
An attribute `<name>` paired with an ordinary second attribute `<name>_max` (the "pairing suffix"), detected purely at runtime by the alias layer — no separate declaration exists. `.value` is always readable on any attribute; `.max` only resolves on a resource attribute. See [ADR 0026](docs/adr/0026-resource-attribute-max-pairing-convention.md).
_Avoid_: pooled attribute, value/max attribute, bar attribute

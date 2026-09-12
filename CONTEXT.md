# k-scaffold

A PUG/SCSS/JS framework for authoring VTT character sheet content from a single source. Currently emits Roll20 custom character sheets; gaining Foundry VTT (v14+) system export from the same source.

## Language

**Target**:
An output platform k-scaffold can emit from one build (`roll20` or `foundry`). A single build can produce one or both from the same authored source.
_Avoid_: platform, backend, output format

**Mode**:
A named, self-contained chunk of a character's data and sheet content, declared via a dedicated mixin family. On Roll20 a mode renders as a tab sharing the character's single attribute pool; on Foundry each mode is emitted as its own Actor type with its own document and data namespace.
_Avoid_: tab (a tab is a same-document visibility toggle *within* a mode; a mode is a document boundary), page, view, sheet

**Cascade schema**:
The compile-time registry, built as mixins render, of every attribute/button/fieldset and how it reacts to change (`affects`, triggered funcs, formulas). It is the shared intermediate representation both the Roll20 and Foundry emitters read from.
_Avoid_: varObjects (that's the internal implementation name), schema (ambiguous alone — this project's schema is specifically the cascade)

**Alias layer**:
The JS `Proxy` (`lib/scripts/attribute_proxy.js`) that authored sheet-worker code reads and writes character data through. Its external interface is identical on both targets; internally it is backed by Roll20's `getAttrs`/`setAttrs` on one target and by the Foundry actor document's data directly on the other.
_Avoid_: accessor functions, data layer, proxy (ambiguous alone — always qualify as "the alias layer" or "the attribute proxy")

**Cross-document call**:
An explicit RPC (`k.send`, `lib/scripts/utility.js`): a registered function on one document is invoked from another, with serialized arguments, rather than one document reading another's data directly. On Roll20 this already exists as a chat-command round trip between characters (no direct object references exist between sheets); on Foundry it resolves to a direct in-memory function call on the target document. This is the only sanctioned path for mode-to-mode (actor-to-actor) data access — modes do not read each other's data directly.
_Avoid_: shared pool (that described the Roll20 side-effect this replaces, not the design), cross-actor read

**Parent read**:
An embedded Item transparently reading its owning Actor's data through the same alias-layer proxy it reads its own fields through — no separate accessor. This mirrors the existing Roll20 pattern where sheet-worker code inside a repeating row already reads non-repeating (character-level) attributes through the same flat `attributes` object as the row's own fields, with no special-casing. Unlike a cross-document call, this is a structural parent/child relationship (an Item always has its Actor), so it does not go through `k.send`.
_Avoid_: shared pool, cross-document call (that term is for peer documents, not parent/child)

**Derived attribute**:
An attribute-holder element (e.g. a named `span`, `div`, or `img`) whose value is computed from other attributes rather than authored input. It participates in the cascade schema like any other attribute, but carries no field of its own in Foundry's `defineSchema()` — its value comes from `prepareDerivedData()` instead. Contrast with an ordinary (stored) attribute, which does own a schema field.
_Avoid_: computed attribute, read-only attribute

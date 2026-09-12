# k-scaffold

A PUG/SCSS/JS framework for authoring VTT character sheet content from a single source. Currently emits Roll20 custom character sheets; gaining Foundry VTT (v14+) system export from the same source.

## Language

**Static option**:
An `+option()` call inside a `+select` block, whose value and label are fixed at compile time.
_Avoid_: option (ambiguous alone once dynamic options exist — always qualify as static or dynamic)

**Dynamic option source**:
A `+select`'s option list populated at runtime rather than fixed at compile time, declared with a `+dynamicOptions` mixin inside the `+select` block — either the declarative `section`/`label` form (one option per row of a named repeating section, labelled by one attribute in that row) or a custom option generator function. Contrast with a static option.
_Avoid_: populateListOptions (that's the Roll20 primitive this builds on, not the k-scaffold term), computed option

**Option generator function**:
An author-written k-scaffold function, wired via `+dynamicOptions({function, trigger})`, that returns an array of `{value, label}` pairs to populate a select at runtime. Used instead of the declarative `section`/`label` form when a select's options can't be expressed as "every row in one repeating section, labelled by one attribute in it."
_Avoid_: dynamic option (that's the outer concept; this is one of its two sources)

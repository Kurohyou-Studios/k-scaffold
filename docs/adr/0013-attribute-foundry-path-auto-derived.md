# Attribute Foundry field paths auto-derive from the mixin call site

An attribute's Foundry `system.` field path is derived from the same name given at its mixin call site (e.g. `+input('strength', ...)`), not a second explicit per-attribute argument. The mixin call site stays the single source of truth for naming on both targets; a second name at per-attribute frequency would double authoring effort and risk drift.

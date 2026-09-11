# Foundry export is purely additive to the Roll20 pipeline

Existing Roll20-only sheets must keep building unchanged with zero required edits once Foundry export lands. Every new construct introduced for Foundry support (the mode mixin, `foundryItemType`, etc.) is opt-in, so current k-scaffold consumers are never forced into a migration just to keep shipping Roll20 sheets.

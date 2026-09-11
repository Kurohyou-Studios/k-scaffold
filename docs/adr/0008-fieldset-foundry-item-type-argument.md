# Foundry Item type is declared as an argument on `fieldset`

`fieldset` gains an optional `foundryItemType` argument rather than a separate wrapper mixin. Row/column authoring and cascade registration are identical whether or not the argument is present; only the Foundry emission path (ADR 0006) branches on it.

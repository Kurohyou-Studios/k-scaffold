# Build config gains a `targets` array and a `foundry` block

`k.config.mjs` gains `targets: ['roll20', 'foundry']` (each independently toggleable, per ADR "single command, both targets") and a `foundry: {}` block for target-specific metadata (system id, title, compatibility), mirroring how Roll20 output is already configured via `templates`/`sheet.json`. `compatibility.minimum` defaults to 14, matching this project's Foundry v14+-only scope.

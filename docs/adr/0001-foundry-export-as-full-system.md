# Foundry export ships as a full game system, not a module

k-scaffold defines bespoke Actor/Item types and data unique to the game it's scaffolding. Foundry modules cannot introduce new document types onto an arbitrary host system, so Foundry export produces its own system (`system.json`, `template.json`, Actor/Item type schemas, sheet classes) rather than layering onto an existing generic system.

# Modes are a new mixin family, not a tabs variant

A mode implies a document/attribute-namespace boundary (a separate Foundry Actor type); a tab is a same-document visibility toggle within a shared attribute pool. Flagging the existing `tabs`/`tab` mixin (e.g. `+tabs(foundryMode=true)`) risks silently turning ordinary tabs into separate Foundry actors, or blocking real tabs nested within a mode. Modes are therefore a dedicated mixin family (`+modes`/`+mode`, mirroring the `tabs`/`tab` authoring shape) that can itself contain tabs.

On Roll20, `+modes`/`+mode` decomposes to the existing `tabs`/`tab` implementation — it is not a second Roll20 rendering path, but a thin authoring layer over tabs for that target. Only the Foundry emitter treats each mode as a distinct Actor type/document.

# The attribute proxy becomes the cross-target alias layer

`lib/scripts/attribute_proxy.js` already sits between authored sheet-worker code and Roll20's `getAttrs`/`setAttrs`. Rather than adding a new accessor API on top of it, the proxy itself becomes backend-swappable per target: fed by Roll20's `getAttrs`/`setAttrs` callbacks on one side, and by the Foundry actor document's data directly on the other. Authored sheet-worker code keeps one interface regardless of target.

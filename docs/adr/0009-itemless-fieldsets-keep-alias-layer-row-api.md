# Itemless fieldsets keep the same alias-layer row API

A fieldset with no declared Foundry Item type still exposes `attributes.repeating_<name>` with `create`/`move`/`sort`/`remove`, backed by a plain array in the mode-actor's own `system` data instead of an Item collection. Authored sheet-worker code never branches on which storage a fieldset resolved to.

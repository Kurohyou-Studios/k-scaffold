# Fieldset → Foundry Item mapping is opt-in per fieldset

A `fieldset` only emits as embedded Foundry Item documents when the fieldset declares an associated Item type. A fieldset with no declared Item type still needs a structured home for its rows on Foundry, but stays as data on the mode-actor itself rather than becoming documents. This keeps plain "just a few repeating attributes" fieldsets lightweight instead of forcing every repeating section into Foundry's Item system.

# Generate Foundry DataModel classes from the cascade schema

The Foundry emitter generates `DataModel`/`TypeDataModel` subclasses with `defineSchema()` per Actor/Item type, rather than a legacy `template.json`. The cascade schema already carries attribute name, type, and default value — everything `defineSchema()` needs — and DataModel classes give real field validation and migration support that `template.json` does not.

# One PUG source authors both targets

Content authors write one set of PUG mixin calls; both the Roll20 and Foundry emitters read from the schema those mixins register into (see ADR 0002). Target-specific source files were rejected because maintaining parallel PUG trees per platform reintroduces the duplication this project exists to eliminate.

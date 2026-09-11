# Foundry sheets use Handlebars + ApplicationV2

The Foundry emitter compiles authored PUG into Handlebars (`.hbs`) partials rendered by `HandlebarsApplicationMixin`-based `ApplicationV2` classes, Foundry's documented v13+/v14 sheet convention, rather than hand-rolled DOM rendering. PUG remains the single authored source (ADR 0003); only the emitter's output format differs from the Roll20 path's raw HTML.

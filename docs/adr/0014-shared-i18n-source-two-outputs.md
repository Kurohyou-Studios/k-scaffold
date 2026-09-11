# One i18n source, two output formats

The Foundry emitter reads the same `data-i18n*` markup the Roll20 pipeline already extracts into `translation.json`, and generates Foundry's own `lang/en.json` (`game.i18n`) from it. Translators author each string once regardless of target.

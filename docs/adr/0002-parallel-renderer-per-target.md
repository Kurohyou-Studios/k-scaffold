# Foundry emission is a parallel renderer, not a branched Roll20 pipeline

Roll20 output (HTML string + inlined sheet-worker JS + `sheet.json`) and Foundry output (JSON templates + ES module document/sheet classes) are structurally unrelated artifacts. Rather than threading a `target` flag through `renderPug`/`outputPug`/`kscript`, Foundry export is a separate renderer (`lib/render-foundry/`, `lib/scripts-foundry/`) that consumes the same compile-time cascade schema the Roll20 renderer already builds. The cascade schema is the shared intermediate representation between the two emitters.

# Foundry gets an equivalent mock test harness

A `mockFoundry.js` + generated `testFramework.js`, mirroring the existing `mock20.js`/`mockScaffold.js` vitest setup, lets authored registered-function/cascade behavior run against both targets from one test suite. Since the alias layer's purpose is target-agnostic authored code, this is the fastest way to catch a target-specific regression before manual testing in the actual client.

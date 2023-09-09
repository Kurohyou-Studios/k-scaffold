---
title: Guide
---
## Installation
### Prerequisites
::: info
- Node.js v18+ & NPM
- A Roll20 Pro subscription to test your sheet
:::
Once you have the prerequisites set up, you can initialize your project with npm and install the K-scaffold via the command line
```sh
$ npm init -y
$ npm i -D @kurohyou/k-scaffold@latest
```
Once the project is initialized and the K-scaffold is installed, you can set up your required files
### File Organization
Your project directory should be set up with at least a source directory where all of your pug, scss, and js files will be located. Additionally it is recommended that the source folder be further divided by file type (Pug, SCSS, JS).
```
Project Name/
  source/
    pug/
    scss/
      components/
        _index.scss
      sections/
        _index.scss
    js/
      _index.pug
    projectName.pug
    projectName.scss
    translation.json
    sheet.json
    readme.md
  package.json
  k.config.mjs
  jsconfig.json
```
This organizational pattern helps keep your files organized and makes them easier to find.
### package.json
The `package.json` file is what tells NPM what packages (like the K-scaffold) your project needs, as well as what terminal commands are available. While you can use the native K-scaffold `k-build` command to run it in dev mode, creating script aliases in your `package.json` will probably be preferred.
```json
{
  "name": "Project Name",
  "version": "0.1",
  "description": "Description of your project",
  "scripts": {
    "build": "npm i && k-build",
    "dev": "npm i && k-build --watch",
    "test": "vitest run",
    "test-watch": "vitest --ui"
  },
  "devDependencies": {
    "@kurohyou/k-scaffold": "^2.0.2",
    "@vitest/ui": "^0.29.5",
    "vitest": "^0.29.5"
  }
}

```
`vitest` and `vitest/ui` are optional dependencies if you want to use the K-scaffold's built in testing framework as well.
### The config file
The `k.config.json` file is what directs the K-scaffold. It tells the K-scaffold what files to watch, what files to base your sheet's `sheet.json` and `translation.json` files off of, and where the built files should be placed. 
```json
export default {
  source:'./source',
  destination:'./build',
  testDestination:'./__tests__',
  templates:'./source'
};
```
This basic config file will set the scaffold up to:
- Monitor the `source/` directory for changes.
- Place your built html, json, and css files in the `build/` directory.
- Place the created test framework in the `__tests__` directory.
- use the `sheet.json`, `translation.json`, and `readme.md` located in `source/` as the templates for your `sheet.json` and `translation.json` files.
## Next?
Now that the K-scaffold is set up and your file structure is complete, you'll need to create your first pug and scss files in your source directory. These will be the master files that your HTML and CSS will be created from.
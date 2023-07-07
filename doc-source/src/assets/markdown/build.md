## The build API
The K-scaffold's build API is a powerful parsing tool that allows you to build your sheet quickly and easily. When combined with the [Roll20 auto code extension](https://chrome.google.com/webstore/detail/roll20-api-and-sheet-auto/hboggmcfmaakkifgifjbccnpfmnegick) and the [Roll20 sheet sandbox](https://wiki.roll20.net/Custom_Sheet_Sandbox), it provides the fastest and easiest sheet build experience available. The API can be used via command line with a config file or in your own custom build js file.

### Build CLI

The quickest and easiest way to use the build API is by setting up a k.config.js or k.config.mjs file and running the cli command:
```
k-build
```

#### k.config
What does a k.config file look like? Regardless of whether you use a .js or .mjs file, a k.config file looks like this:
```js
export default {
  source:'./source',
  destination:'./build',
  testDestination:'../__tests',
  pugOptions:{},
  scssOptions:{},
  translationTemplate:'./source'
};
```
It exports the details of how you want to build your sheet so that the build API knows where to send files and how to report. The properties of the exported object are the same as described for the [k.all](#k.all) function.

### Custom build file

If you would rather use the build API in a custom build file, you simply need to require it in your js file and use the provided `all` property:
```js
const k = require('@kurohyou/k-scaffold');//Require the K-scaffold that we installed via NPM
const kOpts = {destination:'./build',testDestination:'../__tests__',source:'./source'};
// We've set our output directory as roll20code, located directly in this same directory.

if(process.argv[2] === '--watch'){
  kOpts.watch = true;
}
k.all(kOpts);// Invoke the all method of the K-scaffold npm package to process all pug and scss files that are in the same directory as this file.
```
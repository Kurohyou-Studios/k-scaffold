<script setup>
import { useData } from 'vitepress'

import { data } from '@/reference.data.js'

const docArr = data.build.Build;
const nameSpaceIndex = docArr.findIndex(o => o.kind === 'namespace');
const nameSpaceObj = docArr.splice(nameSpaceIndex,1)?.[0] || {};
</script>

# Build API
The K-scaffold’s build API is a powerful parsing tool that allows you to build your sheet quickly and easily. When combined with the [Roll20 auto code](https://chrome.google.com/webstore/detail/roll20-api-and-sheet-auto/hboggmcfmaakkifgifjbccnpfmnegick) extension and the [Roll20 sheet sandbox](https://wiki.roll20.net/Custom_Sheet_Sandbox), it provides the fastest and easiest sheet build experience available. The API can be used via command line with a config file or in your own custom build js file.
## k.config
What does a k.config file look like? Regardless of whether you use a .js or .mjs file, a k.config file looks like this:
```js-vue
export default {
  source:'./source',
  destination:'./build',
  testDestination:'../__tests',
  pugOptions:{},
  scssOptions:{},
  templates:'./source'
};
```
It exports the details of how you want to build your sheet so that the build API knows where to send files and how to report. The properties of the exported object are the same as described for the k.all function.
## Custom Build File
If you would rather use the build API in a custom build file, you simply need to require it in your js file and use the provided `all` property (See [below](#all) for more details on k.all):
```js-vue
const k = require('@kurohyou/k-scaffold');//Require the K-scaffold that we installed via NPM
const kOpts = {destination:'./build',testDestination:'../__tests__',source:'./source'};
// We've set our output directory as roll20code, located directly in this same directory.

if(process.argv[2] === '--watch'){
  kOpts.watch = true;
}
k.all(kOpts);// Invoke the all method of the K-scaffold npm package to process all pug and scss files that are in the same directory as this file.
```
<div v-for="obj in docArr" :key="obj.name">

<h2 :id="obj.name">k.{{obj.name}}</h2>
{{obj.kind !== 'Mixin' ? obj.kind : ''}}
<div v-html="obj.description" />

<ul>
  <li v-for="propObj in obj.properties" :key="`${obj.name}-${propObj.name}`">

{{propObj.name}} - `{{propObj.type}}`
<div v-html="propObj.description" />

  </li>
  <li v-for="propObj,i in obj.returns" :key="`${obj.name}-return-${i}`">

Returns: `{{propObj.type}}` 
<div v-html="propObj.description" />

  </li>
</ul>
<h3 v-if="obj.examples">Example</h3>
<div v-for="example,i in obj.examples" :key="`${obj.name}-example-${i}`">

```js-vue
{{example}}
```

</div>

</div>

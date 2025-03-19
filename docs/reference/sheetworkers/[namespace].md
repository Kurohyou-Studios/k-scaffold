---
title: Sheetworkers
aside: false
---
<script setup>
import Argument from '@/components/Argument.vue';
import { useData } from 'vitepress'

import { data } from '@/reference.data.js'

const { params } = useData();

const docArr = [...data.js[params.value.namespace]];
const nameSpaceIndex = docArr.findIndex(o => o.kind === 'namespace');
const nameSpaceObj = docArr.splice(nameSpaceIndex,1)?.[0] || {};
const scriptNamespace = params.value.namespace;
const namePrefix = scriptNamespace === 'Function Arguments' ?
  '' :
  'k.';
</script>

# {{scriptNamespace}}
<div v-html="nameSpaceObj.description" />
<div v-for="obj in docArr" :key="obj.name">

<h2 :id="obj.name">{{namePrefix}}{{obj.name}}</h2>
{{ obj.kind }}

<div v-html="obj.description" />

<ul>
  <li v-for="propObj in obj.properties" :key="`${obj.name}-${propObj.name}`">
    <Argument>
      <template #name>{{propObj.name}}</template>
      <template #type>{{propObj.type}}</template>
      <template #description>
        <div v-html="propObj.description" />
      </template>
    </Argument>
  </li>
  <li v-for="propObj,i in obj.returns" :key="`${obj.name}-return-${i}`">

Returns: `{{propObj.type}}`
<span v-html="propObj.description" />

  </li>
</ul>
<h3 v-if="obj.examples">Example</h3>
<div v-for="example,i in obj.examples" :key="`${obj.name}-example-${i}`">

```js-vue
{{example}}
```

</div>

</div>

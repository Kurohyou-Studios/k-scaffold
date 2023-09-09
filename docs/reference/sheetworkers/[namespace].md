---
title: Sheetworkers
aside: false
---
<script setup>
import { useData } from 'vitepress'

import { data } from '@/reference.data.js'

import { parseLink } from '@/utilities'

const { params } = useData();

const docArr = data.js[params.value.namespace];
const nameSpaceIndex = docArr.findIndex(o => o.kind === 'namespace');
const nameSpaceObj = docArr.splice(nameSpaceIndex,1)?.[0] || {};
const scriptNamespace = params.value.namespace;
</script>

# {{scriptNamespace}}
{{nameSpaceObj.description}}
<div v-for="obj in docArr" :key="obj.name">

<h2 :id="obj.name">k.{{obj.name}}</h2>
{{obj.kind !== 'Mixin' ? obj.kind : ''}}

{{ obj.description }}

{{ obj.returns}}

<ul>
  <li v-for="propObj in obj.properties" :key="`${obj.name}-${propObj.name}`">

{{propObj.name}} - `{{propObj.type}}` - {{propObj.description}}

  </li>
  <li v-for="propObj,i in obj.returns" :key="`${obj.name}-return-${i}`">

Returns: `{{propObj.type}}` {{propObj.description}}

  </li>
</ul>
<h3 v-if="obj.examples">Example</h3>
<div v-for="example,i in obj.examples" :key="`${obj.name}-example-${i}`">

```js-vue
{{example}}
```

</div>

</div>

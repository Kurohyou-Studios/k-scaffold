---
title: Style
aside: false
---
<script setup>
import { useData } from 'vitepress'

import { data } from '@/reference.data.js'

const { params } = useData();

const docArr = [...data.scss[params.value.namespace]];
const nameSpaceIndex = docArr.findIndex(o => o.kind === 'namespace');
const nameSpaceObj = docArr.splice(nameSpaceIndex,1)?.[0] || {};
const scriptNamespace = params.value.namespace;
</script>

# {{scriptNamespace}}

<div v-html="nameSpaceObj.description" />
<div v-for="obj in docArr" :key="obj.name">

<h2 :id="obj.name">k.{{obj.name}}</h2>

<div v-html="obj.description" />

<ul>
  <li v-for="propObj in obj.properties" :key="`${obj.name}-${propObj.name}`">

{{propObj.name}} - `{{propObj.type}}` -
<div v-html="propObj.description" />

  </li>
  <li v-for="propObj,i in obj.returns" :key="`${obj.name}-return-${i}`">

`{{propObj.type}}` <div v-html="propObj.description" />

  </li>
</ul>
<div v-if="obj.code">
<h3>Context</h3>

```scss-vue
{{obj.code}}
```
</div>

</div>

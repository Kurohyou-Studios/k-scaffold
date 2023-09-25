---
title: Pug
aside: false
---
<script setup>
import { useData } from 'vitepress'

import { data } from '@/reference.data.js'

const { params } = useData();

const docArr = [...data.pug[params.value.namespace]];
const scriptNamespace = params.value.namespace;
</script>
# {{scriptNamespace}}

<div v-for="obj in docArr" :key="obj.name">

<h2 :id="obj.name">{{obj.name}}</h2>
{{obj.kind !== 'Mixin' ? obj.kind : ''}}

<div v-html="obj.description" />

<ul>
  <li v-for="propObj in obj.properties" :key="`${obj.name}-${propObj.name}`">

{{propObj.name}} - `{{propObj.type}}` 
<div v-html="propObj.description" />

  </li>
</ul>
<div v-if="obj.example">

### Example
```pug-vue
{{obj.example}}
```

</div>
<div v-if="obj.output && !/^(kscript|module)$/.test(obj.name)">

### Output
```html-vue
{{obj.output}}
```

</div>

</div>

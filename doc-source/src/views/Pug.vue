<script setup>
import Library from '@/components/Library.vue'
import { pug,js } from '@/assets/data/index.mjs'
const data = [
  {
    kind:'namespace',
    name:'Mixins',
    description:
`These are the mixins that the K-scaffold provides. Each of these build a set of html and connects created Roll20 attributes to the sheetworkers for your sheet.`
  },
  ...pug.map(o => ({...o,memberof:'Mixins'})),
  ...js.filter(o =>
    (
      o.memberof === 'Locals' ||
      (o.kind === 'namespace' && o.name === 'Locals')
    ) &&
    !o.undocumented)
];
const kScriptObj = data.find(o => o.meta?.name === 'kscript');
delete kScriptObj.output;
</script>

<template>
  <Library :data="data">
    <p>Placeholder description</p>
  </Library>
</template>

<style>

</style>
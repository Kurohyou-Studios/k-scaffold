<script setup>
import Library from '@/components/Library.vue'
import { pug,js } from '@/assets/data/index.mjs'
const data = [
  ...pug,
  ...js.filter(o =>
    o.memberof === 'Locals' &&
    !o.undocumented)
];
console.log('data',data);
const kScriptObj = pug.find(o => o.meta.name === 'kscript');
delete kScriptObj.output;
</script>

<template>
  <Library :data="data">
    <p>Placeholder description</p>
  </Library>
</template>

<style>

</style>
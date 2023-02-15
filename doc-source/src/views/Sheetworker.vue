<script setup>
import Library from '@/components/Library.vue'
import { js } from '@/assets/data/index.mjs'
console.log('js',js.filter(o => !o.undocumented));
const data = js
  .filter(o =>
    (
      /sheetworkers|utilities|re|aliases|variables/i.test(o.memberof) ||
      (o.kind === 'namespace' && /sheetworkers/i.test(o.longname))
    ) &&
    !o.undocumented)
  .sort((a,b) => a.name.localeCompare(b.name))
  .map(o => ({...o,name:o.kind === 'namespace' ? o.name : `k.${o.name}`}));
console.log('sheetworker data',data);
</script>

<template>
  <Library :data="data">
    <p>Placeholder description</p>
  </Library>
</template>

<style>

</style>
<script setup>
import Library from '@/components/Library.vue'
import { js } from '@/assets/data/index.mjs'
import Readme from '@/assets/markdown/sheetworker.md'

const data = js
  .filter(o =>
    (
      /sheetworkers|utilities|re|aliases|variables/i.test(o.memberof) ||
      (o.kind === 'namespace' && /sheetworkers/i.test(o.longname))
    ) &&
    !o.undocumented)
  .sort((a,b) => a.name.localeCompare(b.name))
  .map(o => ({...o,name:o.kind === 'namespace' ? o.name : `k.${o.alias || o.name}`}));
</script>

<template>
  <Library :data="data">
    <Readme/>
  </Library>
</template>

<style>

</style>
<script setup>
import Library from '@/components/Library.vue'
import { js } from '@/assets/data/index.mjs'
import Readme from '@/assets/markdown/build.md'
const data = js
  .filter(o =>
    (
      /build/i.test(o.memberof) ||
      (o.kind === 'namespace' && /build/i.test(o.longname))
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
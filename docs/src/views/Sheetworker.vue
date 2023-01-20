<script setup>
import Library from '@/components/Library.vue'
import { js } from '@/assets/data/index.mjs'
const data = js
  .filter(o => o.memberof === 'sheetworkers' && !o.undocumented)
  .sort((a,b) => a.name.localeCompare(b.name))
  .map(o => ({...o,name:`k.${o.name}`}));
console.log('data',data);
</script>

<template>
  <Library :data="data">
    <p>Placeholder description</p>
  </Library>
</template>

<style>

</style>
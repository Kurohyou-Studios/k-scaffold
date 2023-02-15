<script setup>
import Library from '@/components/Library.vue'
import { sass } from '@/assets/data/index.mjs'
const data = sass.map(o => ({...o,context:{...o.context,name:`k.${o.context.name}`}}))
</script>

<template>
  <Library :data="sass">
    <p>Placeholder description</p>
  </Library>
</template>

<style>

</style>
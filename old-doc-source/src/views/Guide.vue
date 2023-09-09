<script setup>
import Library from '@/components/Library.vue'
import Intro from '@/assets/markdown/guide/1 - intro.md'
import D20 from '@/components/D20item.vue'
const data = [
  {name:'Intro',kind:'namespace'}
];
</script>

<template>
  <Library :data="data">
    <Intro/>
  </Library>
</template>

<style>

</style>
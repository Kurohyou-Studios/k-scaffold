<script setup>
import { RouterLink, RouterView } from 'vue-router'

import Header from '@/components/Header.vue'
</script>

<template>
  <Header/>
  <main class="content">
    <RouterView />
  </main>
</template>

<style scoped>
.content{
  background-color:teal;
  flex:1 0 0;
}
</style>

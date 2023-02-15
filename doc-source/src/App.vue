<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'

import Header from '@/components/Header.vue'

</script>

<template>
  <Header ref="headComp"/>
  <main class="content">
    <RouterView />
  </main>
</template>

<style scoped>
.content{
  background-color:teal;
  flex:1 0 0;
  background-color:var(--primary-back-color);
}
</style>

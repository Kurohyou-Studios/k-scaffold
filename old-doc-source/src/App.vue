<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'

import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

</script>

<template>
  <Header ref="headComp"/>
  <main class="content">
    <RouterView />
  </main>
  <Footer />
</template>

<style lang="scss">
.content{
  background-color:teal;
  flex:1 0 0;
  background-color:var(--primary-back-color);
  > div:not(.library-container){
    padding: var(--huge-gap);
  }
}
</style>

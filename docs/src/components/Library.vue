<script setup>
import LibraryCard from './LibraryCard.vue'
const { data } = defineProps(['data']);
</script>

<template>
<div class="library-container">
  <nav class="library-nav">
    <ul>
      <li v-for="entry,index in data" :key="`nav-entry-${index}`"><a :href="`#${entry.name || entry.meta?.name || entry.context?.name}`">{{ entry.name || entry.meta?.name || entry.context?.name }}</a></li>
    <!-- navigation -->
    </ul>
  </nav>
  <div class="library-content">
    <slot></slot>
    <LibraryCard v-for="entry,index in data" :key="`entry-${index}`" :entry="{...entry,index}"/>
  </div>
</div>
</template>

<style lang="scss">
.library-container{
  display:grid;
  grid-template-columns:200px 1fr;
  grid-template-rows: minmax(auto,100vh) 1fr;
  grid-template-areas: 
    'nav content'
    '.   content';
  column-gap:var(--gap);
}
.library-nav{
  width:100%;
  ul{
    margin:0;
    padding:0;
    grid-area:nav;
    display:flex;
    flex-direction: column;
    gap:var(--half-gap);
  }
}
.library-content{
  grid-area:content;
}
</style>
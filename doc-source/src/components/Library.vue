<script setup>
import LibraryCard from './LibraryCard.vue'
const { data:origData } = defineProps(['data']);
const namespaceObjs = origData.reduce((memo,obj) => {
  const spaceKey = obj.kind === 'namespace' ?
    obj.name.toLowerCase() :
    obj.memberof.toLowerCase();
  memo[spaceKey] = memo[spaceKey] || {members:[]};
  if(obj.kind === 'namespace'){
    memo[spaceKey].head = obj;
  }else{
    memo[spaceKey].members.push(obj);
  }
  return memo;
},{});
console.log('namespaceObjs',namespaceObjs)
const data = Object.entries(namespaceObjs)
  .reduce((memo,[name,obj]) => {
    memo.push(
      obj.head,
      ...obj.members.sort((a,b) => (a.name || a.meta?.name || a.context.name).localeCompare(b.name || b.meta?.name || b.context.name))
    );
    return memo;
  },[]);
</script>

<template>
<div class="library-container">
  <nav class="library-nav">
    <ul>
      <li v-for="hObj,hindex in Object.values(namespaceObjs)" :key="`nav-entry-${hindex}`">
        <routerLink class="nav-head" :to="`#${hObj.head.name}`">{{ hObj.head.name }}</routerLink>
        <ul>
          <li v-for="entry,index in hObj.members" :key="`nav-entry-${hindex}-${index}`">
            <routerLink :to="`#${entry.name || entry.meta?.name || entry.context?.name}`">{{ entry.name || entry.meta?.name || entry.context?.name }}</routerLink>
          </li>
        </ul>
      </li>
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
  grid-template-columns:auto 1fr;
  grid-template-rows: minmax(auto,100vh) 1fr;
  grid-template-areas: 
    'nav content'
    '.   content';
  column-gap:var(--gap);
}
.library-nav{
  --topSet: calc(var(--headHeight,90px) - 1px);
  position: sticky;
  top: var(--topSet);
  max-height: calc(100vh - var(--topSet) - var(--footerHeight));
  overflow: auto;
  background-color:var(--secondary-back-color);
  padding:var(--gap) var(--half-gap);
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
  overflow: hidden;
  padding: var(--huge-gap) var(--huge-gap) var(--huge-gap) 0;
}
.nav-head{
  font-size:125%;
  font-weight:bold;
  margin-top:var(--half-gap);
  margin-bottom:var(--tiny-gap);
  border-bottom:1px solid var(--secondary-font-color);
  display:block;
}
</style>
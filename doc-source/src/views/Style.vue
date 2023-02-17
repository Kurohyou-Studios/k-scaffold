<script setup>
import Library from '@/components/Library.vue'
import { sass } from '@/assets/data/index.mjs'
import Readme from '@/assets/markdown/scss.md'

const data = sass
  .reduce((memo,o,i,arr) => {
    if(o.group){
      o.memberof = o.group[0];
    }
    memo.entries.push(o);
    o.group?.forEach(g => {
      if(!memo.groups.includes(g)){
        memo.groups.push(g);
        const gObj = {
          description:'',
          kind:'namespace',
          name:g,
          context:{
            type:'group',
            name:g,
          }
        };
        memo.entries.push(gObj);
      }
    });
    if(i === arr.length - 1){
      return memo.entries;
    }else{
      return memo;
    }
  },{entries:[],groups:[]})
  .sort((a,b) => a.context.name.localeCompare(b.context.name))
  .map(o => ({...o,name:o.kind === 'namespace' ? o.name : `k.${o.context.name}`}));
console.log(data);
</script>

<template>
  <Library :data="data">
    <Readme />
  </Library>
</template>

<style>

</style>
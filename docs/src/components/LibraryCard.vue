<script setup>
import { ref } from 'vue';
import * as mkd from 'markdown'
const markdown = mkd.markdown;
const { entry } = defineProps(['entry']);
const entryName = ref(`${entry.name || entry.meta?.name || entry.context?.name}`);
console.log(entryName.value,entry);
</script>

<template>
<div class="card--library card" :id="`#${entryName}`">
  <div class="card-header">
  <h3>{{ entry?.name || entry?.meta?.name || entry?.context?.name || 'No Name found'}}</h3>
  <span>{{ entry.kind || 'mixin' }}</span>
  </div>
  <div class="card-content">
    <p v-html="markdown.toHTML(
      (
        entry?.description ||
        entry?.meta?.description
      )?.replace(/\{@link (.+?)\}/g,'[$1](#$1)')
    )"></p>
    <h4 v-if="entry?.properties">Properties</h4>
    <div class="arg-list" v-if="entry?.properties">
      <div class="arg-row" v-for="arg,argIndex in entry.properties" :key="`entry-${index}-arg-${argIndex}`">
        <h5>{{ arg.name }}</h5>
        <code>{{ arg.type?.names?.join(' | ') }}</code>
        <p v-html="markdown.toHTML(arg.description)"></p>
      </div>
    </div>

    <h4 v-if="(entry?.params && entry.params.length) || entry?.meta?.arguments">Parameters</h4>
    <div class="arg-list" v-if="(entry?.params && entry.params.length) || entry?.returns">
      <div class="arg-row" v-for="arg,index in entry?.params">
        <h5>{{ arg.name }}</h5>
        <code>{{ arg.type?.names?.join(' | ') }}</code>
        <p v-html="markdown.toHTML(arg?.description || '')"></p>
      </div>
      <div class="arg-row return-row" v-for="ret in entry.returns">
        <h5>Returns:</h5>
        <code>{{ ret.type.names.join(' | ') }}</code>
      </div>
    </div>
    <div class="arg-list" v-if="entry?.meta?.arguments">
      <div class="arg-row" v-for="arg,index in entry.meta.arguments">
        <h5>{{ arg.name }}</h5>
        <code>{{ arg.type }}</code>
        <p v-html="markdown.toHTML(arg.description)"></p>
      </div>
    </div>
    <h4 v-if="entry?.meta?.example || entry?.examples || entry?.example">Example</h4>
    <pre v-if="entry?.meta?.example"><code>{{ entry.meta.example.replace(/include \.\.\/_k.pug/g,'include k-scaffold') }}</code></pre>
    <pre v-for="example,index in entry?.examples" :key="`${entryName}-example-${index}`"><code>{{ example.replace(/\r|\n/g,'\n') }}</code></pre>
    <pre v-for="example,index in entry?.example" :key="`${entryName}-example-${index}`"><code>{{ example.code.replace(/\r|\n/g,'\n') }}</code></pre>
    <h4 v-if="entry?.output">Output</h4>
    <pre v-if="entry?.output"><code>{{ entry.output }}</code></pre>
  </div>
</div>
</template>

<style lang="scss">
.card--library{
  margin-bottom:var(--gap);
  pre{
    margin:0;
  }
  .arg-list{
    display:grid;
    grid-template-columns:auto 1fr;
    gap:var(--half-gap);
    place-items:start;
    p{
      grid-column-start: 2;
      margin:0;
    }
    h5{
      grid-column: 1 / -1;
    }
  }
  h4{
    margin-top:var(--gap);
    margin-bottom: var(--half-gap);
  }
  .arg-row{
    display:contents;
  }
  .return-row{
    h5{
      grid-column: 1 / 2;
    }
  }
}
</style>
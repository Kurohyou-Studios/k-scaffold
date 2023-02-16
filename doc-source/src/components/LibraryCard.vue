<script setup>
import { ref } from 'vue';
import * as mkd from 'markdown'
const markdown = mkd.markdown;
const { entry } = defineProps(['entry']);
const entryName = ref(`${entry.name || entry.meta?.name || entry.context?.name}`);
const entryLevel = entry.kind === 'namespace' ? 3 : 4;
</script>

<template>
<div class="card--library card" :id="`${entryName}`">
  <div class="card-header">
    <component :is="`h${entryLevel}`">{{ entry?.name || entry?.meta?.name || entry?.context?.name || 'No Name found'}}</component>
    <span v-if="entry.kind !== 'namespace'">{{ entry.kind || 'mixin' }}</span>
  </div>
  <div class="card-content">
    <p v-html="markdown.toHTML(
      (
        entry?.description ||
        entry?.meta?.description ||
        ''
      )?.replace(/\{@link (.+?)\}/g,'[$1](#$1)')
    )"></p>
    <component :is="`h${entryLevel + 1}`" v-if="entry?.properties">Properties</component>
    <div class="arg-list" v-if="entry?.properties">
      <div class="arg-row" v-for="arg,argIndex in entry.properties" :key="`entry-${index}-arg-${argIndex}`">
        <span>{{ arg.name }}</span>
        <code>{{ arg.type?.names?.join(' | ') }}</code>
        <p v-html="markdown.toHTML(arg.description || '')"></p>
      </div>
    </div>

    <component :is="`h${entryLevel + 1}`" v-if="(entry?.params && entry.params.length) || entry?.meta?.arguments">Parameters</component>
    <div class="arg-list" v-if="(entry?.params && entry.params.length) || entry?.returns">
      <div class="arg-row" v-for="arg,index in entry?.params">
        <span>{{ arg.name }}</span>
        <code>{{ arg.type?.names?.join(' | ') }}</code>
        <p v-html="markdown.toHTML(arg?.description || '')"></p>
      </div>
      <div class="arg-row return-row" v-for="ret in entry.returns">
        <span>Returns:</span>
        <code>{{ ret.type.names.join(' | ') }}</code>
      </div>
    </div>
    <div class="arg-list" v-if="entry?.meta?.arguments">
      <div class="arg-row" v-for="arg,index in entry.meta.arguments">
        <span>{{ arg.name }}</span>
        <code>{{ arg.type }}</code>
        <p v-html="markdown.toHTML(arg.description)"></p>
      </div>
    </div>
    <component :is="`h${entryLevel + 1}`" v-if="entry?.meta?.example || entry?.examples || entry?.example">Example</component>
    <pre v-if="entry?.meta?.example"><code>{{ entry.meta.example.replace(/include \.\.\/_k.pug/g,'include k-scaffold') }}</code></pre>
    <pre v-for="example,index in entry?.examples" :key="`${entryName}-example-${index}`"><code>{{ example.replace(/\r|\n/g,'\n') }}</code></pre>
    <pre v-for="example,index in entry?.example" :key="`${entryName}-example-${index}`"><code>{{ example.code.replace(/\r|\n/g,'\n') }}</code></pre>
    <component :is="`h${entryLevel + 1}`" v-if="entry?.output">Output</component>
    <pre v-if="entry?.output"><code>{{ entry.output }}</code></pre>
  </div>
</div>
</template>

<style lang="scss">
.card--library{
  margin-bottom:var(--gap);
  .arg-list{
    display:grid;
    grid-template-columns:auto 1fr;
    gap:var(--half-gap);
    place-items:start;
    p{
      grid-column-start: 2;
      margin:0;
    }
    span{
      grid-column: 1 / -1;
    }
  }
  h3,h4{
    margin-top:var(--gap);
    margin-bottom: var(--half-gap);
  }
  h5{
    margin-top:var(--half-gap);
    margin-bottom:var(--tiny-gap);
  }
  .arg-row{
    display:contents;
  }
  .return-row{
    span{
      grid-column: 1 / 2;
    }
  }
}
</style>
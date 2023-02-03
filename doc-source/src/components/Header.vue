<script setup>
import { ref } from 'vue';
import ToggleLabel from '@/components/ToggleLabel.vue'
const colorValue = ref('system');
const toggleColor = (event) => colorValue.value = event.newValue;
</script>

<template>
<header>
  <div class="flex align-items-end gap">
    <h1>The K-Scaffold</h1>
    <span class="subtitle">A Roll20 Sheet Framework</span>
  </div>
  <ToggleLabel @toggle-value="toggleColor" name="color" :values="['dark','system','light']" def="system">
    <span class="capitalize">{{ /system/i.test(colorValue) ? 'System Theme' : `${colorValue} mode` }}</span>
  </ToggleLabel>
  <nav id="main-nav">
    <ul>
      <li>
        <RouterLink to="/">About</RouterLink>
      </li>
      <li>
        <RouterLink to="/start">Getting Started</RouterLink>
      </li>
      <li>
        <RouterLink to="/gen">Build API</RouterLink>
      </li>
      <li>
        <RouterLink to="/pug">Pug Library</RouterLink>
      </li>
      <li>
        <RouterLink to="/sheetworkers">Sheetworker Library</RouterLink>
      </li>
      <li>
        <RouterLink to="/scss">Style Library</RouterLink>
      </li>
    </ul>
  </nav>
</header>
</template>

<style lang="scss">
header{
  background-color:blue;
  display:grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: repeat(2,auto);
  grid-template-areas:
    'header color'
    'nav    nav';
  padding:var(--gap);
  align-items:center;
  position:sticky;
  top:0px;
  font-family:Aldrich;
}
.toggle-label{
  justify-self:end;
}
nav{
  grid-area:nav;
  justify-self:end;
  a[aria-current="page"]{
    text-decoration: none;
    color:black;
  }
  ul{
    display:flex;
    margin:0;
    gap:var(--half-gap);
    > li{
      &::marker{
        content:'';
      }
    }
  }
}
</style>
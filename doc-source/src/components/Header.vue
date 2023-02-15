<script setup>
import { ref, onMounted } from 'vue';

import ToggleLabel from '@/components/ToggleLabel.vue'
import { useColorStore } from '@/stores/color'

const colors = useColorStore();
colors.storeColor();
</script>

<template>
<header ref="headEl">
  <div class="flex align-items-end gap">
    <h1>The K-Scaffold</h1>
    <span class="subtitle">A Roll20 Sheet Framework</span>
  </div>
  <ToggleLabel @toggle-value="colors.storeColor($event.newValue)" name="color" :values="['dark','system','light']" :def='colors.color'>
    <span class="capitalize">{{ /system/i.test(colors.color) ? 'System Theme' : `${colors.color} mode` }}</span>
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
  background-color:var(--secondary-back-color);
  color:var(--secondary-font-color);
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
  z-index:1000;
  .toggle-container{
    border-color:var(--secondary-font-color);
    input:checked:before{
      background-color:var(--secondary-font-color);
    }
  }
}
.toggle-label{
  justify-self:end;
}
nav{
  grid-area:nav;
  justify-self:end;
  a,
  a:visited{
    color:var(--primary-nav-color);
    &[aria-current="page"]{
      text-decoration: none;
      color:var(--secondary-nav-color);
    }
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
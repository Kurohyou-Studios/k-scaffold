<script setup>
import { ref, onMounted } from 'vue';


const footerEl = ref(null);

const updateOffset = ()=>
  document.documentElement.style.setProperty('--footerHeight',`${footerEl.value.offsetHeight}px`);
onMounted(updateOffset);
</script>

<template>
  <footer ref="footerEl" class="site-footer flex-box">
    <a href="https://discord.gg/vYmvFBZQsM" class="social-icon">discord</a>
    <a href="https://www.linkedin.com/in/scott-casey-20210398/" class="social-icon">linkedin</a>
    <div class="flex-box flex-column">
      <span>Scott Casey | Kurohyou Studios</span>
    </div>
    <a href="https://www.patreon.com/kurohyoustudios?fan_landing=true" class="social-icon">patreon</a>
    <a href="https://github.com/Kurohyou" class="social-icon">github</a>
    <a href="https://twitter.com/Kurohyoustudios" class="social-icon">twitter</a>
  </footer>
</template>

<style lang="scss">
.site-footer{
  background-color:var(--secondary-back-color);
  justify-content: center;
  gap:var(--gap);
  align-items:center;
  position:sticky;
  bottom:-1px;
  min-height:30px;
  box-shadow:var(--box-shadow-1);
  flex-wrap:wrap;
  padding:var(--gap);
  a{
    color:var(--secondary-nav-color);
    text-decoration:none;
  }
}
</style>
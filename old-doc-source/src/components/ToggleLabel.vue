<script setup>
import Toggle from './Toggle.vue'
const emit = defineEmits(['toggleValue']);
const props = defineProps(['values','def','name']);
const { values } = props;
console.log('label props',props);
</script>

<template>
<div class="toggle-label">
  <slot></slot>
  <Toggle @toggle-value="(event) => emit('toggleValue',event)" :values="values" :def="props.def" :name="props.name"></Toggle>
</div>
</template>

<style scoped lang="scss">
.toggle-label{
  display:inline-flex;
  align-items: center;
  gap:var(--half-gap);
}
</style>
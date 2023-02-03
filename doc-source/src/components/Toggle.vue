<script setup>
import { ref } from 'vue'
const emit = defineEmits(['toggleValue']);
const radios = ref([]);
const props = defineProps(['values','def','name']);
const { values } = props;
const clickHandler = (event) => {
  const checkedI = radios.value.findIndex(el => el.checked);
  let targetI = event.type === 'contextmenu' ?
    checkedI - 1 :
    (checkedI + 1) % values.length;

  targetI = targetI < 0 ?
    values.length - 1 :
    targetI;
  radios.value[checkedI].checked = false;
  radios.value[targetI].checked = true;
  emit('toggleValue',{
    newValue:radios.value[targetI].value,
    previousValue:radios.value[checkedI].value
  })
};

</script>

<template>
<button class="toggle-container" :style="`--elNum:${values.length}`" @click="clickHandler" @contextmenu.prevent="clickHandler">
  <input disabled :name="props.name" type="radio" class="toggle__radio" v-for="value in values" :key="`$toggle-${value}`" ref="radios" :value="value" :checked="props.def === value">
</button>
</template>

<style lang="scss" scoped>
  button{
    --radius:10px;
    --baseHeight:1.2rem;
    --shadowSize: calc( var(--baseHeight) / 4);
    --shadow:var(--shadowSize) var(--shadowSize) var(--shadowSize) rgb(0 0 0 / 0.2);
    --overlapSize:calc(var(--baseHeight) / 10 * -1);
    overflow:hidden;
    display:inline-flex;
    height:var(--baseHeight);
    border:1px solid black;
    border-radius:var(--radius);
    box-shadow: var(--shadow) inset;
    z-index:0;
    padding:0;
    cursor: pointer;
  }
  input{
    appearance:none;
    height:100%;
    aspect-ratio: 1 / 1;
    box-sizing: border-box;
    margin:0;
    pointer-events: none;
    isolation: isolate;
    display:flex;
    justify-content: center;
    &:first-child{
      justify-content: start;
    }
    &:last-child{
      justify-content: end;
    }
    &:checked{
      z-index:-1;
      &:before{
        background-color: black;
      box-shadow:var(--shadow);
      }
    }
    &:before{
      content:'';
      display:block;
      width: 100%;
      height:100%;
      border-radius:var(--radius);
    }
    &:not(:first-child):not(:last-child){
      margin-inline:var(--overlapSize);
    }
    &:last-child:nth-child(2){
      margin-left:var(--half-gap);
    }
  }
</style>
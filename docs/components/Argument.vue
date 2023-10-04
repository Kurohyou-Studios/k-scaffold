<script setup>

</script>

<template>
<div class="flex-align-start flex-box half-gap argument-line">
    <span>
      <slot name="name"></slot>
    </span>
    -
    <code>
      <slot name="type"></slot>
    </code>
    -
    <slot name="description"></slot>
</div>
</template>

<style>
.argument-line p{
  margin:0;
}
</style>
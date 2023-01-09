
<template>
  <button class="Button">
    <slot>Button </slot>
  </button>
</template>

<script>
export default {
  props: {
  
  }
}
</script>

  <style scoped>
   .Button{
    background-color: var(--travel-color-salmon-50);
    color: var(--travel-color-white);
    border-radius: 50%;
   }
  </style>
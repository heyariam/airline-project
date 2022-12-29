
<template>
  <button @click="onClick" class="Button">
    <slot>Button </slot>
  </button>
</template>

<script>
export default {
  props: {
    onClick: {
      type: Function,
      required: true
    }
  }
}
</script>

  <style scoped>
   .button{
    background-color: var(--travel-color-blue-500);
    color: var(--travel-color-white);
    border-radius: 50%;
   }
  </style>
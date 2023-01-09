<template>
  <div>
  
    <FormComp @submit="onSubmit" />

  </div>
</template>

<script>
import FormComp from '../components/FormComp.vue'

export default {
  name: 'Registration',
  components: {
  
    FormComp,

  }
}
</script>

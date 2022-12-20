<template>
  <div>
    <FormComp @submit="onSubmit">
      <div>
        <label for="email">Email:</label>
        <input id="email" type="email" v-model="email" />
      </div>
    </FormComp>
  </div>
</template>

<script>
import FormComp from './FormComp.vue'

export default {
  name: 'Registration',
  components: {
    FormComp
  },
  data() {
    return {
      email: ''
    }
  },
  methods: {
    onSubmit(formData) {
      console.log(formData)
    }
  }
}
</script>

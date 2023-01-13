<template>
  <v-parallax src="../assets/sky-back.jpg" class="background">
        <FormComp />
    </v-parallax>
</template>

<script>
import FormComp from '../components/FormComp.vue'

export default {
  name: 'Registration',
  components: {
    FormComp
  }
}
</script>

<template>
  <div>
    <NavBar />
    <FormComp @submit="onSubmit" />
    <Footer/>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import FormComp from '../components/FormComp.vue'

export default {
  name: 'Registration',
  components: {
    NavBar,
    FormComp,
    Footer
  }
}
</script>

<template>
 <v-app id="home" :style="{background: $vuetify.theme.themes.dark.background}">
    <Header />
      <Footer />
 </v-app>
</template>

<script>
import { defineComponent } from "vue";
import Header from "./components/comp/Header.vue";
import Footer from "./components/comp/Footer.vue";



export default defineComponent({
    name: "HomeView",
    components: {
      Header,
      Footer
    }
});
</script>

<style>

 *{
  margin: 0px;
  padding: 0px;
 }



</style>
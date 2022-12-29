<template>
  <v-app id="home">
      <NavBar />
     <!-- <herowrapper/>-->
     <FormCompVue />

    <Footer />
  </v-app>
</template>

<script>
import { defineComponent } from "vue";
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
//import Herowrapper from "../components/Herowrapper.vue";

import FormCompVue from "@/components/FormComp.vue";

// Components
//import HelloWorld from '../components/HelloWorld.vue';
export default defineComponent({
  name: "HomeView",
  setup() {
    return {

    };
  },
  components: {
    NavBar,
    FormCompVue, 
    //Herowrapper,
    Footer
},
});
</script>

<style>

 *{
  margin: 0px;
  padding: 0px;
 }

</style>
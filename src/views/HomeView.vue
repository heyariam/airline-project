<template>
  <v-app id="home">
      <NavBar />
    <v-container fluid class="main-cont">
      <div class="main-hero">
        <div class="container-wrap">
          <v-row>   
            <v-col cols="4">  
              <div>
                  <h1 class="text-grey">Aquí comienza tu aventura,</h1>
                  <h3 class="text-pink">Busca tu vuelo</h3>
              </div>
            </v-col>
            <v-col cols="8">
              <v-img src="../assets/tripbackground.jpg"></v-img>

            </v-col>
          </v-row>
        </div>
      </div>
    </v-container>
    <Footer />
  </v-app>
</template>

<script>
import { defineComponent } from "vue";
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";

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
    Footer
},
});
</script>

<style scoped>
 *{
  margin: 0px;
  padding: 0px;
 }
  .main-hero{
    background-color: "#FCF3CF";
  }
</style>
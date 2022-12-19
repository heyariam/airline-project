<template>
  <v-app id="home">
      <NavBar />
    <v-container fluid>
      <div class="main-hero">
        <v-row>
          <v-col>
            <div :style = "image">
                <div style="position: relative" class="mt-16">
                <h1 class="text-grey">Aquí comienza tu aventura,</h1>
                <h3 class="text-pink">Busca tu vuelo</h3>
                 </div>
            </div>

          </v-col>
        </v-row>
      </div>
    </v-container>
    <Footer />
  </v-app>
</template>

<script>
import { defineComponent } from "vue";
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import { url } from "inspector";
// Components
//import HelloWorld from '../components/HelloWorld.vue';
export default defineComponent({
  name: "HomeView",
  setup() {
    return {
      image: { backgroundImage: url("../assets/tripbackground.jpg")}
    };
  },
  components: {
    NavBar,
    Footer
},
});
</script>

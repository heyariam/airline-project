<template>
  <v-app>
    <v-main>
      <Header />
      <div id="app">
        <router-view />
      </div>
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import Header from "./components/comp/Header.vue";
import Footer from "./components/comp/Footer.vue";

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },

  data: () => ({
    //
  })
};

</script>

<style scoped>
main {
  background-color: var(--travel-color-blue-500);
}

#app {
  background-image: url("./assets/tripbackground.jpg");
  background-size: 100%;
  background-position: bottom;
  transition: 0.4s;
}
</style>

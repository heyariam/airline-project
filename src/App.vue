<template>
  <v-app flat max-height="65">
      <v-main>
        <Header />
        <router-view/>
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

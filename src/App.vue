<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Button from "./components/UI/Button.vue";
import Homeview from "./views/HomeView.vue";

export default {
  name: 'App',
  components: {
    Homeview,
    'v-btn': Button
  }
}


</script>

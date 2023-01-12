<template>
  <v-app>
    <v-parallax src="../assets/sky-back.jpg" class="background">
      <v-container fluid class="section">

          <SearchWrapper />

      </v-container>
    </v-parallax>
  </v-app>
</template>
 

<script>
import { defineComponent } from "vue";

import SearchWrapper from "./SearchWrapper.vue";


export default defineComponent({
  name: "HomeView",
  components: {
    SearchWrapper,
  }
});
</script>


<!-- CSS STYLES GOES HERE -->

<style scoped>
.top {
  margin-top: 2rem;
}
</style>

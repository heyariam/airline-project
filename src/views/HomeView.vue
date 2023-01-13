<template>
    <v-parallax src="../assets/sky-back.jpg" class="background">
          <SearchWrapper />
    </v-parallax>
</template>
 

<script>
import SearchWrapper from "./SearchWrapper.vue";


export default({
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

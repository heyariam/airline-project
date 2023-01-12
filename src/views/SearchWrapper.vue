<template>
    <div id="app" class="main-hero" :height="height">
      <div class="container-wrap">
        <v-row>
                <SearchInput/>
      
        </v-row>
      </div>
    </div>
</template>

<script>
import "@fortawesome/vue-fontawesome";
import SearchInput from "../components/SearchInput.vue";

export default{
  components: {
    SearchInput
  },
  computed: {
      height () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return 220
          case 'sm': return 400
          case 'md': return 500
          case 'lg': return 600
          case 'xl': return 800
        }
      },
}
}
</script>

<style>
 *{
  margin: 0px;
  padding: 0px;
 }



</style>
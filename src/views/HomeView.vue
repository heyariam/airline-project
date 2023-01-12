<template>
 <v-app id="home" :style="{background: $vuetify.theme.themes.dark.background}">

 </v-app>
</template>

<script>
import { defineComponent } from "vue";
import SearchWrapper from "./SearchWrapper.vue";



export default defineComponent({
    name: "HomeView",
    components: SearchWrapper,
  
});
</script>

<style>

 *{
  margin: 0px;
  padding: 0px;
 }



</style>
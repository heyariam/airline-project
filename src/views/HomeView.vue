<template>
  <div >
    <SearchWrapper/>
  </div>
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
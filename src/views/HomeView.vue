<template>
  <div>

      <Register />

  </div>
</template>

<script>
import { defineComponent } from "vue";
import Register from "../views/Register.vue"



export default defineComponent({
  name: "HomeView",
  components: {
    Register,


}

});
</script>

<style>

 *{
  margin: 0px;
  padding: 0px;
 }

</style>
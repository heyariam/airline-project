<template>
  <div>
      <NavBar />
      <Table />
    <Footer />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import Herowrapper from "./Herowrapper.vue";
//import Register from "@/views/Register.vue";
import Table from "../components/Table.vue";


export default defineComponent({
  name: "HomeView",
  components: {
    NavBar,
    Table,
    Footer,
   
}

});
</script>

<style>

 *{
  margin: 0px;
  padding: 0px;
 }

</style>
<template>
  <v-container >
    <v-row>
    <v-col>
             <SearchInput/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import "@fortawesome/vue-fontawesome";
import SearchInput from "../components/SearchInput.vue";

export default{
  components: {
    SearchInput
  },
}

</script>

<style>
 *{
  margin: 0px;
  padding: 0px;
 }


</style>
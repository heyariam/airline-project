<template>
    <div class="main-hero" max-height="100%" max-width="100%">
      <div class="container-wrap">
        <v-row>
          <v-col cols="12">
            <v-card class="mx-auto rounded-xl" flat>
              <v-img src="../assets/tripbackground.jpg" max-height="100%" max-width="100%" contain>
                <SearchInput/>
              </v-img>
            </v-card>
          </v-col>
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
  }
}
</script>

<style>
 *{
  margin: 0px;
  padding: 0px;
 }
  .main-hero{
    background-color: #f5c66f;
  }


</style>
<template>
  <v-container fluid class="main-cont">
    <div class="main-hero" max-height="100%" max-width="100%">
      <div class="container-wrap">
        <v-row>
          <v-col cols="12">
            <v-card class="mx-auto rounded-xl" flat>
              <v-img src="../assets/tripbackground.jpg" max-height="100%" max-width="100%" contain>
                <v-row align="center" justify="center" style="height:100%" dense>
                  <v-col class="glassmorph d-flex flex-column justify-center align-center" cols="12" lg="10" md="10">
                    <v-card-title class="top ml-10">
                       <h2 class="title1">Aquí inicia tu nueva aventura</h2>
                    </v-card-title>
                    <v-card-title class="top ml-10">
                       <h4 class="title1">#VuelaconTekton</h4>
                    </v-card-title>
                    <v-card-text>
                      <v-row>
                        <v-col cols="10" class="card-glass">
                          <SearchInput/>

                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-col>
                </v-row>
              </v-img>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </div>
  </v-container>
  
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
  .main-hero{
    background-color: #f5c66f;
  }

  .glassmorph{
    background: rgba(255, 255, 255, 0.19);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5.2px);
    -webkit-backdrop-filter: blur(5.2px);
  }

 
</style>
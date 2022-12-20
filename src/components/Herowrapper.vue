<template>
   <v-container fluid class="main-cont">
      <div class="main-hero">
        <div class="container-wrap">
          <v-row>   
            <v-col cols="12">  
              <v-card class="mx-auto rounded-xl" flat>
                <v-img src="../assets/tripbackground.jpg" max-height="100%" max-width="100%" contain>
                  <v-card>
                    <v-card-title class="top ml-10">
                        <h2 class="title1">Aquí inicia</h2>
                    </v-card-title>
                    <v-card-title class="ml-10 mt-n8">
                        <h2 class="title2">tu nueva aventura</h2>
                    </v-card-title>
                    <v-card-text class="ml-10">
                      <h3 class="white--text">#VuelaconTekton</h3>
                    </v-card-text>
                      <v-card-text class="ml-10">
                        <v-row>
                          <v-col cols="4">
                            <v-text-field
                              label="Search your daily groceries"
                              class="d-none d-sm-none d-md-flex"
                              filled
                              prepend-inner-icon="mdi-magnify"
                              solo
                              flat
                              background-color=""
                              rounded
                              outlined
                              success
                            ></v-text-field>
                          </v-col>
                          <v-col cols="2" class="marginLeft">
                            <v-btn
                              color="green"
                              rounded
                              dark
                              x-large
                              class="py-7 d-none d-sm-none d-md-flex"
                            >
                              search
                            </v-btn>
                          </v-col>
                        </v-row>
                      </v-card-text>
                    </v-card>
                    </v-img>
                  </v-card>
      </v-col>
      </v-row>
        </div>
      </div>
    </v-container>
</template>

<script>

export default{
  
}
</script>

<style>
  .main-hero{
    background-color: #0193c7;
  }
</style>
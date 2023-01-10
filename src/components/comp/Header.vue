<!--<template>
    <v-app-bar
      app
      color= "#4285f4"
      flat
      class="px-12"
    >
    <div>
      <h2><span>Tekton</span> Airlines </h2>
      
    </div>

      <v-tabs
        centered
        class="ml-n9"
        color="grey darken-1"
      >
      
        <v-tab v-for="link in links"
          :key="link">
          {{ link }}
        </v-tab>
      </v-tabs>
  
    </v-app-bar>

</template>-->

<template>
  <v-container>
    <div class="container">
    <v-toolba-title>Tekton Airlines</v-toolba-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn text><router-link to="/">Home</router-link></v-btn>
      <v-btn text><router-link to="/about">About</router-link></v-btn>
      <v-btn text><router-link to="/contact">Contact</router-link></v-btn>
    </v-toolbar-items>
    <div class="hidden-sm-and-up">
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-app-bar-nav-icon v-on="on"></v-app-bar-nav-icon>
          </template>
          <v-list class="responsiveMenu">
            <v-list-item>
              <v-list-item-title><router-link to="/">Inicio</router-link></v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title><router-link to="/about">Busca tu vuelo</router-link></v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title><router-link to="/contact">Contacto</router-link></v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </div>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      links: [
        'Inicio',
        'Busca tu vuelo',
        'Contáctanos',
      ],
    }),
  }
</script>


<style scoped>

.container{
  background-color: var(--travel-color-blue-500);
}

</style>

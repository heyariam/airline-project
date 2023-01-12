<template>
  <v-app-bar app color="#4285f4" dark flat class="px-8">
    <v-toolbar flat class="mainHeader" color="#4285f4">
    <v-toolbar-title>Tekton Airlines</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-xs-only">
      <v-btn text><router-link to="/">Inicio</router-link></v-btn>
      <v-btn text><router-link to="/*">Contacto</router-link></v-btn>
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
              <v-list-item-title><router-link to="/contact">Contacto</router-link></v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-toolbar>
  </v-app-bar>
</template>

<script>
  export default {
    data: () => ({
      
    }),
  }
</script>


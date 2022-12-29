<template>
    <v-app-bar
      app
      color= "#f5c66f"
      flat
      class="px-12"
    >
    <div>
      <v-icon left class="mr-2"> fa-plane </v-icon>
      <span>Tekton</span> Airlines 
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

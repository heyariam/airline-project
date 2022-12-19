<template>
    <v-app-bar
      app
      color="#FCF3CF"
      flat
      class="px-12"
    >
    <v-btn>
    <v-icon
        color="green"
        left 
        class="mr-2"
      > fa-light fa-plane </v-icon>
      <span>Tekton</span> Airlines 
    </v-btn>

      <v-tabs
        centered
        class="ml-n9"
        color="grey darken-1"
      >
        <v-tab
          v-for="link in links"
          :key="link"
        >
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
        'Blog',
        'Contáctanos',
      ],
    }),
  }
</script>

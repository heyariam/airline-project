<template>
    <v-app-bar
      app
      color="#FCF3CF"
      flat
    >
    <v-logo
        class="logo"
        size="32"
      > <span>Tekton</span> Airlines </v-logo>

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

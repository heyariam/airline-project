<template>
   <v-parallax src="../assets/sky-back.jpg" class="background">
    <v-content>
    <v-container>
      <div class="block text-center notFound">
        <h1>¡Página no encontrada! </h1>
        <h2>Por favor ve al inicio </h2>
      </div><br/>
      <div class="text-center">
        <v-btn color="error" @click="navigateToPage">Volver al inicio </v-btn>
      </div>
    </v-container>
  </v-content>
    </v-parallax>
</template>

<script>
export default {
  name: "NotFound",

  data() {
    return {
      items: []
    };
  },
    methods: {
      navigateToPage() {
            this.$router.push({ path: '/inicio' })
        }
}

  }
 
</script>
<template>
  <v-content>
    <v-container>
      <div class="block text-center notFound">
        <h2>¡Página no encontrada! </h2>
        <i class="fas fa-exclamation-triangle red--text"></i>
        <p>Por favor ve al inicio </p>
      </div>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: "NotFound",

  data() {
    return {
      items: []
    };
  }
};
</script>
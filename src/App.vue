<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Card from "./components/UI/Card.vue";
import Button from "./components/UI/Button.vue";


export default {
  name: 'App',
  components: {
    Card,
    'v-button': Button
  }
}
</script>

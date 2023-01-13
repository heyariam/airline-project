<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="290"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Guardar información
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="text-h5">
          ¿Desea guardar la información?
        </v-card-title>
        <v-card-text></v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Cancelar
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="navigateToPage"
          >
            Aceptar
          </v-btn>
        
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  export default {
    name: "DialogCard",
    data () {
      return {
        dialog: false,
      }
    }, methods: {
      navigateToPage() {
            this.$router.push({ path: '/inicio' })
        }
}

  }
</script>
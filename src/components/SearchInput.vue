<template>
  <v-form>
    <v-text-field v-model="desde" label="Desde" />
    <v-text-field v-model="hacia" label="Hacia" />
    <v-text-field v-model="salida" label="Fecha salida" />
    <v-text-field v-model="retorno" label="Fecha retorno" />
    <v-btn @click="search">Buscar vuelos</v-btn>
  </v-form>
</template>

<script>
export default {
  props: {
    desde: {
      type: String,
      default: ''
    },
    hacia: {
      type: String,
      default: ''
    },
    salida: {
      type: Date,
      default: ''
    },
    retorno: {
      type: Date,
      default: ''
    }
  },
  methods: {
    search() {
      this.$emit('search', {
        desde: this.desde,
        hacia: this.hacia,
        salida: this.salida,
        retorno: this.retorno
      })
    }
  }
}
</script>

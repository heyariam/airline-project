<template>
  <v-form>
    <v-text-field v-model="field1" label="Desde" />
    <v-text-field v-model="field2" label="Hacia" />
    <v-text-field v-model="field3" label="Salida" />
    <v-text-field v-model="field4" label="Retorno" />
    <v-btn @click="search">Buscar</v-btn>
  </v-form>
</template>

<script>
export default {
  props: {
    field1: {
      type: String,
      default: ''
    },
    field2: {
      type: String,
      default: ''
    },
    field3: {
      type: Date,
      default: ''
    },
    field4: {
      type: Date,
      default: ''
    }
  },
  methods: {
    search() {
      this.$emit('search', {
        field1: this.field1,
        field2: this.field2,
        field3: this.field3,
        field4: this.field4
      })
    }
  }
}
</script>

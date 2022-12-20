<template>
  <v-card class="glassmorph">
    <v-card-title>Aquí comienza tu aventura</v-card-title><br/>
    <h4 class="title1">#VuelaconTekton</h4>
    <v-card-text>
    <v-form class="searchbox">
      <v-text-field v-model="desde" label="Desde" />
      <v-text-field v-model="hacia" label="Hacia" />
      <v-text-field v-model="salida" label="Fecha salida" />
      <v-text-field v-model="retorno" label="Fecha retorno" />
      <v-btn @click="search">Buscar vuelos</v-btn>
    </v-form>
    </v-card-text>
  </v-card>
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


<style>
  .searchbox{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content:space-around;
    gap: 2rem;
    margin: 2rem;
    padding: 1rem;
  }

  .glassmorph{
      background: rgba(255, 255, 255, 0.19);
      border-radius: 16px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(5.2px);
      -webkit-backdrop-filter: blur(5.2px);
    }

</style>
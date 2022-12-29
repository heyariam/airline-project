<template>
  <v-row align="center" justify="center" style="height:100%" dense>
    <v-col class="glassmorph d-flex flex-column justify-center align-center" cols="12" lg="10" md="10">
        <v-card-title class="card-title">Aquí comienza tu aventura</v-card-title>
        <v-card-text>
          <v-form class="searchbox">
            <v-text-field v-model="desde" label="Desde" />
            <v-text-field v-model="hacia" label="Hacia" />
            <v-text-field v-model="salida" label="Fecha salida" />
            <v-text-field v-model="retorno" label="Fecha retorno" />
            <v-btn
            @click="navigateToPage"
            rounded
            color="error">
            Buscar vuelos</v-btn>
          </v-form>
        </v-card-text>
    </v-col>
  </v-row>
</template>

<script>
import { routerLink } from 'vue-router'


export default {
  components: {
    routerLink
  },
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
    methods: {
    navigateToPage() {
      // Navigate to the specified path
      this.$router.push()
    }
  }
  }
}
</script>


<style>
@import '../style/Global.css';

  .searchbox{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content:space-around;
    gap: 2rem;
    margin: 2rem;
  }

  .glassmorph{
      background: var(--travel-color-glassmorph);
      border-radius: 16px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(5.2px);
      -webkit-backdrop-filter: blur(5.2px);
    }

  .v-card-title{
    margin-top:1rem;

  }

</style>
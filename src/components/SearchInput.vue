<template>
  <v-main>
    <v-row align="center" justify="center" style="height:100%" dense>
      <v-col class="glassmorph" cols="12" lg="10" md="10" sm="6">
        <v-card-title class="card-title">Aquí comienza tu aventura</v-card-title>
        <v-form class="searchbox">
          <div>
            <v-select :items="items" label="Desde"></v-select>
          </div>
          <div>
            <v-select :items="items" label="Hacia"></v-select>
          </div>
          <!--Fecha salida-->
          <div class="d-flex justify-center mt-2">
            <v-col cols="12">
              <v-menu v-model="menu2" :close-on-content-click="false" :nudge-right="40" transition="scale-transition"
                offset-y min-width="auto">
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field v-model="date" label="Fecha salida" prepend-icon="mdi-calendar" readonly v-bind="attrs"
                    v-on="on"></v-text-field>
                </template>
                <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
              </v-menu>
            </v-col>
          </div>
          <!--Fecha salida-->
          <div class="d-flex justify-center mt-2">
            <v-col cols="12">
              <v-menu v-model="menu2" :close-on-content-click="false" :nudge-right="40" transition="scale-transition"
                offset-y min-width="auto">
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field v-model="date" label="Fecha retorno" prepend-icon="mdi-calendar" readonly v-bind="attrs"
                    v-on="on"></v-text-field>
                </template>
                <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
              </v-menu>
            </v-col>
          </div>
          <div>
            <v-btn @click="navigateToPage" rounded>
              Registrar</v-btn>
          </div>

        </v-form>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>


export default {

  data: () => ({
    dates: "",
    items: ["Lima", "Arequipa", "Cajamarca", "Cusco", "Trujillo", "Piura", "Tacna", "Tarapoto", "Juliaca"],
  }),
  methods: {
    navigateToPage() {
      this.$router.push({ path: '/registro' })
    }
  },
  computed: {
    dateRangeText() {
      return this.dates.join(' ~ ')
    },
  }
}



</script>


<style>
@import '../style/Global.css';

.searchbox {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: space-around;
  gap: 2rem;
  margin: 2rem;

}

.glassmorph {
  background: var(--travel-color-glassmorph);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5.2px);
  -webkit-backdrop-filter: blur(5.2px);
}

.v-card-title {
  margin-top: 1rem;
}
</style>
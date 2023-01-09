<template>
  <v-row align="center" justify="center" style="height:100%" dense>
    <v-col class="glassmorph d-flex flex-column justify-center align-center" cols="12" lg="10" md="10">
        <v-card-title class="card-title">Aquí comienza tu aventura</v-card-title>
        <v-card-text>
          <v-form class="searchbox">
            <v-select :items="items" label="Desde">{{items}}</v-select>
            <v-select :items="items" label="Hacia"></v-select>
       
                  <v-menu
                    v-model="fromDateMenu"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    lazy
                    transition="scale-transition"
                    offset-y
                    full-width
                    max-width="290px"
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        label="Fecha salida"
                        readonly
                        :value="fromDateDisp"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      locale="en-in"
                      :min="minDate"
                      :max="maxDate"
                      v-model="fromDateVal"
                      no-title
                      @input="fromDateMenu = false"
                    ></v-date-picker>
                  </v-menu>
                  <v-menu
                    v-model="toDateMenu"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    lazy
                    transition="scale-transition"
                    offset-y
                    full-width
                    max-width="290px"
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        label="Fecha retorno"
                        readonly
                        :value="toDateDisp"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      locale="en-in"
                      :min="minDate"
                      :max="maxDate"
                      v-model="toDateVal"
                      no-title
                      @input="toDateMenu = false"
                    ></v-date-picker>
                  </v-menu>

     
          <v-btn
            @click="navigateToPage"
            rounded>
            Registrar</v-btn>
          </v-form>
        </v-card-text>
    </v-col>
  </v-row>
</template>

<script>

export default { 
    data: () => (
      {
      items: ["Lima", "Arequipa", "Cajamarca", "Cusco", "Trujillo", "Piura", "Tacna", "Tarapoto", "Juliaca"]
      },
      {
        fromDateMenu: false,
        fromDateVal: null,
        minDate: "2020-01-05",
        maxDate: "2019-08-30"
      },
      {
        toDateMenu: false,
        toDateVal: null,
        minDate: "2020-01-05",
        maxDate: "2019-08-30"
      }
   ),
  computed: {
    fromDateDisp() {
      return this.fromDateVal;
    },
    toDateDisp(){
      return this.toDateVal;
    },
  },
    methods: {
    navigateToPage() {
      this.$router.push({ path: '/registro'})
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
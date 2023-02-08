<template>
  <div v-show="show">
    <v-divider></v-divider>
    <v-card>
      <table class="w-full text-sm text-center text-gray-500">
        <thead>
          <h4>Datos pasajeros</h4>
        </thead>
        <tbody>
          <tr class="bg white border-b dark:bg-gray-800 dark:border-gray-700" v-for="data in passengerData"
            :key="data.id">
            <th class="py-4 px-6">{{ data.name }}</th>
            <th class="py-4 px-6">{{ data.lastname }}</th>
            <th class="py-4 px-6">{{ data.nationality }}</th>
            <th class="py-4 px-6">{{ data.doctype }}</th>
            <th class="py-4 px-6">{{ data.docnumber }}</th>

            <td>
              <div>
                <v-btn class="button_styled" @click="getData(data.id)"> Editar
                </v-btn>
              </div>
              <div>
                <v-btn class="button_styled" @click="deleteData(data.id)"> Eliminar
                </v-btn>
              </div>

            </td>
          </tr>
        </tbody>
      </table><br>
      <div>
        <DialogCard />
      </div>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {

    }
  },
  mounted() {
    this.getpassengerData();
  },
  methods: {
    deleteData(id) {
      var index = this.passengerData.findIndex((data) => data.id == id)
      this.passengerData.splice(index, 1)
    },
    getpassengerData(){
      axios.get("http://localhost:3000/api/datos");
    }
  },

}
</script>

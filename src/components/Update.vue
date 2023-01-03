<template>
  <div>
    <div class="overflow-x-auto relative sm:rounded-lg"> 
            <table class="w-full text-sm text-center text-gray-500 dark:text-gray-400">
                <thead> 
                    <h4>Datos pasajeros</h4>
                </thead>
                    <tbody>
                        <tr class="bg white border-b dark:bg-gray-800 dark:border-gray-700" v-for="data in passengerData" :key="data.id">
                            <th class="py-4 px-6">{{data.name}}</th>
                            <th class="py-4 px-6">{{data.lastname}}</th>
                            <th class="py-4 px-6">{{data.nationality}}</th>
                            <th class="py-4 px-6">{{data.doctype}}</th>
                            <th class="py-4 px-6">{{data.docnumber}}</th>
                       
                        <td>
                            <div> 
                                <v-btn @click="getData(data.id)"> Editar </v-btn>
                            </div>
                            <div> 
                                <v-btn @click="deleteData(data.id)"> Eliminar </v-btn>
                            </div>
                        </td>
                    </tr>
                    </tbody>
            </table>
      </div>

        <div> 
            <v-btn>Guardar información</v-btn>
        </div>

    </div>
</template>


<script>
export default{
  name: "Update",
  data(){
    return{
        items: ['DNI', 'C.E', 'Pasaporte'],
        id: "",
        name: "",
        lastname: "",
        nationality: "",
        doctype: "",
        docnumber: "",
        haveID:null,

  }
}
}
</script>

<template>
    <div>
        <h4 class="text-2xl font-bold text-center-py-2">Ingresar datos</h4>
        <div class="flex-justify-center items-end-space-x-3"> 
            <div> 
                <v-text-field v-model="name" label="Nombre" required></v-text-field>
            </div>
            <div> 
                <v-text-field v-model="lastname" label="Apellido" required></v-text-field>
            </div>
            <div> 
                <v-text-field v-model="nationality" label="Nacionalidad" required></v-text-field>
            </div>
            <div> 
                <v-select :items="items" v-model="doctype" label="Tipo de documento">{{items}}</v-select>
            </div>
            <div> 
                <v-text-field v-model="docnumber" label="Número de documento" required></v-text-field>
            </div>
            <div> 
                <v-btn @click="saveData()"> Agregar </v-btn>
            </div>
        </div>
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
                                <v-btn @click="getData()"> Editar </v-btn>
                            </div>
                            <div> 
                                <v-btn> Eliminar </v-btn>
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
    data(){
        return{
        items: ['DNI', 'C.E', 'Pasaporte'],
        id: "",
        name: "",
        lastname: "",
        nationality: "",
        doctype: "",
        docnumber: "",
        haveID:false,

        passengerData:[
            {
                id: "1",
                name: "Arianna",
                lastname: "Avalos",
                nationality: "Peruana",
                doctype: "DNI",
                docnumber: "123456",
            }
        ]
}
    },
    methods: {
        getData(id){
        var dataPass = this.passengerData.filter((data =>(data.id == id)))
        this.name = dataPass[0].name
        this.lastname = dataPass[0].lastname
        this.nationality = dataPass[0].nationality
        this.doctype = dataPass[0].doctype
        this.docnumber = dataPass[0].docnumber

        },
        saveData(){
            const id= this.passengerData.length + 1
            const data = {
                id: id,
                name: this.name,
                lastname: this.lastname,
                nationality: this.nationality,
                doctype: this.doctype,
                docnumber: this.docnumber,
            }
        this.passengerData.push(data);
        console.log(this.passengerData)
        }
    }
    }



</script>

<style scoped>
 *{
    margin: 0px;
    padding: 0px;
 }
 .maincontainer{
    width: 100%;
 }
 .cardcontent{
    display: flex;
    flex-direction: column;
    justify-content: center;
 }
</style>
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
                <v-text-field v-model="numdoc" label="Número de documento" required></v-text-field>
            </div>
            <div> 
                <v-btn @click="saveData"> Agregar </v-btn>
            </div>
        </div>
        <div class="overflow-x-auto relative sm:rounded-lg"> 
            <table class="w-full text-sm text-center text-gray-500 dark:text-gray-400">
                <thread> 
                    <h4>Datos pasajeros</h4>
                </thread>
                    <tbody>
                        <tr class="bg white border-b dark:bg-gray-800 dark:border-gray-700" v-for="data in passengerData" :key="data.id">
                            <th class="py-4 px-6">{{data.name}}</th>
                            <th class="py-4 px-6">{{data.lastname}}</th>
                            <th class="py-4 px-6">{{data.nationality}}</th>
                            <th class="py-4 px-6">{{data.doctype}}</th>
                            <th class="py-4 px-6">{{data.numdoc}}</th>
                       
                        <td>
                            <div> 
                                <v-btn> Editar </v-btn>
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
        name: "",
        lastname: "",
        nationality: "",
        doctype: "",
        docnumber: "",

        passengerData:[
            {
                id: "1",
                name: "Arianna",
                lastname: "Avalos",
                nationality: "Peruana",
                doctype: "DNI",
                numdoc: "123456",
            }
        ]
}
    },
    methods: {
        getData(id){
            var dataPass = this.passengerData.filter((data) => (data.id == id))
            //assign to input
            this.name = dataPass[0].name
            this.lastname = dataPass[0].lastname
            this.nationality = dataPass[0].nationality
            this.doctype = dataPass[0].doctype
            this.numdoc = dataPass[0].numdoc
        },
        saveData(haveID){
            if(haveID){
                var dataPass = this.passengerData.filter((data) => (data.id == id))
                dataPass[0].numdoc
                dataPass[0].name = this.name
                dataPass[0].lastname = this.lastname 
                dataPass[0].nationality = this.nationality
                dataPass[0].doctype = this.doctype
                dataPass[0].numdoc = this.numdoc
            } else {
                //ADD DATA
            const id= this.passengerData.length + 1
            const data = {
                id: id,
                name: this.name,
                lastname: this.lastname,
                nationality: this.nationality,
                doctype: this.doctype,
                numdoc: this.numdoc,
            }
        this.passengerData.push(data)
        }
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
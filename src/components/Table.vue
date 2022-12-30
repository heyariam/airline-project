<template>
   <div class="maincontainer">
    <div class="cardcontent items-end-space-x-3">
        <h4 class="text-2xl font-bold text-center-py-2">Ingresar datos</h4>
        <div class="flex-justify-center items-end-space-x-3"> 
            <div> 
                <v-text-field ref="name" v-model="name" label="Nombre" required></v-text-field>
            </div>
            <div> 
                <v-text-field ref="lastname" v-model="lastname" label="Apellido" required></v-text-field>
            </div>
            <div> 
                <v-text-field ref="nationality" v-model="name" label="Nacionalidad" required></v-text-field>
            </div>
            <div> 
                <v-select :items="items" label="Tipo de documento">{{items}}</v-select>
            </div>
            <div> 
                <v-text-field ref="numdoc" v-model="name" label="Número de documento" required></v-text-field>
            </div>
            <div> 
                <v-btn> Agregar </v-btn>
            </div>
        </div>
        <div class="overflow-x-auto relative sm:rounded-lg"> 
            <table class="w-full text-sm text-center text-gray-500 dark:text-gray-400">
                <thread> 
                    <h4>Datos pasajeros</h4>
                </thread>
                    <tbody>
                        <tr class="bg white border-b dark:bg-gray-800 dark:border-gray-700">
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
</div>
</template>

<script>

export default{
    data(){
    return{
    items: ['DNI', 'C.E', 'Pasaporte'],
    passengerData:[
        {
            id: "",
            name: "",
            lastname: "",
            nationality: "",
            doctype: "",
            numdoc: "",
        }
    ]
}
    },
    methods: {
        getData(id){
            var dataPass = this.passengerData.filter((data) => (data.id == id))
            //
            this.name = dataPass.name
            this.lastname = dataPass.lastname
            this.nationality = dataPass.nationality
            this.doctype = dataPass.doctype
            this.numdoc = dataPass.numdoc
        },
        saveData(){
            const id= this.passengerData.lenght + 1
            const data = {
                id: id,
                name: this.name,
                lastname: this.lastname,
                nationality: this.nationality,
                doctype: this.doctype,
                numdoc: this.numdoc,
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
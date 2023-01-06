<template>
           <div class = "formulario" id="formulario">
            <!--Título-->
            <h4 class="text-2xl font-bold text-center-py-2">Ingresar datos</h4>
                <!--Grupo Formulario-->
            <div class="flex-justify-center items-end-space-x-3"> 
                <!--Grupo: Nombre-->
                <div class="formulario__grupo" id="grupo__name">
                    <div class="formulario__grupo-input"> 
                        <v-text-field class="input" v-model="name" label="Nombre" required></v-text-field>
                        <i class="formulario__validacion-estado fas fa-times-circle"></i>
                    </div>
                    <p class="formulario__input-error">El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo.</p>
                 </div>
                 <!--Grupo: Apellido-->
                 <div class="formulario__grupo" id="grupo__lastname">
                        <div class="formulario__grupo-input"> 
                            <v-text-field class="input" v-model="lastname" label="Apellido" required></v-text-field>
                            <i class="formulario__validacion-estado fas fa-times-circle"></i>
                        </div>
                        <p class="formulario__input-error">El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo.</p>
                </div>
                 <!--Grupo: Nacionalidad-->
                 <div class="formulario__grupo" id="grupo__nationality">
                    <div class="formulario__grupo-input"> 
                        <v-text-field class="input" v-model="nationality" label="Nacionalidad" required></v-text-field>
                        <i class="formulario__validacion-estado fas fa-times-circle"></i>
                    </div>
                    <p class="formulario__input-error">El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo.</p>
                </div>   
                 <!--Grupo: Tipo de documento-->
                <div class="formulario__grupo-input"> 
                    <v-select :items="items" class="input" v-model="doctype" label="Tipo de documento">{{items}}</v-select>
                </div>
                 <!--Grupo: Numero documento-->
                 <div class="formulario__grupo" id="grupo__docnumber">
                    <div class="formulario__grupo-input"> 
                        <v-text-field class="input" v-model="docnumber" label="Número de documento" required></v-text-field>
                    </div>
                    <p class="formulario__input-error">La contraseña tiene que ser de 4 a 12 dígitos.</p>
                </div>
                 <!--Grupo: Button-->
                <div> 
                    <v-btn @click="saveData(haveID)"> Agregar </v-btn>
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
        passengerData:[
            {
            "id": "1",
            "name": "Arianna",
            "lastname": "Avalos",
            "nationality": "Peruana",
            "doctype": "DNI",
            "docnumber": "1234567"
            },
  ]

     }
},
    methods: {
        getData(id){
            this.haveID = true 
            var dataPass = this.passengerData.filter((data =>(data.id == id)))
            //assign to input
            this.name = dataPass[0].name
            this.lastname = dataPass[0].lastname
            this.nationality = dataPass[0].nationality
            this.doctype = dataPass[0].doctype
            this.docnumber = dataPass[0].docnumber

        },
        saveData(haveID){
            //update
            if(haveID){
                var dataPass = this.passengerData.filter((data =>(data.id == haveID)))
                dataPass[0].name = this.name
                dataPass[0].lastname = this.lastname
                dataPass[0].nationality = this.nationality
                dataPass[0].doctype = this.doctype
                dataPass[0].docnumber = this.docnumber
            }else {
                // save
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
            }
            
        },
        deleteData(id){
         var index = this.passengerData.findIndex((data) => data.id == id)
         this.passengerData.splice(index, 1)
        },
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
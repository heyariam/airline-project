<template>
           <div class="info_container spacing-playground pa-6">
            <div class="inputs_card">
                <!--Título-->
                <h4 class="font-weight-bold text-center pa-2">Ingresar datos</h4>
                    <!--Grupo Formulario-->
                <div> 
                    <!--Grupo: Nombre-->
                    <div>
                        <v-text-field v-model="name" label="Nombre" 
                        :rules="validateName" ></v-text-field>
                 </div><br/>
                 <!--Grupo: Apellido-->
                 <div>
                            <v-text-field v-model="lastname" label="Apellido"
                            :rules="validateLastName" > </v-text-field>
                </div><br/>
                 <!--Grupo: Nacionalidad-->
                 <div>
                        <v-text-field v-model="nationality" label="Nacionalidad"
                        :rules="validateNationality"> </v-text-field>
                </div>   <br/>
                 <!--Grupo: Tipo de documento-->
                <div> 
                    <!--<v-select :items="items" v-model="doctype" label="Tipo de documento"
                    >{{items}}</v-select>-->
                    <v-select
                        v-model="doctype"
                        :items="items"
                        item-text="document"
                        label="Tipo de documento"
                        return-object
                        single-line
                        :rules="validateDocument"
                        > {{items}}
                    </v-select>
                   
                  
                </div>
           <br/>
                 <!--Grupo: Numero documento-->
                 <div>

                        <v-text-field v-model="docnumber" label="Número de documento" :rules="validateDocNumber" ></v-text-field>

                </div><br/>
                 <!--Grupo: Button-->
                <div>
                    <v-card-actions>
                        <v-btn text @click="navigateToPage">
                            Cancelar
                        </v-btn>
                        <v-spacer></v-spacer>
        
                                <v-btn @click="clear">
                                    Limpiar
                                </v-btn>
    
                        <v-btn 
                        color="primary"
                        text
                        @click="saveData(haveID)"> Agregar </v-btn>
                
                    </v-card-actions>
                </div>
        </div>
        </div>
        <div class="usersdata_card">
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
    </div>
</template>

<script>

/* REGEX
    name: /^([ a-zA-Z0-9\sÁÉÍÓÚáéíóúÑñ]+)$/
    lastname: /^([ a-zA-Z0-9\sÁÉÍÓÚáéíóúÑñ]+)$/
    nationality: [A-Za-z]
    docnumber: /[A-Za-z0-9]+/i
*/

export default{
    data() {
        return{
                items: [
                { document: 'DNI', regex: /^([0-9]+)$/ , maxLength: 8 },
                { document: 'Pasaporte', regex: /^([0-9]+)$/, maxLength: 9  },
                { document: 'C.E', regex: /^([a-zA-Z]+)$/, maxLength: 9 }
                ],
        valid: true,
        id: "",
        name: "",
        validateName: [
        v => !!v || 'Obligatorio',
        v => /^([ a-zA-Z\sÁÉÍÓÚáéíóúÑñ]+)$/.test(v) || 'Ingresa un dato válido (solo letras y espacios permitidos)',
      ],
        lastname: "",
        validateLastName: [
        v => !!v || 'Obligatorio',
        v => /^([ a-zA-Z\sÁÉÍÓÚáéíóúÑñ]+)$/.test(v) || 'Ingresa un dato válido (solo letras y espacios permitidos)',
      ],
        nationality: "",
        validateNationality: [
        v => !!v || 'Obligatorio',
        v => /^([a-zA-Z]+)$/.test(v) || 'Ingresa un dato válido (solo letras permitidas)',
      ],
        doctype: "",
        validateDocument: [
        v => (v =='DNI' && v.length <= item.maxLength) || 'Máximo 8 carácteres',
        v => (v =='Pasaporte' && v.length > 9) || 'Máximo 9 carácteres',
        v => (v =='C.E' && v.length > 9) || 'Máximo 9 carácteres',

      ],
        docnumber: "",
        validateDocNumber: [
        v => !!v || 'Obligatorio',
        v => (v =='DNI'&& this.items.regex.test(v)) || 'Solo numeros permitidos',
        v => (v =='Pasaporte' && this.items.regex.test(v)) || 'Solo numeros permitidos',
        v => (v =='C.E' && this.items.regex.test(v)) || 'Solo números y letras permitidas',
      ],
        haveID:null,
        passengerData:[
          
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
            clear () {
            this.$v.$reset()
            this.id = ''
            this.name = ''
            this.lastname = ''
            this.nationality = ''
            this.select = null
            this.docnumber = ''
        },
    navigateToPage() {
      this.$router.push({ path: '/inicio'})
    },
  }        
        }


</script>

<style scoped>
 *{
    margin: 0px;
    padding: 0px;
 }
 .info_container{
    width: 100%;
    background-color: var(--travel-color-blue-500);
    display: flex;
    flex-direction: column;
    align-items: center;
 }
 
 .inputs_card{
    background-color: var(--travel-color-white);
    width: 80%;
    border-radius: 2rem;
    margin: 0.5rem;
    padding: 2rem;
 }

h4{
    font-size:1.50rem;
}
</style>
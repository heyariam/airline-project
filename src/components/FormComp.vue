<template>
           <div class="info_container spacing-playground pa-6">

            <v-card class="inputs_card">
                <!--Título-->
                <h4 class="font-weight-bold text-center pa-2">Ingresar datos</h4>
                    <!--Grupo Formulario-->
                <v-form ref="form"> 
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
        
                                <v-btn @click="reset">
                                    Limpiar
                                </v-btn>
    
                        <v-btn 
                        color="primary"
                        text
                        @click="saveData(haveID)"> Agregar </v-btn>
                
                    </v-card-actions>
                </div>
            </v-form>
       
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
            
            <v-btn class="savebutton">Guardar información</v-btn>
        </div>
    </div>
    </v-card>
</div>

</template>

<script>

export default{
    name: 'FormComp',
     components: {
},
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
        reset () {
        this.$refs.form.reset()
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
    width: 60%;
    border-radius: 2rem;
    margin: 0.5rem;
    padding: 2rem;
    border-radius: 30px;
 }



h4{
    font-size:1.50rem;
}

.savebutton{
display: flex;
 align-items: center;
 justify-content: center;
 gap: 10px;
 font-family: inherit;
 font-size: 13px;
 font-weight: 500;
 text-transform: uppercase;
 letter-spacing: 0.4px;
 color: #7e97b8;
 background-color: #e0e8ef;
 border-style: solid;
 border-width: 2px 2px 2px 2px;
 border-color: rgba(255, 255, 255, 0.333);
 border-radius: 40px 40px 40px 40px;
 padding: 16px 24px 16px 28px;
 transform: translate(0px, 0px) rotate(0deg);
 transition: 0.2s;
 box-shadow: -4px -2px 16px 0px #ffffff, 4px 2px 16px 0px rgb(95 157 231 / 48%);
}

.savebutton:hover {
 color: #516d91;
 background-color: #E5EDF5;
 box-shadow: -2px -1px 8px 0px #ffffff, 2px 1px 8px 0px rgb(95 157 231 / 48%);
}

.savebutton:active {
 box-shadow: none;
}
</style>
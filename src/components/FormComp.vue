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
        
                                <v-btn class="button2"
                                @click="reset">
                                    Limpiar
                                </v-btn>
    
                        <v-btn 
                        class="button_styled"
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
                                <v-btn class="button_styled" @click="getData(data.id)"> Editar </v-btn>
                            </div>
                            <div> 
                                <v-btn class="button_styled" @click="deleteData(data.id)"> Eliminar </v-btn>
                            </div>
                
                        </td>
                    </tr>
                    </tbody>
            </table>
         
        </div>

        <div> 
            
            <v-btn class="button_styled">Guardar información</v-btn>
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

.button_styled{
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

.button_styled:hover {
 color: #516d91;
 background-color: #E5EDF5;
 box-shadow: -2px -1px 8px 0px #ffffff, 2px 1px 8px 0px rgb(95 157 231 / 48%);
}

.button_styled:active {
 box-shadow: none;
}

.button2 {
  display: inline-block;
  transition: all 0.2s ease-in;
  position: relative;
  overflow: hidden;
  z-index: 1;
  color: #090909;
  padding: 0.7em 1.7em;
  font-size: 18px;
  border-radius: 0.5em;
  background: #e8e8e8;
  border: 1px solid #e8e8e8;
  box-shadow: 6px 6px 12px #c5c5c5,
             -6px -6px 12px #ffffff;
}

.button2:active {
  color: #666;
  box-shadow: inset 4px 4px 12px #c5c5c5,
             inset -4px -4px 12px #ffffff;
}

.button2:before {
  content: "";
  position: absolute;
  left: 50%;
  transform: translateX(-50%) scaleY(1) scaleX(1.25);
  top: 100%;
  width: 140%;
  height: 180%;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 50%;
  display: block;
  transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
  z-index: -1;
}

.button2:after {
  content: "";
  position: absolute;
  left: 55%;
  transform: translateX(-50%) scaleY(1) scaleX(1.45);
  top: 180%;
  width: 160%;
  height: 190%;
  background-color: #009087;
  border-radius: 50%;
  display: block;
  transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
  z-index: -1;
}

.button2:hover {
  color: #ffffff;
  border: 1px solid #009087;
}

.button2:hover:before {
  top: -35%;
  background-color: #009087;
  transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
}

.button2:hover:after {
  top: -45%;
  background-color: #009087;
  transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
}

</style>
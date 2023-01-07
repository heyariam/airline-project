<template>
           <div>
            <!--Título-->
            <h4 class="text-2xl font-bold text-center-py-2">Ingresar datos</h4>
                <!--Grupo Formulario-->
            <div class="flex-justify-center items-end-space-x-3"> 
                <!--Grupo: Nombre-->
                <div>
                        <v-text-field v-model="name" label="Nombre"
                        :rules="[validateName]" ></v-text-field>
                 </div><br/>
                 <!--Grupo: Apellido-->
                 <div>
                            <v-text-field v-model="lastname" label="Apellido"
                            :rules="[validateLastName]" > </v-text-field>
                </div><br/>
                 <!--Grupo: Nacionalidad-->
                 <div>
                        <v-text-field v-model="nationality" label="Nacionalidad"
                        :rules="[validateNationality]"> </v-text-field>
                </div>   <br/>
                 <!--Grupo: Tipo de documento-->
                <div> 
                    <v-select :items="items" v-model="doctype" label="Tipo de documento"
                    >{{items}}</v-select>
                  
                </div><br/>
                 <!--Grupo: Numero documento-->
                 <div>

                        <v-text-field v-model="docnumber" label="Número de documento" :rules="[validateDocNumber]" ></v-text-field>

                </div><br/>
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

/* REGEX
    name: /^([ a-zA-Z0-9\sÁÉÍÓÚáéíóúÑñ]+)$/
    lastname: /^([ a-zA-Z0-9\sÁÉÍÓÚáéíóúÑñ]+)$/
    nationality: [A-Za-z]
    docnumber: /[A-Za-z0-9]+/i
*/


export default{
    data(){
        return{
        items: [
            { id: 1 , item: 'DNI' },
            { id: 2 , item: 'Pasaporte' },
            { id: 3 , item: 'C.E' },
         ],
        id: "",
        name: "",
        lastname: "",
        nationality: "",
        doctype: "",
        docnumber: "",
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

        validateName(name) {
            return 'Ingresa un dato válido (solo letras y espacios permitidos)' ? name !== /^([ a-zA-Z\sÁÉÍÓÚáéíóúÑñ]+)$/.test(name) : name;

                
            },
            validateLastName(lastname) {
            return 'Ingresa un dato válido (solo letras y espacios permitidos)' ? lastname !== /^([ a-zA-Z\sÁÉÍÓÚáéíóúÑñ]+)$/.test(lastname) : lastname;
                
            },

            validateNationality(nationality) {
            return 'Ingresa un dato válido (solo letras permitidas)' ? nationality !== /^([a-zA-Z]+)$/.test(nationality) : nationality;
        
            },

           validateDocNumber(doctype , docnumber) {
                if (doctype === 'DNI' && docnumber !== /^([0-9]+)$/.test(docnumber)) {
                    return 'Solo numeros permitidos';
                } else if (doctype === 'C.E' &&  docnumber !== /^([a-zA-Z]+)$/.test(docnumber)) {
                    return 'Solo números y letras permitidas';
                } else if (doctype === 'Pasaporte' && docnumber !== /^([0-9]+)$/.test(docnumber)) {
                    return 'Solo numeros permitidos';
                } else {
                    return docnumber;
    
                }
            }
          
        }
    }


        /*validateLastName(lastname){
            if (lastname !== (/^([ a-zA-Z\sÁÉÍÓÚáéíóúÑñ]+)$/.test(lastname))){
            return 'Please enter a valid name (only letters are allowed)';
        } else if (lastname === '') {
            return 'Ingresa un dato válido';
        }
    }*/
    


       /* validateName(name){
            if (name !== /^([ a-zA-Z\sÁÉÍÓÚáéíóúÑñ]+)$/.test(name)){
            return 'Ingresa un dato válido (solo letras y espacios permitidos)';
                } else if (name === /^([ a-zA-Z\sÁÉÍÓÚáéíóúÑñ]+)$/.test(name)){
                    return this.name;
                }
    },
        validateLastName(lastname){
            if (lastname !== /^([ a-zA-Z\sÁÉÍÓÚáéíóúÑñ]+)$/.test(lastname)){
            return 'Ingresa un dato válido (solo letras y espacios permitidos)';
        } else{
            return " ";
        }
    },
            validateNationality(nationality){
                    if (nationality !== /^([ a-zA-Z\sÁÉÍÓÚáéíóúÑñ]+)$/.test(nationality)){
                    return 'Ingresa un dato válido (solo letras y espacios permitidos)';
                    } else if (nationality === '') {
                        return '';
                    }
            },

            
            validateDocNumber(docnumber, doctype) {
                 if (doctype !== /[A-Za-z0-9]+/i.test(docnumber)) {
                    return (docnumber = 'Máximo 8 carácteres (solo números permitidos)');
                } else if (doctype === 'DNI'|| 'Pasaporte' ||'C.E' ){
                    return this.docnumber;
                }
                }*/


                    






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
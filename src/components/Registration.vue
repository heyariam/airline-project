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
                    <v-btn @click="saveData(haveID)"> Agregar </v-btn>
                </div>
        </div>
        </div>

</template>

<script>
import axios from "axios";

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

    methods:{
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
                const result = axios.post(" http://localhost:3000/passengerData", {
                id: id,
                name: this.name,
                lastname: this.lastname,
                nationality: this.nationality,
                doctype: this.doctype,
                docnumber: this.docnumber,
            })
                this.passengerData.push(data);
        }
    },
    mounted()
    {
        let user = localStorage.getItem("user-info");
        if(!user)
        {
            this.$router.push({name:"signup"})
        }
    }
    }
}
       }   }
</script>

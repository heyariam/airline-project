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

}
    }
}
</script>

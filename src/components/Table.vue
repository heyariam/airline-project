<template>
 <div>
    <h4>Ingresar datos</h4>
    <div> 
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
            <v-autocomplete ref="doctype" v-model="doctype" label="Tipo de documento" placeholder="Seleccionar..." required></v-autocomplete>
        </div>
        <div> 
            <v-text-field ref="name" v-model="name" label="Nombre" required></v-text-field>
        </div>
    </div>
 </div>


  </table>

</template>

<script>

export default({
  data: {
            personal_datas: [{
                nombre: '',
                apellido: '',
                nacionalidad: '',
                tipo_documento: '',
                numero_documento: ''
            }]
        },
})
</script>

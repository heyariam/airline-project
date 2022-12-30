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
                <v-select :items="items" label="Tipo de documento">{{items}}</v-select>
            </div>
            <div> 
                <v-text-field ref="numdoc" v-model="name" label="Número de documento" required></v-text-field>
            </div>
            <div> 
                <v-btn> Agregar </v-btn>
            </div>
        </div>
        <div> 
            <table>
                <thread> 
                    <h4>Datos pasajeros</h4>
                </thread>
                    <tbody>
                        <tr>
                            <th>{{  }}</th>
                            <th>{{  }}</th>
                            <th>{{  }}</th>
                            <th>{{  }}</th>
                            <th>{{  }}</th>
                        </tr>
                        <td>
                            <div> 
                                <v-btn> Editar </v-btn>
                            </div>
                            <div> 
                                <v-btn> Eliminar </v-btn>
                            </div>
                        </td>
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
    data: () => (
    {
    items: ['DNI', 'C.E', 'Pasaporte'],
}
    )
}


</script>

<template>

    <div class="info_container spacing-playground pa-12">
        <v-card class="inputs_card">
            <!--Título-->
            <h4 class="font-weight-bold text-center pa-2">Ingresar datos</h4>
            <!--Grupo Formulario-->
            <v-form ref="form">
                <!--Grupo: Nombre-->
                <div>
                    <v-text-field v-model="name" label="Nombre" :rules="validateName"></v-text-field>
                </div><br />
                <!--Grupo: Apellido-->
                <div>
                    <v-text-field v-model="lastname" label="Apellido" :rules="validateLastName"> </v-text-field>
                </div><br />
                <!--Grupo: Nacionalidad-->
                <div>
                    <v-text-field v-model="nationality" label="Nacionalidad" :rules="validateNationality">
                    </v-text-field>
                </div> <br />
                <!--Grupo: Tipo de documento-->
                <div>
                    <v-select 
                    v-model="doctype" 
                    :items="items"
                    item-text="document"
                    label="Tipo de documento"
                    return-object single-line ></v-select>
                </div>
                <br />
                <!--Grupo: Numero documento-->
                <div>
                    <v-text-field v-model="docnumber" label="Número de documento"
                        :rules="validateDocNumber" :counter="9"></v-text-field>
                </div><br />
                <!--Grupo: Button-->
                <div>
                    <v-card-actions>
                        <v-btn color="error" @click="navigateToPage">
                            Cancelar
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn class="ma-2" outlined color="indigo" @click="reset">
                            Limpiar
                        </v-btn>
                        <v-btn elevation="2" color="success" @click="saveData(haveID)"> Agregar </v-btn>
                    </v-card-actions>
                </div>
            </v-form>

            <div class="usersdata_card">
                <div class="overflow-x-auto">
                    <v-card-actions>
                        <v-btn color=#202124 text>
                            Ver datos
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn icon @click="show = !show">
                            <v-icon>{{ show? 'mdi-chevron-up': 'mdi-chevron-down' }}</v-icon>
                        </v-btn>
                    </v-card-actions>
                    <v-expand-transition>
                        <div v-show="show">
                            <v-divider></v-divider>
                            <v-card>
                                <table class="w-full text-sm text-center text-gray-500">
                                    <thead>
                                        <h4>Datos pasajeros</h4>
                                    </thead>
                                    <tbody>
                                        <tr class="bg white border-b dark:bg-gray-800 dark:border-gray-700"
                                            v-for="data in passengerData" :key="data.id">
                                            <th class="py-4 px-6">{{ data.name }}</th>
                                            <th class="py-4 px-6">{{ data.lastname }}</th>
                                            <th class="py-4 px-6">{{ data.nationality }}</th>
                                            <th class="py-4 px-6">{{ data.doctype }}</th>
                                            <th class="py-4 px-6">{{ data.docnumber }}</th>

                                            <td>
                                                <div>
                                                    <v-btn class="button_styled" @click="getData(data.id)"> Editar
                                                    </v-btn>
                                                </div>
                                                <div>
                                                    <v-btn class="button_styled" @click="deleteData(data.id)"> Eliminar
                                                    </v-btn>
                                                </div>

                                            </td>
                                        </tr>
                                    </tbody>
                                </table><br>
                                <div>
                                    <DialogCard/>
                                </div>
                            </v-card>
                        </div>
                    </v-expand-transition>
                </div>
            </div>
        </v-card>
  
    </div>

</template>

<script>
import DialogCard from "../components/Dialog.vue"
import DateBoxCal from "../components/DatePicker.vue";

export default {
    name: 'FormComp',
    components: {
        DialogCard,
        DateBoxCal
    },
    data: () =>({
        show: false,
            select: " ",
            items: [ 'DNI',  'Pasaporte',  'C.E' ],
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
            docnumber: "",
            validateDocNumber: [
                v => !!v || 'Obligatorio',
                v => (v == 'DNI' &&  /^([0-9]+)$/.test(v)) || 'Solo numeros permitidos',
                v => (v == 'Pasaporte' && /^([0-9]+)$/.test(v)) || 'Solo numeros permitidos',
                v => (v == 'C.E' && /^([a-zA-Z]+)$/.test(v)) || 'Solo números y letras permitidas',
            ],
            haveID: null,
            passengerData: [

            ],
    }),
    methods: {
        getData(id) {
            this.haveID = true
            var dataPass = this.passengerData.filter((data => (data.id == id)))
            //assign to input
            this.name = dataPass[0].name
            this.lastname = dataPass[0].lastname
            this.nationality = dataPass[0].nationality
            this.doctype = dataPass[0].doctype
            this.docnumber = dataPass[0].docnumber

        },
        saveData(haveID) {
            //update
            if (haveID) {
                var dataPass = this.passengerData.filter((data => (data.id == haveID)))
                dataPass[0].name = this.name
                dataPass[0].lastname = this.lastname
                dataPass[0].nationality = this.nationality
                dataPass[0].doctype = this.doctype
                dataPass[0].docnumber = this.docnumber
            } else {
                // save
                const id = this.passengerData.length + 1
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
        deleteData(id) {
            var index = this.passengerData.findIndex((data) => data.id == id)
            this.passengerData.splice(index, 1)
        },
        reset() {
            this.$refs.form.reset()
        },
        navigateToPage() {
            this.$router.push({ path: '/inicio' })
        },
}
}


</script>

<style scoped>
* {
    margin: 0px;
    padding: 0px;
}

.info_container {
    background-color: var(--travel-color-blue-500);
    display: flex;
    flex-direction: column;
    align-items: center;
}

.inputs_card {
    background-color: var(--travel-color-white);
    width: 60%;
    border-radius: 2rem;
    margin: 0.5rem;
    padding: 2rem;
}

h4 {

    font-size: 1.50rem;
}
</style>
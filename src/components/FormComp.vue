<!--Reusable form component-->
<template>
    <v-row justify="center">
      <v-col
        cols="12"
        sm="10"
        md="8"
        lg="6"
      >
      <Card>
          <v-card-text>
            <v-text-field
              ref="name"
              v-model="name"
              :rules="[() => !!name || 'Campo requerido']"
              :error-messages="errorMessages"
              label="Nombre"
              required
            ></v-text-field>
            <v-text-field
              ref="lastname"
              v-model="lastname"
              :rules="[() => !!lastname || 'Campo requerido']"
              label="Apellido"
              required
            ></v-text-field>
           
            <v-text-field
              ref="nationality"
              v-model="nationality"
              :rules="[() => !!nationality || 'Campo requerido', nationalityCheck]"
              label="Nacionalidad"
              required
            ></v-text-field>
             <v-autocomplete
              ref="doctype"
              v-model="doctype"
              :rules="[() => !!doctype || 'Campo requerido']"
              :items="doctypes"
              label="Tipo de documento"
              placeholder="Seleccionar..."
              required
            ></v-autocomplete>
             <v-text-field
              ref="docnumber"
              v-model="docnumber"
              :rules="[
                () => !!docnumber || 'Campo requerido',
                () => !!docnumber && docnumber.length <= 9 || 'El documento debe tener máximo 9 carácteres',
                docnumberCheck
              ]"
              label="Numero de documento"
              counter="9"
              required
            ></v-text-field>
            
           
          </v-card-text>
          <v-divider class="mt-12"></v-divider>
          <v-card-actions>
            <v-btn text @click="navigateToPage">
              Cancelar
            </v-btn>
            <v-spacer></v-spacer>
            <v-slide-x-reverse-transition>
              <v-tooltip
                v-if="formHasErrors"
                left
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    icon
                    class="my-0"
                    v-bind="attrs"
                    @click="resetForm"
                    v-on="on"
                  >
                    <v-icon>mdi-refresh</v-icon>
                  </v-btn>
                </template>
                <span>Refrescar</span>
              </v-tooltip>
            </v-slide-x-reverse-transition>
            <v-btn
              color="primary"
              text
              @click="submit"
            >
              Registrar
            </v-btn>
          </v-card-actions>
        </Card>
      <AddPass/>
      </v-col>
    </v-row>
</template>


<script>
import AddPass from "../components/AddPassenger.vue"

  export default {
    name: 'FormComp',
     components: {
      AddPass
  },
    data: () => ({
    doctypes: ['DNI', 'C.E', 'Pasaporte'],
    errorMessages: '',
    id: Date.now(),
    name: null,
    lastname: null,
    nationality: null,
    doctype: null,
    docnumber: null,
    formHasErrors: false,
  }),

  computed: {
    form () {
      return {
        name: this.name,
        lastname: this.lastname,
        nationality: this.nationality,
        doctype: this.doctype,
        docnumber: this.docnumber,
      }
    },
  },

  watch: {
    name () {
      this.errorMessages = ''
    },
  },

  methods: {
    docnumberCheck () {
      this.errorMessages = this.docnumber && !this.name
        ? `Hey! I'm required`
        : ''

      return true
    },
    resetForm () {
      this.errorMessages = []
      this.formHasErrors = false

      Object.keys(this.form).forEach(f => {
        this.$refs[f].reset()
      })
    },
    submit () {
      this.formHasErrors = false

      Object.keys(this.form).forEach(f => {
        if (!this.form[f]) this.formHasErrors = true

        this.$refs[f].validate(true)
      })
    },
    navigateToPage() {
      this.$router.push({ path: '/inicio'})
    }
  },
}

</script>
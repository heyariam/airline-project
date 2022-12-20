<template>
  <v-card>
    <FormComp/>
   
    <v-btn
      class="mx-2"
      fab
      dark
      color="indigo"
      @click="addPerson(person)"
    >
      <v-icon dark>
        mdi-plus
      </v-icon>
    </v-btn>
    <v-btn
      class="mx-2"
      fab
      dark
      color="indigo"
      @click="editPerson(person)"
    >
      <v-icon dark>
        mdi-pencil
      </v-icon>
    </v-btn>

    <v-btn
      class="mx-2"
      fab
      dark
      color="indigo"
      @click="deletePerson(person)"
    >
      <v-icon dark>
        mdi-delete
      </v-icon>
    </v-btn>

  </v-card>  
</template>

<script>
import FormComp from "../components/FormComp.vue"

export default {
  name: 'AddPass',
  components: {
    FormComp
  },
  data() {
    return {
      people: [],
      name: '',
      age: '',
      email: ''
    }
  },
  methods: {
    addPerson() {
      const id = this.people.length + 1
      this.people.push({ id, name: this.name, age: this.age, email: this.email })
      this.name = ''
      this.age = ''
      this.email = ''
    },
    editPerson(person) {
      this.name = person.name
      this.age = person.age
      this.email = person.email
      this.deletePerson(person)
    },
    deletePerson(person) {
      this.people = this.people.filter(p => p.id !== person.id)
    }
  }
}
</script>

<style>
 li{
  list-style: none,
 }
</style>


  



<template>
  <v-card>
    <FormComp/>
    <button type="submit">Add Passenger</button>
    <ul>
      <li>
        <button @click="editPerson(person)">Edit</button>
        <button @click="deletePerson(person)">Delete</button>
      </li>
    </ul>
  </v-card>  
</template>

<script>
import FormComp from "../components/FormComp.vue"

export default {
  name: 'Registration',
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


  



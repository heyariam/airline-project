<template>
  <ul>
    <li v-for="person in people" :key="person.id">
      {{ person.name }} ({{ person.age }}) - {{ person.email }}
      <button @click="editPerson(person)">Edit</button>
      <button @click="deletePerson(person)">Delete</button>
    </li>
  </ul>
</template>

<script>

export default {

}
</script>



  



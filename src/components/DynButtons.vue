<template>
  <div>
    <v-button v-on:click="addCard"> 
      <v-icon dark>mdi-plus</v-icon>
    </v-button>
    <v-button>
      <v-icon dark>mdi-plus</v-icon>
    </v-button>
    <v-button>
      <v-icon dark>mdi-delete</v-icon>
    </v-button>

  </div>  
</template>

<script>

export default {
  data() {
    return {
      count: 1,
      values: {},
    }
  },
  methods: {
    addPerson() {
      this.count++;
  
    },
    editPerson() {
      
    },
    deletePerson(n) {
      this.count--;
    }
  }
}
</script>

<style>
 li{
  list-style: none,
 }
</style>


  



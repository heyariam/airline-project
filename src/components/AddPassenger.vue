<template>
  <div>

    <v-button> 
      <v-icon dark>mdi-plus</v-icon>
    </v-button>
    <v-button>
      <v-icon dark>mdi-plus</v-icon>
    </v-button>
    <v-button>
      <v-icon dark>mdi-delete</v-icon>
    </v-button>
    <!--<v-btn
      class="mx-2"
      fab
      dark
      color="indigo"
      @click="addPerson"
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
      @click="editPerson"
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
      @click="deletePerson"
    >
      <v-icon dark>
        mdi-delete
      </v-icon>
    </v-btn>-->

  </div>  
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


  



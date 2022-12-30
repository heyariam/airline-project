<template>
  <div class="button">
    
    <v-button>
      <v-icon dark>mdi-plus</v-icon>
    </v-button>
    <v-button>
      <v-icon dark>mdi-delete</v-icon>
    </v-button>

  </div>  
</template>

<script>
import Button from "./UI/Button.vue";
import Card from './UI/Card.vue';

export default {
  components: {
    Card
  },
  data() {
    return {
      Card
    }
  },
  methods: {
    addCard() {
      // Add a new card to the cards array
      this.cards.push({
        id: this.cards.length + 1,
        title: 'Card ' + (this.cards.length + 1),
        description: 'Description for card ' + (this.cards.length + 1)
      });
    }
  }
}

</script>

<style>
 li{
  list-style: none,
 }
</style>


  



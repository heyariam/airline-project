<template>
 <v-container>
      <v-row justify="space-around">
        <Card>  
          <h1>AQUI SALE TU VUELO</h1>
          <router-link :to="{path: '/inicio' }"> volver </router-link>
        </Card>
      </v-row>
    </v-container>
</template>


<script>
  export default {
    props: ['item']
  }
</script>

<style>
.card {
  /* Style the card container */
  width: 500px;
  height: 300px;
  border: 1px solid #ccc;
  border-radius: 1rem;
  padding: 1.25rem;
}

.block {
  /* Style the blocks */
  margin-bottom: 20px;
}
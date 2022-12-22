<template>
 <v-container>
      <v-row justify="space-around">
        <v-card >  
          <v-card-text justify-content= "row">
            <div class="block">
              <p>{{item.name}}</p>
              <p>{{item.name}}</p>
              </div>
              <div class="block">
                <p>{{item.name}}</p>
              <p>{{item.name}}</p>
              </div>
              <div class="block">
                div>
                 <p>{precio}</p>
               </div>
               <div>
                 <btn class="submit">comprar</btn>
               </div>
          </v-card-text>
        </v-card>
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
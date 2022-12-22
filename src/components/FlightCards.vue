<template>
 <v-container>
      <v-row justify="space-around">
        <v-card width="500" height="300">  
          <v-card-text justify-content= "row">
            <div class="font-weight-bold ml-8 mb-2">
              <p>{hora salida}</p>
                 <p>{ciudad}</p>
            </div>
             <div class="font-weight-bold ml-8 mb-2">
                 <p>{duracion}</p>
               <p>{img}</p>
            </div>
             <div class="font-weight-bold ml-8 mb-2">
              <p>{hora llegada}</p>
               <p>{ciudad}</p>
            </div>
             <div class="font-weight-bold ml-8 mb-2">
               <div>
                 <p>{precio}</p>
               </div>
               <div>
                 <btn class="submit">comprar</btn>
               </div>
            </div>
          </v-card-text>
        </v-card>
      </v-row>
    </v-container>
</template>


<script>
export default {

  }
</script>
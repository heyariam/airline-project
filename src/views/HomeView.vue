<template>
  <v-app id="home" background-color="#1e1e1e">
     <Header />
     <v-parallax
     src="../assets/sky-back.jpg"
     class="background"
     >
     <v-container fluid class="section">
       <v-content>
       <v-row
       align="center"
       justify="center"
       >
         <v-col cols="12" sm="4">
           <div class="mx-auto">
               <p>hello</p>
               <p>hahaha</p>
           </div>
         </v-col>
         <v-col cols="12" >
           <div class="first" id="project">
               <v-col cols="12">
                 <div class="child bgColor1">
                   <v-icon color="#A7121D" x-large class="ml-3"
                     >mdi-palette-swatch</v-icon
                   >
                   <h3 class="white--text ml-3 mt-4">UI Design</h3>
                   <p class="grey--text ml-3 mt-6">
                     Lorem, ipsum dolor sit amet <br />consectetur adipisicing
                     elit.
                   </p>
                   <v-btn color="#A7121D" dark text>
                     know more
                     <v-icon right>mdi-arrow-right</v-icon>
                   </v-btn>
                 </div>
                 <div class="child bgColor2">
                   <v-icon color="" x-large class="ml-3" dark
                     >mdi-shopping</v-icon
                   >
                   <h3 class="white--text ml-3 mt-4">Product Design</h3>
                   <p class="grey--text ml-3 mt-6">
                     Lorem, ipsum dolor sit amet <br />consectetur adipisicing
                     elit.
                   </p>
                   <v-btn color="" dark text>
                     know more
                     <v-icon right>mdi-arrow-right</v-icon>
                   </v-btn>
                 </div>
               </v-col>
           </div>
         </v-col>
       </v-row>
       </v-content>
     </v-container>
   </v-parallax>
     <Footer />
  </v-app>
 </template>
 

<script>
import { defineComponent } from "vue";
import Header from "../components/comp/Header.vue";
import Footer from "../components/comp/Footer.vue";


export default defineComponent({
    name: "HomeView",
    components: {
      Header,
      Footer
    }
});
</script>


<!-- CSS STYLES GOES HERE -->

<style scoped>
.top {
  margin-top: 2rem;
}

.first {
  width: 100%;
  height: 400px;
  background: linear-gradient(
    to right,
    #181818,
    #181818 50%,
    #111111 50%,
    #111111 50%
  );
  text-align: center;
  padding: 2rem 2rem;
}

.child {
  display: inline-block;
  padding: 2rem 1rem;
  vertical-align: middle;
  text-align: left;
  margin-right: 8px;
}
.bgColor1 {
  background-color: #1e1e1e;
}
.bgColor2 {
  background-color: #ce1d2a;
}


</style>

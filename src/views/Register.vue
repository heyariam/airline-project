<!--Reusable form component-->


<!-- old form -->
<!--<template>
  <form>
    <v-text-field
      v-model="name"
      :error-messages="nameErrors"
      :counter="10"
      label="Nombre"
    ></v-text-field>
    <v-text-field
      v-model="lastname"
      :error-messages="lastnameErrors"
      :counter="10"
      label="Apellido"
    ></v-text-field>
    <v-text-field
      v-model="nacionalidad"
      :error-messages="natErrors"
      :counter="10"
      label="Nacionalidad"
    ></v-text-field>
    <v-select
      v-model="select"
      :items="items"
      :error-messages="selectErrors"
      label="Documento"
    ></v-select>
    <v-text-field
      v-model="numdoc"
      :error-messages="numErrors"
      :counter="10"
      label="Número de documento"
    ></v-text-field>

    <v-btn class="mr-4" @click="submit"> Enviar </v-btn>
    <v-btn @click="clear"> Borrar </v-btn>
  </form>
</template>-->

<script>
export default {
  data: () => ({
    name: "",
    lastname: "",
    nacionalidad: "",
    select: null,
    items: ["DNI", "C.E", "Pasaporte"],
    numdoc: "",
  }),
};
</script>
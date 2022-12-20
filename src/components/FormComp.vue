<!--Reusable form component-->
<template>
  <form @submit.prevent="onSubmit">
    <slot></slot>
    <div>
      <label for="name">Name:</label>
      <input id="name" type="text" v-model="name" />
    </div>
    <div>
      <label for="lastName">Last Name:</label>
      <input id="lastName" type="text" v-model="lastName" />
    </div>
    <div>
      <label for="nationality">Nationality:</label>
      <input id="nationality" type="text" v-model="nationality" />
    </div>
    <div>
      <label for="docType">Document Type:</label>
      <select id="docType" v-model="docType">
        <option v-for="option in options" v-bind:key="option.value">
          {{ option.label }}
        </option>
      </select>
    </div>
    <div>
      <label for="docNumber">Document Number:</label>
      <input id="docNumber" type="text" v-model="docNumber" />
    </div>
   
    <v-btn
      class="button"
      type="submit"
      rounded
      small
      color="primary"
      dark>
      Añadir</v-btn>
  </form>
</template>

<script>
export default {
  name: 'FormComp',
  data() {
    return {
      name: '',
      lastName: '',
      nationality: '',
      docType: '',
      options: [
        { value: 'dni', label: 'DNI' },
        { value: 'ce', label: 'C.E' },
        { value: 'pasaporte', label: 'Pasaporte' }
      ],
      docNumber: '',
    }
  },
  methods: {
    onSubmit() {
      this.$emit('submit', {
        name: this.name,
        lastName: this.lastName,
        nationality: this.nationality,
        docType: this.docType,
        docNumber: this.docNumber
      })
    }
  }
}
</script>

<style>
form {
  display: flex;
  flex-direction: column;
}

label {
  display: block;
  margin-bottom: 0.5em;
}

input,
select,
.button {
  width: 40%;
  padding: 0.5em;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
</style>


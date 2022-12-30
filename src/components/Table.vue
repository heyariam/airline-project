<template>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Option</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in users" :key="user.id">
        <td>
          <input type="text" v-model="user.name" />
        </td>
        <td>
          <input type="email" v-model="user.email" />
        </td>
        <td>
          <select v-model="user.selectedOption">
            <option v-for="option in options" v-bind:key="option">{{ option }}</option>
          </select>
        </td>
      </tr>
    </tbody>
  </table>

</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  data: {
            personal_datas: [{
                nombre: '',
                apellido: '',
                nacionalidad: '',
                tipo_documento: '',
                numero_documento: ''
            }]
        },
})
</script>

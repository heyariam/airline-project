<template>
  <div>
    <h1>Not Found!</h1>
    <p>
      <router-link :to="{path: '/inicio' }"> volver </router-link>
    </p>
  </div>
</template>

<script>

  export default {
    name: 'NotFound'
  }

</script>

<style scoped>

  center {
    margin: 15vw;
  }

  h1 {
    color: var(--border);
    font-size: 2em;
  }

</style>
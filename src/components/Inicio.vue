<template>
  <div class="app">
    <img class="logo" src="../assets/logo.svg" alt="">
    <h1 class="title">Qual a probabilidade de uma notícia ser verdadeira?</h1>
    <v-form></v-form>
  </div>
</template>

<script>
  import VForm from "./VForm";

  export default {
    name: "Inicio",
    components: {
      VForm
    }
  }
</script>

<style scoped>
  img.logo {
    padding-left: 20px;
  }
  h1.title{
    font-size: 20px;
  }
</style>

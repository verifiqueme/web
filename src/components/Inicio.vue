<template>
  <div class="app">
    <img alt="" class="logo" src="../assets/logo.svg">
    <h1 class="title">Qual a probabilidade de uma notícia ser verdadeira?</h1>
    <div class="columns is-mobile is-centered">
      <div class="column is-half">
        <b-notification :active="online !== 1" :closable="false" type="is-danger">
          Servidor está indisponível no momento.
        </b-notification>
      </div>
    </div>
    <v-form v-if="online === 1"></v-form>

  </div>
</template>

<script>
  import VForm from "./VForm";
  import axios from "axios";

  export default {
    name: "Inicio",
    components: {
      VForm
    },
    data() {
      return {
        online: 1
      }
    },
    watch: {
      online: function () {
        if (this.online === 1) {
          this.$snackbar.open({
            message: 'Conectado ao servidor.',
            type: 'is-success',
            position: 'is-top',
            duration: 10000
          })
        }
      }
    },
    created() {
        setInterval(() => {
          axios
            .get('https://isitup.org/'+ this.server.replace("https://", '') +'.json')
            .then(response => (
              this.online = response.data.status_code
            ))
            .catch(error => this.online = 0)
        }, 5000);
    }
  }
</script>

<style scoped>
  img.logo {
    padding-left: 10px;
  }

  h1.title {
    font-size: 20px;
  }
</style>

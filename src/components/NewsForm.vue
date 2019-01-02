<template>
  <div id="news-form">
    <b-form class="form-signin" @submit="onSubmit">
      <div class="text-center mb-4">
        <img src="../assets/logo.svg" class="img-fluid">
        <p>Qual a chance da sua notícia ser verdadeira?</p>
      </div>
      <b-form-group id="articleGroup">
        <b-form-input id="article" class="form-control-lg" placeholder="Link da notícia" required type="url" v-model="article"></b-form-input>
        <b-form-invalid-feedback v-if="error.length" force-show="true">{{ error }}</b-form-invalid-feedback>
      </b-form-group>
      <b-button :block=true size="lg" type="submit" variant="search">
        <i class="fas fa-search"></i> Analisar
      </b-button>
    </b-form>
  </div>
</template>

<script>
  import isUrl from "is-url";

  export default {
    name: "news-form",
    data() {
      return {
        items: [],
        error: "",
        article: ""
      };
    },
    methods: {
      onSubmit (evt) {
        evt.preventDefault();
        if (this.article !== '' && isUrl(this.article)) {
          this.$emit('noticiaAnalise', this.article)
        }else{
          this.error = "Insira uma notícia valida."
        }
      }
    }
  };
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto');

  .form-signin {
    color: #303036 !important;
    font-family: "Roboto", sans-serif;

    width: 100%;
    max-width: 420px;
    padding: 15px;
    margin: 0 auto;
  }

  .form-label-group {
    position: relative;
    margin-bottom: 1rem;
  }

  /* Gradientes */
  .btn-search {
    flex: 1 1 auto;
    padding: 10px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;
    border-radius: 10px;
    background-image: linear-gradient(
      to right,
      #f9c80e 0%,
      #ef476f 51%,
      #f9c80e 100%
    );
  }

  .btn-search:hover {
    background-position: right center;
    color: #FFFAFF;
  }

  .btn-search:active {
    background: linear-gradient(to right, #ef476f 0%, #f9c80e 51%, #f9c80e 100%) right center !important;
  }
</style>

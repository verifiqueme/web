<template>
  <div id="hello">
    <b-container class="content">
      <b-row v-if="error">
        <b-col>
          <div class="alert alert-danger" role="alert">
            Não foi possível completar sua solicitação. Tente novamente mais tarde.
            Se você acredita que isto é um problema sério, abra uma <a href="https://github.com/verificame/core">reclamação</a> em nosso repositório.
          </div>
        </b-col>
      </b-row>
      <b-row v-if="submited !== true && info === ''">
        <b-col class="text-center">
          <news-form @noticiaAnalise="analise"></news-form>
        </b-col>
      </b-row>
      <b-row>
        <b-col v-if="submited !== false && info === ''">
          <p>Analisando a notícia :)</p>
          <b-progress :animated="true" :value="counter" class="mb-2" striped variant="success"></b-progress>
        </b-col>
      </b-row>
      <b-row v-if="info">
        <b-col>
          <b-row>
            <score-card @resetAction="reset" :artigo="artigo" :valor="info"></score-card>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import NewsForm from "./NewsForm";
  import base64url from "base64-url";
  import axios from "axios";
  import ScoreCard from "./ScoreCard";

  export default {
    name: "Inicio",
    components: {
      ScoreCard,
      NewsForm,
    },
    data() {
      return {
        submited: false,
        info: "",
        artigo: [],
        counter: 10,
        error: false
      };
    },
    timers: {
      counterUp: {time: 1000, autostart: false, repeat: true}
    },
    methods: {
      counterUp() {
        this.counter = this.counter + 1.5;
      },
      reset() {
        this.submited = false;
        this.info = "";
        this.counter = 10;
        this.$timer.stop('counterUp');
      },
      analise(noticia) {
        this.counter = 10;
        this.$timer.start('counterUp');
        let encoded = base64url.encode(noticia);
        this.submited = true;
        axios
          .get('https://verfcme-core.now.sh/api/' + encoded)
          .then(response => {
            console.log(response.data);
            this.artigo = response.data['info'];
            this.info = Math.round((response.data['response'] * 100));
            this.$timer.stop('counterUp');
          })
          .catch(error => {
            this.reset();
            this.error = true;
          })
      }
    }
  };
</script>

<style>

</style>

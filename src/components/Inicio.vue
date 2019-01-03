<template>
  <div id="hello">
    <b-container class="content">
      <b-row v-if="submited !== true">
        <b-col class="text-center">
          <news-form @noticiaAnalise="analise"></news-form>
        </b-col>
      </b-row>
      <b-row v-if="loading !== false">
        <b-col>
          <p>Analisando a notícia :)</p>
          <b-progress :value="counter" variant="success" striped animated="true" class="mb-2"></b-progress>
        </b-col>
      </b-row>
      <b-row  v-if="info">
        <score-card :valor="info"></score-card>
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
        loading: false,
        info: "",
        counter: 10
      };
    },
    methods: {
      countUp(){
        setTimeout(function() {
          this.counter += 0.75;
        }, 1000);
      },
      analise(noticia) {
        this.counter = 10;
        this.countUp();
        let encoded = base64url.encode(noticia);
        this.submited = true;
        this.loading = true;
        axios
          .get('https://verfcme-core.now.sh/api/' + encoded)
          .then(response => {
            this.loading = false;
            this.info = Math.round((response.data['response'] * 100));

          })
          .catch(error => console.log(error))
      }
    }
  };
</script>

<style>

</style>

<template>
  <div id="hello">
    <b-container class="content">
      <b-row v-if="submited !== true">
        <b-col class="text-center">
          <news-form @noticiaAnalise="analise"></news-form>
        </b-col>
      </b-row>
      <score-card></score-card>
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
        submited: true,
        info: ""
      };
    },
    methods: {
      analise(noticia) {
        let encoded = base64url.encode(noticia);
        console.log(encoded);
        axios
          .get('https://verfcme-core.now.sh/api/' + encoded)
          .then(response => (this.info = response.data))
          .catch(error => console.log(error))
      }
    }
  };
</script>

<style>

</style>

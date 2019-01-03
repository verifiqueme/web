<template>
  <div id="hello">
    <b-container class="text-center content">
      <b-row>
        <b-col>
          <news-form @noticiaAnalise="analise"></news-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import NewsForm from "./NewsForm";
  import base64url from "base64-url";
  import axios from "axios";

  export default {
    name: "Inicio",
    components: {
      NewsForm
    },
    data() {
      return {
        msg: "Olá mundo",
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
  #hello {
  }
</style>

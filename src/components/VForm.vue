<template>
  <div class="app">
    <div class="columns is-mobile is-centered">
      <div class="column is-half">
        <div class="field has-addons has-addons-centered">
          <b-tooltip :animated="true" label="Link da notícia" position="is-bottom" type="is-danger">
            <div class="control has-icons-left">
              <input :disabled="hasSubmit === true" class="input is-large" type="text"
                     v-model="url">
              <span class="icon is-small is-left">
            <i class="far fa-newspaper"></i>
          </span>
            </div>
          </b-tooltip>
          <div class="control">
            <a :class="{'is-loading': hasSubmit}" :disabled="url.length === 0 " @click="enviar"
               class="button is-danger is-large is-rounded">
              <i class="fas fa-search"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <b-collapse :open="result !== null">
      <div class="columns">
        <div class="column">
          <hr/>
          <result :result="result"></result>
        </div>
      </div>
    </b-collapse>
  </div>
</template>

<script>
  import isUrl from "is-url";
  import Result from "./Result";
  import base64url from "base64-url";
  import axios from "axios";

  export default {
    name: "v-form",
    components: {
      Result
    },
    data() {
      return {
        url: "",
        hasSubmit: false,
        result: null
      }
    },
    methods: {
      enviar() {
        this.result = null;
        if (!this.url) return;

        this.hasSubmit = true;
        if (!isUrl(this.url)) {
          this.$toast.open({
            message: 'Insira um endereço válido',
            type: 'is-danger'
          });
        } else {
          const _this = this;
          const encoded = 'https://api.verifique.me/api/' + base64url.encode(this.url);
          axios
            .get(encoded)
            .then(function(response){
              _this.result = {
                'request': _this.url,
                'info': response.data.info,
                'score': response.data.response
              };
              _this.hasSubmit = false;
            })
            .catch(function(error){
              _this.$toast.open({
                message: 'Não foi possível concluir a análise da notícia informada.',
                type: 'is-danger'
              });
              _this.hasSubmit = false;
            })
        }

      }
    }
  }
</script>

<style scoped>
  @media only screen and (max-width: 768px) {
    input {
      width: 200px
    }
  }
</style>

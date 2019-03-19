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

        <progress v-if="hasSubmit" class="progress is-success is-medium" :value="progress" max="100"></progress>

      </div>
    </div>
    <b-collapse v-if="result !== null" :open="result !== null">
      <div class="columns">
        <div class="column">
          <hr/>
          <result :result="result"></result>
        </div>
      </div>
      <div class="columns is-mobile is-centered">
        <div class="column is-half">
          <avaliacao :url="result.request"></avaliacao>
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
  import Avaliacao from "./Avaliacao";

  export default {
    name: "v-form",
    components: {
      Result,
      Avaliacao
    },
    data() {
      return {
        url: "",
        hasSubmit: false,
        progress: 0,
        result: null
      }
    },
    timers: {
      counterUp: {name: "counterUp", time: 1000, autostart: true, repeat: true}
    },
    methods: {
      counterUp() {
        this.progress = this.progress + 1.5;
      },
      enviar() {
        this.result = null;
        if (!this.url) return;
        this.progress = 0;
        this.hasSubmit = true;
        if (!isUrl(this.url)) {
          this.$toast.open({
            message: 'Insira um endereço válido',
            type: 'is-danger'
          });
          this.hasSubmit = false;
        } else {
          const _this = this;
          const encoded = _this.server + '/api/' + base64url.encode(this.url);
          axios
            .get(encoded)
            .then(function (response) {
              _this.hasSubmit = false;
              _this.result = {
                'request': _this.url,
                'info': response.data.info,
                'score': response.data.response
              };

            })
            .catch(function (error) {
              _this.hasSubmit = false;
              _this.$toast.open({
                message: 'Não foi possível concluir a análise da notícia informada.',
                type: 'is-danger'
              });
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

  progress{
    margin-top: 30px;
  }

</style>

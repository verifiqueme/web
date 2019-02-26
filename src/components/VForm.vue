<template>
  <div class="columns is-mobile is-centered">
    <div class="column is-half">
      <div class="field has-addons has-addons-centered">
        <b-tooltip :animated="true" label="Link da notícia" position="is-bottom" type="is-danger">
          <div class="control has-icons-left">
            <input :disabled="hasSubmit ?  '' : disabled" class="input is-large" type="text"
                   v-model="url">
            <span class="icon is-small is-left">
            <i class="far fa-newspaper"></i>
          </span>
          </div>
        </b-tooltip>
        <div class="control">
          <a :class="{'is-loading': hasSubmit}" :disabled="url ? disabled : ''" @click="enviar"
             class="button is-danger is-large is-rounded">
            <i class="fas fa-search"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import isUrl from "is-url";

  export default {
    name: "v-form",
    components: {},
    data() {
      return {
        url: "",
        hasSubmit: false
      }
    },
    methods: {
      enviar() {
        this.hasSubmit = true;
        if (!isUrl(this.url)) {
          this.$toast.open({
            message: 'Insira um endereço válido',
            type: 'is-danger'
          });
        }
        this.hasSubmit = false;
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

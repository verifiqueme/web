<template>
  <div id="avaliacao">
    <div class="card">
      <div class="card-content">
        <p class="subtitle">
          O que você achou da avaliação?
        </p>
      </div>
      <footer class="card-footer">
        <p :class="{'is-inverted': active !== 1}" @click="active = 1"
           class="button is-large is-fullwidth is-success card-footer-item">
          <span>
            <i class="fas fa-thumbs-up"></i>
          </span>
        </p>
        <p :class="{'is-inverted': active !== 2}" @click="active = 2"
           class="button is-large is-fullwidth is-danger card-footer-item">
          <span>
            <i class="fas fa-thumbs-down"></i>
          </span>
        </p>
      </footer>
    </div>
  </div>
</template>

<script>
  import axios from "axios";

  export default {
    name: "Avaliacao",
    props: ['url'],
    data() {
      return {
        active: 0
      }
    },
    watch: {
      url: function () {
        this.active = 0;
      },
      active: function () {
        if (!this.active) return;
        let data = new FormData();
        data.set('url', this.url);
        data.set('rating', this.active);
        axios.post(this.server + "/rating", data, {headers: {'Content-Type': 'multipart/form-data' }}).then(function (response) {
          console.log('Enviado avaliação.')
        });
      }
    },
  }
</script>

<style scoped>

</style>

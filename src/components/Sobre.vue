<template>
  <div class="sobre">
    <img alt="" class="logo" src="../assets/logo.svg">
    <div class="columns is-mobile is-centered">
      <div class="column">
        <b-message :closable="false" size="is-large" title="Sobre" type="is-info">
          O verifica.me foi originalmente criado por <a href="https://twitter.com/guiscaranse">@guiscaranse</a> como
          parte de seu TCC <i>"Uso de Redes Neurais para detecção de notícias falsas na Internet"</i> no Instituto
          Federal de Educação, Ciência e Tecnologia da Bahia.
          É uma ferramenta de código aberto com mais de 80% de precisão, desenvolvida utilizando Python e Vue.js.<br>
        </b-message>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "Sobre",
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

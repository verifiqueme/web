<template>
  <div class="sobre">
    <img alt="" class="logo" src="../assets/logo.svg">
    <div class="columns is-mobile is-centered">
      <div class="column">
        <b-message :closable="false" size="is-large" title="Resultados e funcionamento" type="is-default">
          Hoje a rede neural é avaliada em mais de 80% de precisão, com base em <strong>1000 notícias</strong>. Isto não significa que a
          rede não pode errar. Ela tem constante dificuldade em avaliar textos recheados de opinião, é possível que
          nestes casos a rede neural erre (seja avaliando o texto como verdadeiro ou falso). Por isto, o domínio das notícias, atualmente, é limitado em notícias de ampla repercussão nacional, falas de figuras públicas e entre outros.
          <br>A rede neural está em constante atualização e melhorias que podem ser acompanhadas pelo repositório do Github.<br>
          Um diagrama sobre o funcionamento do programa pode ser encontrado abaixo.
        </b-message>
        <img alt="" class="logo" src="../assets/fig_diagram.png">
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "Duvidas",
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

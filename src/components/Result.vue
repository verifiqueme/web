<template>
  <div class="result">
    <div class="columns is-mobile is-multiline is-centered">
      <div class="column is-narrow is-full">
        <div class="score danger">
          <span>{{result}}%</span><br>
          <p class="subtitle">de chance de sua notícia ser totalmente verdadeira.</p>
        </div>
        <progress class="progress is-large is-danger" :value="result" max="100">70%</progress>
      </div>
    </div>
    <div class="columns is-mobile is-multiline is-centered">
      <div class="column is-narrow">
        <p>
          <span class="marker">
            <animate-number from="1" to="400"></animate-number>
          </span><br>
          Palavras analisadas
        </p>
      </div>
      <div class="column is-narrow">
        <p>
          <span class="marker">
            <animate-number from="1" to="400"></animate-number>
          </span><br>
          Notícias comparadas
        </p>
      </div>
      <div class="column is-narrow">
        <p>
          <span class="marker">1 dia e 1 hora</span><br>
          desde a última análise
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Result",
    data() {
      return {
        result: 50
      }
    }
  }
</script>

<style scoped>
  span.marker {
    font-size: 1.87em;
    font-weight: bold;

  }

  .score span {
    font-size: 2.87em;
    font-weight: bold;
  }

  .score {
    padding: 31px
  }

  .danger {
    color: #ff3860;
  }
</style>

<template>
  <div class="result">
    <div class="columns is-mobile is-multiline is-centered">
      <div class="column is-narrow is-full">
        <div class="score danger">
          <span>{{Math.round(result.score * 100)}}%</span><br>
          <p class="subtitle">de chance de sua notícia ser totalmente verdadeira.</p>
        </div>
        <progress class="progress is-large is-danger" :value="result.score * 100" max="100">{{result.score}}%</progress>
      </div>
    </div>
    <div class="columns is-mobile is-multiline is-centered">
      <div class="column is-narrow">
        <p>
          <span class="marker">
            <animate-number from="1" :to="result.info.words"></animate-number>
          </span><br>
          Palavras analisadas
        </p>
      </div>
      <div class="column is-narrow">
        <p>
          <span class="marker">
            <animate-number from="1" :to="result.info.total"></animate-number>
          </span><br>
          Notícias comparadas
        </p>
      </div>
      <div class="column is-narrow">
        <p>
          <span class="marker">{{ relative }}</span><br>
          desde a última análise desta notícia
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import relativeDate from '../scripts/relative-time';
  export default {
    name: "Result",
    props: ['result'],
    computed: {
      // a computed getter
      relative: function () {
        // `this` points to the vm instance
        return relativeDate(new Date(this.result.info.age));
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

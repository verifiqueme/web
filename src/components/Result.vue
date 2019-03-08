<template>
  <div class="result">
    <div class="columns is-mobile is-centered">
      <div class="column is-half">
        <b-message :title="result.info.title" size="is-small" :closable="false" :type="'is-' + colors">
         <spam class="is-centered"><a :href="result.request" target="_blank">{{ result.request }}</a></spam>
        </b-message>
      </div>
    </div>
    <div class="columns is-mobile is-multiline is-centered">
      <div class="column is-narrow is-full">
        <div class="score" :class="colors">
          <div class="score-text">
            <animate-number :to="rounded" from="1"></animate-number>%
          </div>
          <p class="subtitle">de chance de sua notícia ser totalmente verdadeira.</p>
        </div>
        <progress :value="result.score * 100" class="progress is-large" :class="'is-' + colors" max="100">{{result.score}}%</progress>
      </div>
    </div>
    <div class="columns is-mobile is-multiline is-centered">
      <div class="column is-narrow">
        <p>
          <span class="marker">
            <animate-number :to="result.info.words" from="1"></animate-number>
          </span><br>
          Palavras analisadas
        </p>
      </div>
      <div class="column is-narrow">
        <p>
          <span class="marker">
            <animate-number :to="result.info.total" from="1"></animate-number>
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
      rounded: function () {
        return Math.round(this.result.score * 100);
      },
      relative: function () {
        return relativeDate(new Date(this.result.info.age));
      },
      colors: function () {
        if(this.result.score * 100 >= 80){
          return 'success'
        }else if(this.result.score * 100 >= 60){
          return 'info'
        }else if(this.result.score * 100 >= 40){
          return 'warning'
        }else{
          return 'danger'
        }
      }
    }

  }
</script>

<style scoped>
  span.marker {
    font-size: 1.87em;
    font-weight: bold;

  }

  .score .score-text {
    font-size: 2.87em;
    font-weight: bold;
  }

  .score {
    padding: 0 31px 31px
  }

  .danger {
    color: #ff3860;
  }

  .warning {
    color: #ffdd57;
  }

  .success {
    color: #23d160;
  }
  .info{
    color: #209cee;
  }

</style>

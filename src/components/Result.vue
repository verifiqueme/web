<template>
  <div class="result">

    <div class="columns is-mobile is-multiline is-centered">
      <div class="column is-narrow is-full">
        <div :class="colors()" class="score">
          <div class="score-text">
            <animate-number ref="scoreRounded" from="1"></animate-number>%
          </div>
          <p class="subtitle">de chance de sua notícia ser totalmente verdadeira.</p>
          <span class="tag is-black">{{ result.info.title }}</span>
        </div>
        <progress :class="'is-' + colors()" :value="result.score * 100" class="progress is-large" max="100">
          {{result.score}}%
        </progress>
      </div>
    </div>
    <div class="columns is-mobile is-multiline is-centered">
      <div class="column is-narrow">
        <b-tooltip animated
                   label="Palavras são analisadads para procurar padrões comuns em notícias falsas"
                   position="is-bottom">
          <p>
          <span class="marker">
            <animate-number ref="wordsAnim" from="1"></animate-number>
          </span><br>
            Palavras analisadas
          </p>
        </b-tooltip>
      </div>
      <div class="column is-narrow">
        <b-tooltip animated
                   label="Quando encontramos uma notícia de fonte confiável, comparamos para encontrar coisas em comuns"
                   position="is-bottom">
          <p>
          <span class="marker">
            <animate-number ref="newsAnim" from="1"></animate-number>
          </span><br>
            Notícias comparadas
          </p>
        </b-tooltip>
      </div>
      <div class="column is-narrow">
        <b-tooltip animated
                   label="Para evitar abusos em nosso serviço, armazenamos as análises temporariamente."
                   position="is-bottom">
          <p>
            <span class="marker">{{ relative }}</span><br>
            desde a última análise desta notícia
          </p>
        </b-tooltip>
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
      relative: function () {
        return relativeDate(new Date(this.result.info.age));
      },
    },
    watch: {
      result: function () {
        this.$refs.scoreRounded.reset(0, this.rounded());
        this.$refs.scoreRounded.start();

        this.$refs.wordsAnim.reset(0, this.result.info.words);
        this.$refs.wordsAnim.start();

        this.$refs.newsAnim.reset(0, this.result.info.total);
        this.$refs.newsAnim.start();

        this.$refs.numbersAnim.start()
      }
    },
    methods: {
      colors: function () {
        if (this.result.score * 100 >= 80) {
          return 'success'
        } else if (this.result.score * 100 >= 60) {
          return 'info'
        } else if (this.result.score * 100 >= 40) {
          return 'warning'
        } else {
          return 'danger'
        }
      },
      rounded: function () {
        return Math.round(this.result.score * 100);
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

  .info {
    color: #209cee;
  }

</style>

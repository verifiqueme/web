<template>
  <div id="avaliacao">
    <div class="card">
      <div class="card-content">
        <p class="subtitle">
          O que você achou da avaliação?
        </p>
      </div>
      <footer class="card-footer">
        <p class="button is-large is-fullwidth is-success card-footer-item" :class="{'is-inverted': active !== 1}" @click="active = 1">
          <span>
            <i class="fas fa-thumbs-up"></i>
          </span>
        </p>
        <p class="button is-large is-fullwidth is-danger card-footer-item" :class="{'is-inverted': active !== 2}" @click="active = 2">
          <span>
            <i class="fas fa-thumbs-down"></i>
          </span>
        </p>
      </footer>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Avaliacao",
    data() {
      return {
        active: 0
      }
    }
  }
</script>

<style scoped>

</style>

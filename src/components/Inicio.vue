<template>
  <div id="app">
    <section class="hero is-bold is-fullheight">
      <!-- Hero head: will stick at the top -->
      <div class="hero-head">
        <v-nav></v-nav>
      </div>

      <!-- Hero content: will be in the middle -->
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">Teste</h1>
        </div>
      </div>

      <!-- Hero footer: will stick at the bottom -->
      <div class="hero-foot">
        <div class="container">
          <div class="content has-text-centered">
            <p>
              <strong>Olá</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import VNav from "./VNav";
  export default {
    name: "Inicio",
    components: {
      VNav
    }
  }
</script>

<style scoped>

</style>

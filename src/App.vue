<template>
  <div id="app">
    <section class="hero  is-fullheight">
      <!-- Hero head: will stick at the top -->
      <div class="hero-head">
        <v-nav></v-nav>
      </div>

      <!-- Hero content: will be in the middle -->
      <div class="hero-body">
        <div class="container has-text-centered">
          <router-view></router-view>
        </div>
      </div>

      <!-- Hero footer: will stick at the bottom -->
      <div class="hero-foot">
        <div class="container">
          <div class="content has-text-centered">
            <p>
              <strong>Feito com <i class="fas fa-heart has-text-danger"></i> por <a href="https://twitter.com/guiscaranse" target="_blank">@guiscaranse</a></strong>
            </p>
            <a>
              <i class="fab fa-github"></i> Código-fonte
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import VNav from "./components/VNav";

  export default {
    name: "app",
    components: {
      VNav
    }
  };
</script>

<style>

  .hero-foot .content {
    padding: 50px;
  }
</style>

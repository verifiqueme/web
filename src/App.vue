<template>
  <div id="app" class="text-center cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
    <navbar></navbar>
    <main role="main" class="inner cover">
      <router-view></router-view>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
// Assets
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-vue/dist/bootstrap-vue.min.css'

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default {
  name: "app",
  components: {
    Navbar,
    Footer
  }
};
</script>

<style>
  #app a,
  #app a:focus,
  #app a:hover {
    color: #fff;
  }

  /*
   * Base structure
   */

  html,
  body {
    height: 100%;
  }

  body {
    display: -ms-flexbox;
    display: flex;
    color: #fff;
  }

  .cover-container {
    max-width: 42em;
  }

  /*
   * Cover
   */
  .cover {
    padding: 0 1.5rem;
  }
  .cover .btn-lg {
    padding: .75rem 1.25rem;
    font-weight: 700;
  }
</style>

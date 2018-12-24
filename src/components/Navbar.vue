<template>
  <div
    class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm"
  >
    <h5 class="my-0 mr-md-auto font-weight-normal">Verifica</h5>
    <nav class="my-2 my-md-0 mr-md-3" v-for="item in items" :key="item.path">
      <router-link :to="item.path" active-class="active" class="p-2 text-dark" exact>{{ item.name }}</router-link>
    </nav>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap-vue/dist/bootstrap-vue.min.js";
export default {
  name: "navbar",
  created() {
    this.$router.options.routes.forEach(route => {
      this.items.push({
        name: route.name,
        path: route.path
      });
    });
  },
  data() {
    return {
      items: []
    };
  }
};
</script>

<style>
.active {
  color: blue !important;
}
</style>
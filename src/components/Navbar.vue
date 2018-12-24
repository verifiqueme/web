<template>
  <div class="container d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white">
    <h5 class="my-0 mr-md-auto font-weight-normal"></h5>
    <nav class="my-2 my-md-0 mr-md-3" v-for="item in items" :key="item.path">
      <router-link :to="item.path" active-class="active" class="p-2 nav-link" exact>{{ item.name }}</router-link>
    </nav>
  </div>
</template>

<script>
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
.nav-link{
  color: #253031 !important;
}
.active {
  color: #000 !important;
  font-weight:bold;
}
</style>
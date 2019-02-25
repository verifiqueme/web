<template>
  <nav class="navbar">
    <div class="container">
      <div :key="item.path" class="navbar-brand" v-for="item in items">
        <router-link :to="item.path" active-class="active" class="navbar-item" exact>{{ item.name }}</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: "v-nav",
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

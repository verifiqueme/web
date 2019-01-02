<template>
  <header class="masthead mb-auto">
    <div class="inner">
      <nav :key="item.path" class="nav nav-masthead justify-content-center" v-for="item in items">
        <router-link :to="item.path" active-class="active" class=" nav-link" exact>{{ item.name }}</router-link>
      </nav>
    </div>
  </header>

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
  .masthead {
    margin-bottom: 2rem;
  }

  .masthead-brand {
    margin-bottom: 0;
  }

  .nav-masthead .nav-link {
    padding: .25rem 0;
    font-weight: 700;
    color: #253031;
    background-color: transparent;
    border-bottom: .25rem solid transparent;
  }

  .nav-masthead .nav-link:hover,
  .nav-masthead .nav-link:focus {
    border-bottom-color: rgba(0, 0, 0, .25);
  }

  .nav-masthead .nav-link + .nav-link {
    margin-left: 1rem;
  }

  .nav-masthead .active {
    color: #000 !important;
    border-bottom-color: #000;
    font-weight: bold;
  }

  @media (min-width: 48em) {
    .masthead-brand {
      float: left;
    }
    .nav-masthead {
      float: right;
    }
  }
</style>

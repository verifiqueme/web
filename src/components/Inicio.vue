<template>
  <div id="hello">
    <b-container class="text-center content">
      <b-row>
        <b-col>
          <news-form></news-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import NewsForm from "./NewsForm";

  export default {
    name: "Inicio",
    components: {
      NewsForm
    },
    data() {
      return {
        msg: "Olá mundo"
      };
    }
  };
</script>

<style>
  #hello {
  }
</style>

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
    display: -ms-flexbox;
    display: -webkit-box;
    display: flex;
    -ms-flex-align: center;
    -ms-flex-pack: center;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    padding-top: 40px;
    padding-bottom: 40px;
    position: absolute;
    transform: translate(-50%, -40%);
    left: 50%;
    top: 40%;
  }
</style>

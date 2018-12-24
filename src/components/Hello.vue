<template>
  <div id="hello">
    <b-container class="text-center content">
      <b-row>
        <b-col>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

export default {
  name: "Hello",
  components: {
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
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  width: 100%;
  max-width: 3%;
  padding: 15px;
  margin: auto;
}
.content {
  position: absolute;
  transform: translate(-50%, -40%);
  left: 50%;
  top: 40%;
}
</style>

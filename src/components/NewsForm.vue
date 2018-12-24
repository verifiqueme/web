<template>
  <div id="news-form">
    <form class="form-signin" action="/" method="post">
      <div class="text-center mb-4">
        <img src="../assets/logo.svg" style="max-height: 100px">
        <p>Qual a chance da sua notícia ser verdadeira?</p>
      </div>
      <div class="form-label-group">
        <input type="url" name="article" class="form-control form-control-lg" placeholder="Link da notícia" required autofocus>
      </div>
      <button class="btn btn-lg btn-search btn-block" type="submit">
        <i class="fas fa-search"></i> Analisar
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "news-form",
  data() {
    return {
      items: []
    };
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto');

.form-signin {
  color: #303036 !important;
  font-family: "Roboto", sans-serif;

  width: 100%;
  max-width: 420px;
  padding: 15px;
  margin: 0 auto;
}

.form-label-group {
  position: relative;
  margin-bottom: 1rem;
}
/* Gradientes */
.btn-search {
  flex: 1 1 auto;
  padding: 10px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  border-radius: 10px;
  background-image: linear-gradient(
    to right,
    #f9c80e 0%,
    #ef476f 51%,
    #f9c80e 100%
  );
}

.btn-search:hover {
  background-position: right center;
  color: #FFFAFF;
}

.btn-search:active {
  background: linear-gradient(to right, #ef476f 0%, #f9c80e 51%, #f9c80e 100%)
    right center !important;
}
</style>
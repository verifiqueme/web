<template>
  <div class="card">
    <div class="box">
      <div class="img">
        <score valor="50" cor="orange"></score>
      </div>
      <h2>Teste<br><span>Ay Lmaoooo</span></h2>
      <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et.</p>
      <span>
            <ul>
                <li><a href="#"><font-awesome-icon :icon="['fab', 'twitter']" ></font-awesome-icon></a></li>
            </ul>
        </span>
    </div>
  </div>
</template>

<script>
  import Score from "./Score";

  export default {
    name: "ScoreCard",
    components: {
      Score
    }
  }
</script>

<style scoped>
  .card {
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    width:300px;
    min-height:400px;
    background:#fff;
    box-shadow:0 20px 50px rgba(0,0,0,.1);
    border-radius:10px;
    transition:0.5s;
  }
  .card:hover {
    box-shadow:0 30px 70px rgba(0,0,0,.2);
  }
  .card .box {
    position:absolute;
    top:50%;
    left:0;
    transform:translateY(-50%);
    text-align:center;
    padding:20px;
    box-sizing:border-box;
    width:100%;
  }
  .card .box .img {
    width:120px;
    height:120px;
    margin:0 auto;
    border-radius:50%;
    overflow:hidden;
  }
  .card .box .img img {
    width:100%;
    height:100%;
  }
  .card .box h2 {
    font-size:20px;
    color:#262626;
    margin:20px auto;
  }
  .card .box h2 span {
    font-size:14px;
    background:#e91e63;
    color:#fff;
    display:inline-block;
    padding:4px 10px;
    border-radius:15px;
  }
  .card .box p {
    color:#262626;
  }
  .card .box span {
    display:inline-flex;
  }
  .card .box ul {
    margin:0;
    padding:0;
  }
  .card .box ul li {
    list-style:none;
    float:left;
  }
  .card .box ul li a {
    display:block;
    color:#aaa;
    margin:0 10px;
    font-size:20px;
    transition:0.5s;
    text-align:center;
  }
  .card .box ul li:hover a {
    color:#e91e63;
    transform:rotateY(360deg);
  }
</style>

<template>
  <div class="flex-wrapper">
    <div class="single-chart">
      <svg class="circular-chart orange" viewBox="0 0 36 36">
        <path class="circle-bg"
              d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"></path>
        <path class="circle"
              d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
              :stroke-dasharray="valor + ', 100'"></path>
        <text class="percentage" x="18" y="20.35">{{valor}}%</text>
      </svg>
    </div>
  </div>
</template>

<script>
  export default {
    name: "score",
    props: ['valor']
  }
</script>

<style scoped>
  .flex-wrapper {
    display: flex;
    flex-flow: row nowrap;
  }

  .single-chart {
    width: 100%;
    justify-content: space-around;
  }

  .circular-chart {
    display: block;
    margin: 10px auto;
    max-width: 80%;
    max-height: 250px;
  }

  .circle-bg {
    fill: none;
    stroke: #eee;
    stroke-width: 3.8;
  }

  .circle {
    fill: none;
    stroke-width: 2.8;
    stroke-linecap: round;
    animation: progress 1s ease-out forwards;
  }

  @keyframes progress {
    0% {
      stroke-dasharray: 0, 100;
    }
  }

  .circular-chart.orange .circle {
    stroke: #ff9f00;
  }


  .percentage {
    fill: #666;
    font-family: sans-serif;
    font-size: 0.5em;
    text-anchor: middle;
  }
</style>

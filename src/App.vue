<template>
  <div id="app">
    <div class="container">
      <Wheel />
      <Board style="margin-top:70px;" />
    </div>
  </div>
</template>

<script>
import Wheel from './components/Wheel.vue';
import Board from './components/Board.vue';

export default {
  name: 'app',
  components: {
    Wheel,
    Board
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}
body{
  background: #8E92B0;
  user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  -webkit-touch-callout: none;
  -o-user-select: none;
  -moz-user-select: none;
}

.container{
  margin-top: 30px;
}

@import "assets/css/layout.css";
</style>

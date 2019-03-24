<template>
  <div id="app">
    <Wheel />
    <Board />
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
}
</style>

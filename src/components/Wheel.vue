<template>
  <div id="wheel">
    <img src="../assets/wheel.svg" width="400" height="400" :style="spinStyle">
    <br>
    <p>Rotation: {{ currentSpinAnimated }}<br>
      Number: {{ currentNumber }}</p>
    <button @click="spin">Spin</button>
  </div>
</template>

<script>
export default{
  name: "Wheel",
  data(){
    return {
      currentSpin: 0,
      currentSpinAnimated: 0,
      rotateDirectionRight: true
    }
  },
  computed: {
    spinStyle(){
      return "transform: rotate(" + (this.currentSpinAnimated / 37 * 36) + "deg)";
    },
    currentNumber(){
      var map = {
        0: 0,
        1: 26,
        2: 3,
        3: 35,
        4: 12,
        5: 28,
        6: 7,
        7: 29,
        8: 18,
        9: 22,
        10: 9,
        11: 31,
        12: 14,
        13: 20,
        14: 1,
        15: 33,
        16: 16,
        17: 24,
        18: 5,
        19: 10,
        20: 23,
        21: 8,
        22: 30,
        23: 11,
        24: 36,
        25: 13,
        26: 27,
        27: 6,
        28: 34,
        29: 17,
        30: 25,
        31: 2,
        32: 21,
        33: 4,
        34: 19,
        35: 15,
        36: 32
      }
      return map[this.currentSpin];
    }
  },
  methods: {
    spin(){
      this.currentSpin = Math.floor(Math.random() * 37) * 10;
      requestAnimationFrame(this.rotateAnimation);
    },
    rotateAnimation(){
      //Add steps for animation
      if(this.rotateDirectionRight){
        this.currentSpinAnimated += 1;
      } else {
        this.currentSpinAnimated -= 1;
      }

      //If reached one cycle then reset
      if(this.rotateDirectionRight && this.currentSpinAnimated > 360){
        this.currentSpinAnimated = -10;
      }
      if(!this.rotateDirectionRight && this.currentSpinAnimated < 0){
        this.currentSpinAnimated = 370;
      }

      //Has reached the number?
      if(this.currentSpin != this.currentSpinAnimated){
        requestAnimationFrame(this.rotateAnimation);
      } else {
        this.currentSpin = Math.floor(this.currentSpinAnimated / 10);
        this.rotateDirectionRight = !this.rotateDirectionRight;
      }
    }
  }
}
</script>

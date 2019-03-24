<template>
  <div id="wheel">
    <div id="wheel_image">
      <div>
        \/
      </div>
      <img src="../assets/wheel.svg" id="wheel_svg" width="400" height="400" :style="spinStyle">
    </div>
    <div id="wheel_meta">
      <button @click="spin">Spin</button>
      <div style="width:100%;margin-top:30px;">
        <div class="field" :style="'background-color: ' + this.currentNumber.color">
          {{ currentNumber.number }}
        </div>
      </div>
      <div id="previousNumbers">
        <span v-for="(number, index) in this.lastNumbers && index < 10" :key="number">{{ index + ": " + number }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  name: "Wheel",
  data(){
    return {
      currentSpin: 0,
      currentSpinAnimated: 0,
      rotateDirectionLeft: true,
      rotateCycle: 3,
      rotateSpeed: 2,
      isSpinning: false,
      lastNumbers: [],
      number_map: {
        0: {
          number: 0,
          color: "green",
        },
        1: {
          number: 26,
          color: "black",
        },
        2: {
          number: 3,
          color: "red",
        },
        3: {
          number: 35,
          color: "black",
        },
        4: {
          number: 12,
          color: "red",
        },
        5: {
          number: 28,
          color: "black",
        },
        6: {
          number: 7,
          color: "red",
        },
        7: {
          number: 29,
          color: "black",
        },
        8: {
          number: 18,
          color: "red",
        },
        9: {
          number: 22,
          color: "black",
        },
        10: {
          number: 9,
          color: "red",
        },
        11: {
          number: 31,
          color: "black",
        },
        12: {
          number: 14,
          color: "red",
        },
        13: {
          number: 20,
          color: "black",
        },
        14: {
          number: 1,
          color: "red",
        },
        15: {
          number: 33,
          color: "black",
        },
        16: {
          number: 16,
          color: "red",
        },
        17: {
          number: 24,
          color: "black",
        },
        18: {
          number: 5,
          color: "red",
        },
        19: {
          number: 10,
          color: "black",
        },
        20: {
          number: 23,
          color: "red",
        },
        21: {
          number: 8,
          color: "black",
        },
        22: {
          number: 30,
          color: "red",
        },
        23: {
          number: 11,
          color: "black",
        },
        24: {
          number: 36,
          color: "red",
        },
        25: {
          number: 13,
          color: "black",
        },
        26: {
          number: 27,
          color: "red",
        },
        27: {
          number: 6,
          color: "black",
        },
        28: {
          number: 34,
          color: "red",
        },
        29: {
          number: 17,
          color: "black",
        },
        30: {
          number: 25,
          color: "red",
        },
        31: {
          number: 2,
          color: "black",
        },
        32: {
          number: 21,
          color: "red",
        },
        33: {
          number: 4,
          color: "black",
        },
        34: {
          number: 19,
          color: "red",
        },
        35: {
          number: 15,
          color: "black",
        },
        36: {
          number: 32,
          color: "red",
        },
      }
    }
  },
  computed: {
    spinStyle(){
      return "transform: rotate(" + (this.currentSpinAnimated / 37 * 36) + "deg)";
    },
    currentNumber(){
      if(!this.isSpinning){
        return this.number_map[this.currentSpin];
      } else {
        return {number: "...", color: "grey"};
      }
    }
  },
  methods: {
    spin(){
      this.currentSpin = Math.floor(Math.random() * 37) * 10;
      this.rotateCycle = 3;
      this.isSpinning = true;
      requestAnimationFrame(this.rotateAnimation);
    },
    rotateAnimation(){
      //Add steps for animation
      if(this.rotateDirectionLeft){
        this.currentSpinAnimated += 2;
      } else {
        this.currentSpinAnimated -= 2;
      }

      //If reached one cycle then reset
      if(this.rotateDirectionLeft && this.currentSpinAnimated > 360){
        this.currentSpinAnimated = -10;
      }
      if(!this.rotateDirectionLeft && this.currentSpinAnimated < 0){
        this.currentSpinAnimated = 370;
      }

      //Has reached the number?
      if(this.currentSpin != this.currentSpinAnimated){
        requestAnimationFrame(this.rotateAnimation);
      } else if(this.currentSpin == this.currentSpinAnimated && this.rotateCycle > 0){
        this.rotateCycle--;
        requestAnimationFrame(this.rotateAnimation);
      } else {
        //Found result
        this.isSpinning = false;
        this.currentSpin = Math.floor(this.currentSpinAnimated / 10);
        this.rotateDirectionLeft = !this.rotateDirectionLeft;
      }
    }
  },
  watch:{
    currentNumber(val){
      if(val.number !== "..."){
        this.lastNumbers.push(val);
      }
    }
  }
}
</script>

<style>
#wheel{
  display: grid;
  grid-template-columns: 50% 50%;
}

@media (min-width: 768px) and (max-width: 1100px) {
    #wheel {
        grid-template-columns: 50% 50%;
    }
}

@media (max-width: 767px) {
    #wheel {
        grid-template-columns: 100%;
    }
}

#wheel_svg{
  width: 75%;
  height: 75%;
}

#wheel_image{
  text-align: center;
  margin-top: 20px;
}

#wheel_meta {
  text-align: center;
  margin-top:20px;
}
</style>

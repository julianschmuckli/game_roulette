<template>
  <div id="board">
    <div class="outer_board">
      <table class="board">
        <tr>
          <td class="normal">&rarr;</td>
          <td class="red"><div>34</div></td>
          <td class="black"><div>31</div></td>
          <td class="black"><div>28</div></td>
          <td class="red"><div>25</div></td>
          <td class="black"><div>22</div></td>
          <td class="red"><div>19</div></td>
          <td class="red"><div>16</div></td>
          <td class="black"><div>13</div></td>
          <td class="black"><div>10</div></td>
          <td class="red"><div>7</div></td>
          <td class="black"><div>4</div></td>
          <td class="red"><div>1</div></td>
          <td class="green" rowspan="3"><div>0</div></td>
        </tr>
        <tr>
          <td class="normal">&rarr;</td>
          <td class="black"><div>35</div></td>
          <td class="red"><div>32</div></td>
          <td class="black"><div>29</div></td>
          <td class="black"><div>26</div></td>
          <td class="red"><div>23</div></td>
          <td class="black"><div>20</div></td>
          <td class="black"><div>17</div></td>
          <td class="red"><div>14</div></td>
          <td class="black"><div>11</div></td>
          <td class="black"><div>8</div></td>
          <td class="red"><div>5</div></td>
          <td class="black"><div>2</div></td>
        </tr>
        <tr>
          <td class="normal">&rarr;</td>
          <td class="red"><div>36</div></td>
          <td class="black"><div>33</div></td>
          <td class="red"><div>30</div></td>
          <td class="red"><div>27</div></td>
          <td class="black"><div>24</div></td>
          <td class="red"><div>21</div></td>
          <td class="red"><div>18</div></td>
          <td class="black"><div>15</div></td>
          <td class="red"><div>12</div></td>
          <td class="red"><div>9</div></td>
          <td class="black"><div>6</div></td>
          <td class="red"><div>3</div></td>
        </tr>
        <tr>
          <td class="nothing"></td>
          <td class="normal" colspan="4" data-name="twentyfiveToThirtysix" @click="setChip"><div>25 - 36</div><Chip :value="twentyfiveToThirtysix" /></td>
          <td class="normal" colspan="4" data-name="thirteenToTwentyfour" @click="setChip"><div>13 - 24</div><Chip :value="thirteenToTwentyfour" /></td>
          <td class="normal" colspan="4" data-name="oneToTwelve" @click="setChip"><div>1 - 12</div><Chip :value="oneToTwelve" /></td>
        </tr>
        <tr>
          <td class="nothing"></td>
          <td class="normal" colspan="2" data-name="nineteenToThirtysix" @click="setChip"><div>19 - 36</div><Chip :value="nineteenToThirtysix" /></td>
          <td class="normal" colspan="2" data-name="impair" @click="setChip"><div>Impair</div><Chip :value="impair" /></td>
          <td class="normal black" colspan="2" data-name="black" @click="setChip"><div>Black</div><Chip :value="black" /></td>
          <td class="normal red" colspan="2" data-name="red" @click="setChip"><div>Red</div><Chip :value="red" /></td>
          <td class="normal" colspan="2" data-name="pair" @click="setChip"><div>Pair</div><Chip :value="pair" /></td>
          <td class="normal" colspan="2" data-name="oneToEighteen" @click="setChip"><div>1 - 18</div><Chip :value="oneToEighteen" /></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { GameStore } from "../services/store.js";
import Chip from "../components/Chip";

export default {
  name: "Board",
  data(){
    return {
      direct_numbers: [], //When placed on just one full number
      black: 0, //Placed on black
      red: 0, //Placed on red
      pair: 0, //Placed on pair
      impair: 0, //Placed on impair
      oneToEighteen: 0, //Placed 1 - 18
      nineteenToThirtysix: 0, //Placed 19 -36
      oneToTwelve: 0, //Placed 1 - 12
      thirteenToTwentyfour: 0, //Placed 13 - 24
      twentyfiveToThirtysix: 0 //Placed 25 - 36
    }
  },
  components:{
    Chip
  },
  computed: {
    currentNumber(){
      return GameStore.currentNumber;
    }
  },
  watch: {
    currentNumber(val){
      this.evaluate(val);
    }
  },
  methods: {
    evaluate(val){
      var color = val.color;
      var number = val.number;

      //Colors
      switch(color){
        case "black":
          this.red = 0;
          this.black = this.black * 2;
          break;
        case "red":
          this.black = 0;
          this.red = this.red * 2;
      }

      //1 - 18 and 19 - 36
      if(number >= 1 && number <= 18) {
        this.nineteenToThirtysix = 0;
        this.oneToEighteen = this.oneToEighteen * 2;
      } else if(number >= 19 && number <= 36){
        this.oneToEighteen = 0;
        this.nineteenToThirtysix = this.nineteenToThirtysix * 2;
      }

      //Impair and Pair
      if(number != 0 && number % 2 == 0){ //Pair
        this.impair = 0;
        this.pair = this.pair * 2;
      } else if (number != 0 && number % 2 == 1) { //Impair
        this.pair = 0;
        this.impair = this.impair * 2;
      }

      //1 - 12 / 13 - 24 / 25 - 36
      if(number >= 1 && number <= 12) {
        this.thirteenToTwentyfour = 0;
        this.twentyfiveToThirtysix = 0;
        this.oneToTwelve = this.oneToTwelve * 3;
      } else if (number >= 13 && number <= 24){
        this.oneToTwelve = 0;
        this.twentyfiveToThirtysix = 0;
        this.thirteenToTwentyfour = this.thirteenToTwentyfour * 3;
      } else if (number >= 25 && number <= 36){
        this.oneToTwelve = 0;
        this.thirteenToTwentyfour = 0;
        this.twentyfiveToThirtysix = this.twentyfiveToThirtysix * 3;
      }


    },
    setChip(e){
      var element = e.target;
      if(element.nodeName === "DIV"){
        element = element.parentElement;
      }
      var type = element.getAttribute("data-name");

      this[type]++; //Increase the chip size
    }
  }
}
</script>

<style>
.outer_board{
  overflow-y: auto;
  width: 100%;
}

.board td {
  position: relative;
  border: white 2px solid;
  padding: 10px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
}

.board td.nothing{
  border: none;
  cursor: default;
}

.board td:not(.normal) {
  transform: rotate(90deg);
}

.board td>div {
  min-width: 20px;
}

.board{
  border-collapse: collapse;
  background-color: #BBA8A1;
  margin-left: auto;
  margin-right: auto;
}
.red{
  color: red;
}
.black{
  color: black;
}
.green{
  color: green;
}
</style>

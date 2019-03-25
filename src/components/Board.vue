<template>
  <div id="board">
    <div class="outer_board">
      <table class="board">
        <tr>
          <td class="normal" data-name="lineOne" @click="setChip"><div>&rarr;</div><Chip :value="lineOne" /></td>
          <td class="red"><div>34</div></td>
          <td class="black"><div>31</div></td>
          <td class="black"><div>28</div></td>
          <td class="red"><div>25</div></td>
          <td class="black" data-name="twentytwo" @click="setChip"><div>22</div></td>
          <td class="red" data-name="nineteen" @click="setChip"><div>19</div></td>
          <td class="red" data-name="sixteen" @click="setChip"><div>16</div></td>
          <td class="black" data-name="thirteen" @click="setChip"><div>13</div></td>
          <td class="black" data-name="ten" @click="setChip"><div>10</div></td>
          <td class="red" data-name="seven" @click="setChip"><div>7</div></td>
          <td class="black" data-name="four" @click="setChip"><div>4</div></td>
          <td class="red" data-name="one" @click="setChip"><div>1</div><Chip :value="one" /></td>
          <td class="green" rowspan="3" data-name="zero" @click="setChip"><div>0</div><Chip :value="zero" /></td>
        </tr>
        <tr>
          <td class="normal" data-name="lineTwo" @click="setChip">&rarr;<Chip :value="lineTwo" /></td>
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
          <td class="normal" data-name="lineThree" @click="setChip">&rarr;<Chip :value="lineThree" /></td>
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
      //When placed on just one full number
      zero: 0,
      one: 0,
      two: 0,
      three: 0,
      four: 0,
      five: 0,
      six: 0,
      seven: 0,
      eight: 0,
      nine: 0,
      ten: 0,
      eleven: 0,
      twelve: 0,
      thirteen: 0,
      fourteen: 0,
      fifteen: 0,
      sixteen: 0,
      seventeen: 0,
      eighteen: 0,
      nineteen: 0,
      twenty: 0,
      twentyone: 0,
      twentytwo: 0,
      twentythree: 0,
      twentyfour: 0,
      twentyfive: 0,
      twentysix: 0,
      twentyseven: 0,
      twentyeight: 0,
      twentynine: 0,
      thirty: 0,
      thirtyone: 0,
      thirtytwo: 0,
      thirtythree: 0,
      thirtyfour: 0,
      thirtyfive: 0,
      thirtysix: 0,
      //Others
      black: 0, //Placed on black
      red: 0, //Placed on red
      pair: 0, //Placed on pair
      impair: 0, //Placed on impair
      oneToEighteen: 0, //Placed 1 - 18
      nineteenToThirtysix: 0, //Placed 19 -36
      oneToTwelve: 0, //Placed 1 - 12
      thirteenToTwentyfour: 0, //Placed 13 - 24
      twentyfiveToThirtysix: 0, //Placed 25 - 36
      lineOne: 0,
      lineTwo: 0,
      lineThree: 0
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
          break;
        default:
          this.black = this.black / 2;
          this.red = this.red / 2;
      }

      //1 - 18 and 19 - 36
      if(number >= 1 && number <= 18) {
        this.nineteenToThirtysix = 0;
        this.oneToEighteen = this.oneToEighteen * 2;
      } else if(number >= 19 && number <= 36){
        this.oneToEighteen = 0;
        this.nineteenToThirtysix = this.nineteenToThirtysix * 2;
      } else {
        this.oneToEighteen = 0;
        this.nineteenToThirtysix = 0;
      }

      //Impair and Pair
      if(number != 0 && number % 2 == 0){ //Pair
        this.impair = 0;
        this.pair = this.pair * 2;
      } else if (number != 0 && number % 2 == 1) { //Impair
        this.pair = 0;
        this.impair = this.impair * 2;
      } else {
        this.pair = this.pair / 2;
        this.impair = this.impair / 2;
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
      } else {
        this.oneToTwelve = 0;
        this.thirteenToTwentyfour = 0;
        this.twentyfiveToThirtysix = 0;
      }

      //Lines
      if(number != 0 && number % 3 == 0){ //Line of 36 - 3
        this.lineOne = 0;
        this.lineTwo = 0;
        this.lineThree = this.lineThree * 3;
      } else if(number != 0 && number % 3 == 1){ //Line of 34 - 1
        this.lineThree = 0;
        this.lineTwo = 0;
        this.lineOne = this.lineOne * 3;
      } else if(number != 0 && number % 3 == 2){ //Line of 35 - 2
        this.lineOne = 0;
        this.lineThree = 0;
        this.lineTwo = this.lineTwo * 3;
      } else {
        this.lineOne = 0;
        this.lineThree = 0;
        this.lineTwo = 0;
      }

    },
    resetNaturalNumbers(){
      this.zero=0;
      this.one=0;
      this.two=0;
      this.three=0;
      this.four=0;
      this.five=0;
      this.six=0;
      this.seven=0;
      this.eight=0;
      this.nine=0;
      this.ten=0;
      this.eleven=0;
      this.twelve=0;
      this.thirteen=0;
      this.fourteen=0;
      this.fifteen=0;
      this.sixteen=0;
      this.seventeen=0;
      this.eighteen=0;
      this.nineteen=0;
      this.twenty=0;
      this.twentyone=0;
      this.twentytwo=0;
      this.twentythree=0;
      this.twentyfour=0;
      this.twentyfive=0;
      this.twentysix=0;
      this.twentyseven=0;
      this.twentyeight=0;
      this.twentynine=0;
      this.thirty=0;
      this.thirtyone=0;
      this.thirtytwo=0;
      this.thirtythree=0;
      this.thirtyfour=0;
      this.thirtyfive=0;
      this.thirtysix=0;
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

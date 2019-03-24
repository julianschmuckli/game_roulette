<template>
  <div id="board">
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
        <td class="normal" colspan="4"><div>25 - 36</div></td>
        <td class="normal" colspan="4"><div>13 - 24</div></td>
        <td class="normal" colspan="4"><div>1 - 12</div></td>
      </tr>
      <tr>
        <td class="nothing"></td>
        <td class="normal" colspan="2"><div>19 - 36</div></td>
        <td class="normal" colspan="2"><div>Impair</div></td>
        <td class="normal black" colspan="2"><div>Black</div></td>
        <td class="normal red" colspan="2"><div>Red</div></td>
        <td class="normal" colspan="2"><div>Pair</div></td>
        <td class="normal" colspan="2"><div>1 - 18</div></td>
      </tr>
    </table>
  </div>
</template>

<style>
.board td {
  border: white 2px solid;
  padding: 10px;
  font-weight: bold;
  text-transform: uppercase;
}

.board td.nothing{
  border:none;
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
}
.red{
  color: red;
}
.black{
  color: black;
}
.green{
  color:green;
}
</style>

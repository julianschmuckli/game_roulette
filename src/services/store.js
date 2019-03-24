import Vue from 'vue';

export const GameStore = Vue.observable({
  currentNumber: undefined
});

export const GameStoreChanger = {
  setCurrentNumber(number){
    GameStore.currentNumber = number;
  }
};

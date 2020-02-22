import Vue from 'vue';

export const GameStore = Vue.observable({
  currentNumber: undefined,
  currentBalance: 50
});

export const GameStoreChanger = {
  setCurrentNumber(number){
    GameStore.currentNumber = number;
  },

  setNewBalance(balance) {
    GameStore.currentBalance = balance;
  }
};

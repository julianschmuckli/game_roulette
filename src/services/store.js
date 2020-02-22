import Vue from 'vue';

export const GameStore = Vue.observable({
  currentNumber: undefined,
  currentBalance: localStorage.getItem("balance") ? localStorage.getItem("balance") : 50
});

export const GameStoreChanger = {
  setCurrentNumber(number){
    GameStore.currentNumber = number;
  },

  setNewBalance(balance) {
    GameStore.currentBalance = balance;
    localStorage.setItem("balance", balance);
  }
};

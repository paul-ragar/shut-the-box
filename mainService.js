angular.module('myApp').service('mainService', function($http) {

  this.numbers = [{
      value: 1,
      class: "number-cards"
    }, {
      value: 2,
      class: "number-cards"
    }, {
      value: 3,
      class: "number-cards"
    }, {
      value: 4,
      class: "number-cards"
    }, {
      value: 5,
      class: "number-cards"
    }, {
      value: 6,
      class: "number-cards"
    }, {
      value: 7,
      class: "number-cards"
    }, {
      value: 8,
      class: "number-cards"
    }, {
      value: 9,
      class: "number-cards"
  }];

  this.players = [{
    name: "Player 1",
    roundOne: null,
    roundTwo: null,
    roundThree: null,
    total: null
  }, {
    name: "Player 2",
    roundOne: null,
    roundTwo: null,
    roundThree: null,
    total: null
  }];

  this.diceImages = [{
    image: "./Dice-svg/die-1.svg"
  }, {
    image: "./Dice-svg/die-2.svg"
  }, {
    image: "./Dice-svg/die-3.svg"
  }, {
    image: "./Dice-svg/die-4.svg"
  }, {
    image: "./Dice-svg/die-5.svg"
  }, {
    image: "./Dice-svg/die-6.svg"
  }];

});

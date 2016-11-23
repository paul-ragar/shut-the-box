angular.module('myApp').controller('mainCtrl', function(mainService, $scope) {

  $scope.numbers = mainService.numbers;
  $scope.players = mainService.players;
  $scope.diceImages = mainService.diceImages;
  $scope.diOne = {'background-image': 'url('+$scope.diceImages[0].image+')'};
  $scope.diTwo = {'background-image': 'url('+$scope.diceImages[0].image+')'};
  $scope.rolled = true;
  $scope.accept = true;
  $scope.turn = "player 1";
  $scope.roundTotal = null;
  $scope.cardSum = 0;
  $scope.array = [];
  $scope.playerTotalScore = false;
  $scope.win = false;
  $scope.winner = null;

  $scope.rollDice = function() {
    var dieOne = Math.floor(Math.random() * ((6 - 1) + 1) + 1);
    var dieTwo = Math.floor(Math.random() * ((6 - 1) + 1) + 1);
    $scope.diOne = {'background-image': 'url('+$scope.diceImages[dieOne - 1].image+')'};
    $scope.diTwo = {'background-image': 'url('+$scope.diceImages[dieTwo - 1].image+')'};
    $scope.rollTotal = dieOne + dieTwo;
    $scope.rolled = false;
    console.log("Roll Total: " + $scope.rollTotal);
  };
  $scope.sumCards = function(value, index) {
    if ($scope.numbers[index].class == "used-cards") {
      return false;
    } else if ($scope.numbers[index].class == "selected-cards"){
      $scope.cardSum -= value;
      $scope.numbers[index].class = "number-cards";
      $scope.accept = true;
    } else {
      $scope.cardSum += value;
      if ($scope.cardSum > $scope.rollTotal) {
        $scope.cardSum -= value;
        return false;
      } else if ($scope.cardSum === $scope.rollTotal) {
        $scope.accept = false;
        $scope.numbers[index].class = "selected-cards";

      } else {
        $scope.numbers[index].class = "selected-cards";
      }
    }
  }

  $scope.acceptTurn = function() {
    for (var i = 0; i < $scope.numbers.length; i++) {
      if ($scope.numbers[i].class == "selected-cards") {
        $scope.numbers[i].class = "used-cards";
      }
    }
    $scope.rollTotal = 0;
    $scope.cardSum = 0;
    $scope.array = [];
    $scope.rolled = true;
    $scope.accept = true;
  }

  $scope.endTurn = function() {
    for (var i = 0; i < $scope.numbers.length; i++) {
      if ($scope.numbers[i].class == "number-cards") {
        $scope.roundTotal += $scope.numbers[i].value;
        if ($scope.roundTotal == 0) {
          $scope.roundTotal = "STB!"
        }
      }
    }
    if ($scope.turn == "player 1"){
      $scope.turn = "player 2";
      if ($scope.players[0].roundOne === null){
        $scope.players[0].roundOne = $scope.roundTotal;
        $scope.players[0].total += $scope.roundTotal;
      } else if ($scope.players[0].roundTwo === null){
        $scope.players[0].roundTwo = $scope.roundTotal;
        $scope.players[0].total += $scope.roundTotal;
      } else if ($scope.players[0].roundThree === null){
        $scope.players[0].roundThree = $scope.roundTotal;
        $scope.players[0].total += $scope.roundTotal;
      }

    } else {
      $scope.turn = "player 1";
      if ($scope.players[1].roundOne === null){
        $scope.players[1].roundOne = $scope.roundTotal;
        $scope.players[1].total += $scope.roundTotal;
      } else if ($scope.players[1].roundTwo === null){
        $scope.players[1].roundTwo = $scope.roundTotal;
        $scope.players[1].total += $scope.roundTotal;
      } else if ($scope.players[1].roundThree === null){
        $scope.players[1].roundThree = $scope.roundTotal;
        $scope.players[1].total += $scope.roundTotal;
        $scope.playerTotalScore = true;
        if ($scope.players[0].total < $scope.players[1].total){
          $scope.winner = "1";
          $scope.win = true;
        } else {
          $scope.winner = "2";
          $scope.win = true;
        }
      }
    }
    for (var i = 0; i < $scope.numbers.length; i++) {
      $scope.numbers[i].class = "number-cards"
    }
    $scope.rolled = true;
    $scope.diOne = {'background-image': 'url('+$scope.diceImages[0].image+')'};
    $scope.diTwo = {'background-image': 'url('+$scope.diceImages[0].image+')'};
    $scope.roundTotal = 0;

  }

  $scope.newGame = function() {
    for (var i = 0; i < $scope.players.length; i++) {
      $scope.players[i].roundOne = null;
      $scope.players[i].roundTwo = null;
      $scope.players[i].roundThree = null;
      $scope.players[i].total = null;
    }
    for (var i = 0; i < $scope.numbers.length; i++) {
      $scope.numbers[i].class = "number-cards"
    }
    $scope.rolled = true;
    $scope.diOne = {'background-image': 'url('+$scope.diceImages[0].image+')'};
    $scope.diTwo = {'background-image': 'url('+$scope.diceImages[0].image+')'};
    $scope.roundTotal = 0;
    $scope.playerTotalScore = false;
    $scope.win = false;
  }



});

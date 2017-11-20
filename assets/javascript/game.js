//psuedo goding
// 4 crystal 
// random number to start game is between 19-120
// every crystal has a random number between 1 - 12
// a new random number is generated every time win or lose
// when we click a crystal is should add with the previous 
// until it equals the total score you win
// if it is not equal you gain 1 lose couter and reset
// if it is equal, then win counter goes up 


var loseCounter = 0;
var winCounter = 0;
var totalScore = 0;

$(document).ready(function() {
  
  //random number to start game between 19-120
  var randNum = Math.floor(Math.random() * 120) + 19;
  $('#numberToMatch').text('Number to Match: ' + randNum);

//random numbers for each crystal
  var red = Math.floor(Math.random() * 12) + 1;
  var blue = Math.floor(Math.random() * 12) + 1;
  var green = Math.floor(Math.random() * 12) + 1;
  var yellow = Math.floor(Math.random() * 12) + 1;

  
//on click for each crystal with random numbers 
  $('#red').on('click', function() {
    totalScore = totalScore + red;
    console.log(totalScore + ' this is your score')
    $('#total-score').text(totalScore);
    win();
    lose();
  });

  $('#blue').on('click', function() {
    totalScore = totalScore + blue;
    console.log(totalScore + ' this is your score')
    $('#total-score').text(totalScore);
    win();
    lose();
  });

  $('#green').on('click', function() {
    totalScore = totalScore + green;
    console.log(totalScore + ' this is your score')
    $('#total-score').text(totalScore);
    win();
    lose();
  });

  $('#yellow').on('click', function() {
    totalScore = totalScore + yellow;
    console.log(totalScore + ' this is your score')
    $('#total-score').text(totalScore);
    win();
    lose();
  });

// win/lose counters 

    function win() {
      if(totalScore === randNum) {
        alert('You Win!');
        winCounter++;
        $('#win-counter').text('Wins: ' + winCounter);
        reset();
      };    
    };

  function lose() {
    if(totalScore > randNum) {
      alert('You lose');
      loseCounter++;
      $('#lose-counter').text('Losses: ' + loseCounter);
      reset();
    };
  };

// Reset 
  function reset() {
    randNum = Math.floor(Math.random() * 120) + 19;
    $('#numberToMatch').text('Number to Match: ' + randNum);
  
    totalScore = 0;
    $('#total-score').text(totalScore);
}
});


//backend
var playerOne;
var playerTwo;
var activePlayer = true;
playerOne = activePlayer;

// function whoIsOnFirst() {
//   if (playerOne === true) {
//     playerOne = activePlayer;
//   } else {
//     playerTwo = activePlayer;
//   }
// }

 function Player(roundScore, totalScore, playerTurn){
  this.roundScore = round;
  this.totalScore = total;
  this.playerTurn = turn;
}

// Player.prototype.playerTurn() {
//
// }


 // var roundScore = 0;
 var totalScore = 0;
 var playerOneTotal = 0;
 var playerTwoTotal = 0;

 function roll() {
   var roundScore = 0;
   randomNumber();
    // alert("in roll");
     var random = randomNumber();
  //   alert("random # in roll: " + random);
     if (random !==1) {
    //   alert("over 1");
       roundScore += random;
    //   alert("roundScore: " + roundScore);
       totalScore += roundScore;
       $("#user1-round").text(roundScore);
       $("#user1-total").text(totalScore);
     } else {
       alert("you lost your turn");
       roundScore = 0;
    //   alert("roundScore: " + roundScore);
       totalScore += roundScore;
       $("#user1-round").text(roundScore);
       $("#user1-total").text(totalScore);
     }
     if(totalScore >= 20)
     alert("Congrats you won!")
 }

  function hold() {
    //var score = roll += roundScore;
     //alert ("Hold. Score is " + totalScore);
    //  whoIsOnFirst();
    //  var active = whoIsOnFirst();
      playerTwo = activePlayer;
      roundScore = 0;
      $("#user1-round").text(roundScore);
      alert(playerTwo);
  }

  //randomizer
  function randomNumber() {
    // alert("2");
    var random =  Math.floor((Math.random()* 6) +1);
    console.log(random);
    //alert("in random");
    return(random);

}


//ui
$(document).ready(function(){
   $("#roll").click(function(){
     event.preventDefault();
     roll();
   });
   $("#hold").click(function(){
     hold();
   });
  //  $("#random").click(function(){
  //    event.preventDefault();
  //   //  alert("!");
  //    randomNumber();
  //  });
});

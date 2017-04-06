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
  this.playerTurn =turn;
}

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

    if (playerOne = activePlayer) {
     if (random !==1) {
    //   alert("over 1");
       roundScore += random;
    //   alert("roundScore: " + roundScore);
       playerOneTotal += roundScore;
       $("#user1-round").text(roundScore);
       $("#user1-total").text(playerOneTotal);
     } else {
       alert("you lost your turn");
       roundScore = 0;
       hold();
    //   alert("roundScore: " + roundScore);
       playerOneTotal += roundScore;
       $("#user1-round").text(roundScore);
       $("#user1-total").text(playerOneTotal);
     }
     if(playerOneTotal >= 20)
     alert("Congrats you won!")
 } else {
   if (random !==1) {
 //   alert("over 1");
    roundScore += random;
 //   alert("roundScore: " + roundScore);
    playerTwoTotal += roundScore;
    $("#user2-round").text(roundScore);
    $("#user2-total").text(playerTwoTotal);
  } else {
    alert("you lost your turn");
    roundScore = 0;
 //   alert("roundScore: " + roundScore);
    playerOneTotal += roundScore;
    $("#user2-round").text(roundScore);
    $("#user2-total").text(playerTwoTotal);
  }
  if(playerOneTotal >= 20)
  alert("Congrats you won!")

 }
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

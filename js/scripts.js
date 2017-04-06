//backend

var playerOne;
playerOne = new Player(0, 0);
var playerTwo;
playerTwo = new Player(0, 0);
// playerOne = true;

 function Player(roundScore, totalScore) {
  this.roundScore = roundScore;
  this.totalScore = totalScore;
}


 var oneTotalScore = 0;
 var twoTotalScore = 0;

 function rollOne() {
   var roundScoreOne = 0;
   randomNumber();
    // alert("in roll");
     var random = randomNumber();
  //   alert("random # in roll: " + random);
     if (random !==1) {
    //   alert("over 1");
       roundScoreOne += random;
    //   alert("roundScore: " + roundScore);
       oneTotalScore += roundScoreOne;
       $("#user1-round").text(roundScoreOne);
       $("#user1-total").text(oneTotalScore);
     } else {
       alert("Player 2 it's your turn");
    //    roundScore += random;

     }
     if(oneTotalScore >= 20) {
     alert("Congrats, Player 1 you won!")
     }
 }
 function rollTwo() {
   var roundScoreTwo = 0;
   randomNumber();
    // alert("in roll");
     var random = randomNumber();
  //   alert("random # in roll: " + random);
     if (random !==1) {
    //   alert("over 1");
       roundScoreTwo += random;
    //   alert("roundScore: " + roundScore);
       twoTotalScore += roundScoreTwo;
       $("#user2-round").text(roundScoreTwo);
       $("#user2-total").text(twoTotalScore);
     } else {
       alert("Player 1 it's your turn");
       roundScoreTwo += random;

     }

    if (twoTotalScore >=20) {
     alert("Congrats, Player 2 you won!")
     }
 }


  function holdOne() {
      var roundScoreOne = 0;
      oneTotalScore += roundScoreOne;

    //  $("#user1-round").text(roundScoreOne);

    };

  function holdTwo() {
        roundScoreTwo = 0;
        twoTotalScore += roundScore;

      //  $("#user2-round").text(roundScoreTwo);
    };

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

   $("#rollOne").click(function(){
     event.preventDefault();
     rollOne();
   });
   $("#holdOne").click(function(){
     event.preventDefault();
     holdOne();
   });
   $("#rollTwo").click(function(){
     event.preventDefault();
   rollTwo();
   });
   $("#holdTwo").click(function(){
     event.preventDefault();
   holdTwo();
   });
});

//backend
//
// var playerOne;
// playerOne = new Player(0, 0);
// var playerTwo;
// playerTwo = new Player(0, 0);
// playerOne = true;
//
//  function Player(roundScore, totalScore) {
//   this.roundScore = roundScore;
//   this.totalScore = totalScore;
// }

// function Name (name) {
//   this.playerName = name;
// }
//
// var newName = new Name(inputNameOne, inputNameOne);

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
       clearRoundScoreTwo();
     }
     if(oneTotalScore >= 100) {
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
       clearRoundScoreOne();

     }

    if (twoTotalScore >=100) {
     alert("Congrats, Player 2 you won!")
     }
 }

  function holdOne() {
      var roundScoreOne = 0;
      oneTotalScore += roundScoreOne;
     clearRoundScoreOne();

    };

  function holdTwo() {
        var roundScoreTwo = 0;
        twoTotalScore += roundScoreTwo;
        clearRoundScoreTwo();
    };

    function clearRoundScoreOne() {
       $("#user1-round").text("0");

    };

    function clearRoundScoreTwo() {
       $("#user2-round").text("0");
    };


  //randomizer
  function randomNumber() {
    // alert("2");
    var random =  Math.floor((Math.random()* 6) +1);
    console.log(random);
    //alert("in random");
    // if (random = 1) {
    //   $("#dice")
    // }
    return(random);
}

//UI
$(document).ready(function(){
   $("form#form-one").submit(function(event) {
     event.preventDefault();
    var inputNameOne = $("#name1").val();
    var inputNameTwo = $("#name2").val();

    $("#form-one").hide();
    // alert(inputNameOne);
    // alert(inputNameTwo);
    $("#player1").hide();
    $("#player1name").show(inputNameOne);



  });
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

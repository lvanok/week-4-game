<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Inception</title>
    <script type="text/javascript" src="https://code.jquery.com/jquery-2.2.0.min.js"></script>

<style> 
$(document).ready(function() {
	var randomNum = Math.floor(Math.random() * 120 - 19 + 1) + 19 ;
	console.log("Random Number = "+randomNum);
	var userScore = 0;
	var crystalRunningTot = 0;
	var blueValue = Math.floor((Math.random() * 12) + 1);
	console.log("Blue Value = "+blueValue);
	var redValue = Math.floor((Math.random() * 12) + 1);
	console.log("Red Value = "+redValue);
	var greenValue = Math.floor((Math.random() * 12) + 1);
	console.log("Green Value = "+greenValue);
	var yellowValue = Math.floor((Math.random() * 12) + 1);
	console.log("Yellow Value = "+yellowValue);
});
	var wins = 0;
	var losses = 0;

	$(".buttons").on("click", function() {
	  var currentButton=$(this)[0];
	  console.log(currentButton.id);
	});

	  if(currentButton.id == "blue"){
	    userScore = userScore + blueValue;
	    console.log("Blue clicked. User Score is now = "+userScore);
	  }else if(currentButton.id == "red"){
	    userScore = userScore + redValue;
	    console.log("Red clicked. User Score is now = "+userScore);
	  }else if(currentButton.id == "green"){
	    userScore = userScore + greenValue;
	    console.log("Green clicked. User Score is now = "+userScore);
	  }else if(currentButton.id == "yellow"){
	    userScore = userScore + yellowValue;
	    console.log("Yellow clicked. User Score is now = "+userScore);
	  

	  $('#scoreBoard').text("Your total score is: " +userScore);

	  if(userScore == randomNum){
	    alert("You Win!");
	    wins++
	    $('#winBoard').text(wins);
	    console.log("Wins:   " + wins)
	    userScore = 0;
	    blueValue = Math.floor((Math.random() * 12) + 1);
	    console.log("Blue Value = "+blueValue);
	    redValue = Math.floor((Math.random() * 12) + 1);
	    console.log("Red Value = "+redValue);
	    greenValue = Math.floor((Math.random() * 12) + 1);
	    console.log("Green Value = "+greenValue);
	    yellowValue = Math.floor((Math.random() * 12) + 1);
	    console.log("Yellow Value = "+yellowValue);
	    randomNum = Math.floor(Math.random() * 120 - 19 + 1) + 19 ;
	    console.log (randomNum);
	  }else if(userScore > randomNum) {
	    alert("You Lose!");
	    losses++
	    $('#lossBoard').text(losses);
	    console.log("Losses:   " + losses);
	    userScore = 0;
	    blueValue = Math.floor((Math.random() * 12) + 1);
	    console.log("Blue Value = "+blueValue);
	    redValue = Math.floor((Math.random() * 12) + 1);
	    console.log("Red Value = "+redValue);
	    greenValue = Math.floor((Math.random() * 12) + 1);
	    console.log("Green Value = "+greenValue);
	    yellowValue = Math.floor((Math.random() * 12) + 1);
	    console.log("Yellow Value = "+yellowValue);
	    randomNum = Math.floor(Math.random() * 120 - 19 + 1) + 19 ;
	    console.log (randomNum);
	   });

	</style> 
	</head>
	</html>
 


var numberRand = 0;
var endOfGame = false;	
var playLoses = false;
var playerScore = 0;
var wins=0;
var losses=0;


var crystal = {
	red : {
		power :0,
		imgsrc : "red.png",

	},

	blue : {
		power : 0,
		imgsrc : "blue.png",
	},
	
	yellow : {
		power : 0,
		imgsrc : "yellow.png",
	},

	green : {
		power : 0,
		imgsrc : "green.png",
	},

};



$(document).ready(function(){

	
	$('#red').append('<img src=' + crystal.red.imgsrc + '>');
	$('#red').click(function(){
		if (endOfGame == false){
		playerScore=playerScore + crystal.red.power;
		checkScore();
		$('#playerScore').html(playerScore);
		};
	})


	$('#blue').append('<img src=' + crystal.blue.imgsrc + '>');
	$('#blue').click(function(){
		if (endOfGame == false){
		playerScore=playerScore + crystal.blue.power;
		checkScore();
		$('#playerScore').html(playerScore);
		};
	})


	$('#yellow').append('<img src=' + crystal.yellow.imgsrc + '>');  
	$('#yellow').click(function(){
		if (endOfGame == false){
		playerScore=playerScore + crystal.yellow.power;
		checkScore();
		$('#playerScore').html(playerScore);
		};
	})


	$('#green').append('<img src=' + crystal.green.imgsrc + '>');
	$('#green').click(function(){
		if (endOfGame == false){
		playerScore=playerScore + crystal.green.power;
		checkScore();
		$('#playerScore').html(playerScore);
		};
	})


	function checkScore(){
				$('#playerScore').html(playerScore);
				if (playerScore == numberRand){
					endOfGame = true;
					wins++;
				$('#announce').text("You Win!!");
						
					}else if (playerScore > numberRand){
						Playerloses = true;
							endOfGame = true;
							losses++;
							$('#announce').text("You Lose!");
							
						};
						
						if (endOfGame){
						$('#wins').html("Wins: " + wins);
						$('#losses').html("Losses: "+losses);
						setTimeout(startgame,2500);
						}
	}

	function startgame(){
			endOfGame = false;	
			playLoses = false;
			playerScore = 0
			numberRand = Math.round(Math.random() * (120 - 19)) + 19;
			
			crystal.red.power = Math.round(Math.random() * (12-1)) + 1;
			crystal.blue.power = Math.round(Math.random() * (12-1)) + 1;
			crystal.yellow.power = Math.round(Math.random() * (12-1)) + 1;
			crystal.green.power = Math.round(Math.random() * (12-1)) + 1;
			
			$('#playerScore').html(playerScore);
			$('#numberRand').html(numberRand);
			$('#announce').text("New Game!");
			$('#wins').html("Wins: " + wins);
			$('#losses').html("Losses: "+losses);
	}



startgame();

});
var hand1 
var hand2 
var playerguess 
var playertotal
var gamecount = 0
var wincount = 0
var loosecount = 0
var highscore 

function lefthand1() {
	hand1 = 0
	document.getElementById("playerhand1").innerHTML = hand1
}

function lefthand2() {
	hand1 = 5
	document.getElementById("playerhand1").innerHTML = hand1
}

function righthand1() {
	hand2 = 0
	document.getElementById("playerhand2").innerHTML = hand2
}

function righthand2() {
	hand2 = 5
	document.getElementById("playerhand2").innerHTML = hand2
}

function bet0() {
	playerguess = 0
	document.getElementById("playerguess").innerHTML = "Player Guess:  " + playerguess
}

function bet5() {
	playerguess = 5
	document.getElementById("playerguess").innerHTML = "Player Guess:  " + playerguess
}

function bet10() {
	playerguess = 10
	document.getElementById("playerguess").innerHTML = "Player Guess:  " + playerguess
}

function bet15() {
	playerguess = 15
	document.getElementById("playerguess").innerHTML = "Player Guess:  " + playerguess
}

function bet20() {
	playerguess = 20
	document.getElementById("playerguess").innerHTML = "Player Guess:  " + playerguess
}



var random = [0, 5];


	
function playFunction(){
	var random1 = random[Math.floor(Math.random()*random.length)];
	var random2 = random[Math.floor(Math.random()*random.length)];
	var gametotal;
	
	var i;
	document.getElementById("handrandom1").innerHTML = random1;
	document.getElementById("handrandom2").innerHTML = random2;
	playertotal = hand1 + hand2;
	document.getElementById("playertotal").innerHTML = "Player Total:  " + playertotal;
	gametotal = playertotal + random1 + random2;
	if (gametotal == playerguess & gamecount < 10){
		wincount = Number(wincount)+1
		gamecount = Number(gamecount) +1;
		document.getElementById("wincount").innerHTML =  wincount;
		document.getElementById("loosecount").innerHTML =  loosecount;
	}else if(gametotal !== playerguess & gamecount <10){
		loosecount = Number(loosecount)+1;
		gamecount = Number(gamecount) +1;
		document.getElementById("wincount").innerHTML =  wincount;
		document.getElementById("loosecount").innerHTML =  loosecount;
	} else if (gamecount >=10){ 
		var gameend = alert("Game finished\n" + "Your score: \n Win count: " + wincount + " Thank you for playing the game~\nPlease restart if you wish to play again");
	}
	
	console.log(random1,random2,gametotal,wincount,loosecount, gamecount);
}
function restartFunction(){
	if (gamecount === 10){
		gamecount = 0;
		wincount = 0;
		loosecount = 0;
		document.getElementById("wincount").innerHTML =  wincount;
		document.getElementById("loosecount").innerHTML =  loosecount;
		highscoreFunction()
	} else {
		var remain = 10-gamecount
		var warning = window.confirm("There are still " + remain + " rounds, if you wish to restart, the remaining round will be counted as lost!");
		if (confirm){
			loosecount = remain + loosecount ;
			gamecount = 10			
		var gameend = alert("Game finished\n" + "Your score: \n Win count: " + wincount + " Thank you for playing the game~\nPlease restart if you wish to play again");
		document.getElementById("wincount").innerHTML =  wincount;
		document.getElementById("loosecount").innerHTML =  loosecount;
		}
		console.log(wincount, loosecount, gamecount)
		highscoreFunction()
	}
}

function highscoreFunction(){
	var txt;
	var i;
	var name = prompt("Congratulation you make it to the highscore! Please enter your name: ", "Unknown");
	var winner = (name, wincount)
	console.log(name,wincount,highscore)
	if(typeof(Storage) !== "undefined") {
		if (sessionStorage.highscore) {
			if(highscore.length <= 5){
				for (i = 0; i < 6; i++){
				if (highscroe[i][1]<wincount)
					highscore[i+1]=highscore[i]
				sessionStorage.highscore = highscore ;
				}
			} 
		} 
	}
}
var hand1 
var hand2 
var playerguess 
var playertotal
var gamecount = 0
var wincount = 0
var losecount = 0
var highscore =[["",0],["",0],["",0],["",0],["",0]]

function lefthand1() {
	hand1 = 0
	document.getElementById("playerhand1").innerHTML = hand1;
	document.getElementById("playerhand1").style.backgroundImage = "url('../Project 2/assets/images/fist.jpg')";
}

function lefthand2() {
	hand1 = 5
	document.getElementById("playerhand1").innerHTML = hand1;
	document.getElementById("playerhand1").style.backgroundImage = "url('../Project 2/assets/images/hand.jpg')";
}

function righthand1() {
	hand2 = 0
	document.getElementById("playerhand2").innerHTML = hand2
	document.getElementById("playerhand2").style.backgroundImage = "url('../Project 2/assets/images/fist.jpg')";
}

function righthand2() {
	hand2 = 5
	document.getElementById("playerhand2").innerHTML = hand2;
	document.getElementById("playerhand2").style.backgroundImage = "url('../Project 2/assets/images/hand.jpg')";
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
// making opponent randomly choose
	var random1 = random[Math.floor(Math.random()*random.length)];
	var random2 = random[Math.floor(Math.random()*random.length)];
	var gametotal;
	document.getElementById("handrandom1").innerHTML = random1;
	if (random1 == 0){
		document.getElementById("handrandom1").style.backgroundImage = "url('../images/fist.jpg')";
	}	else {
		document.getElementById("handrandom1").style.backgroundImage = "url('../images/hand.jpg')";
	}
	
	document.getElementById("handrandom2").innerHTML = random2;
	if (random2 == 0){
		document.getElementById("handrandom2").style.backgroundImage = "url('../images/fist.jpg')";
	}	else {
		document.getElementById("handrandom2").style.backgroundImage = "url('../images/hand.jpg')";
	}
	
//add up player total hand
	playertotal = hand1 + hand2;
		document.getElementById("playertotal").innerHTML = "Player Total:  " + playertotal;
	gametotal = playertotal + random1 + random2;
	if (gametotal == playerguess & gamecount < 10){
		wincount = Number(wincount)+1
		gamecount = Number(gamecount) +1;
		document.getElementById("wincount").innerHTML =  'Win Count: '+ wincount;
		document.getElementById("losecount").innerHTML = 'Lose Count: '+ losecount;
	}else if(gametotal !== playerguess & gamecount <10){
		losecount = Number(losecount)+1;
		gamecount = Number(gamecount) +1;
		document.getElementById("wincount").innerHTML =  'Win Count: '+ wincount;
		document.getElementById("losecount").innerHTML = 'Lose Count: '+ losecount;
	} else if (gamecount >=10){ 
		var gameend = alert("Game finished\n" + "Your score: \n Win count: " + wincount + " Thank you for playing the game~\nPlease restart if you wish to play again");
    }
    console.log(random1,random2,playertotal, gametotal,wincount,losecount, gamecount);
}
	

function restartFunction(){
	if (gamecount === 10){
		highscoreFunction()
		gamecount = 0;
		wincount = 0;
		losecount = 0;
		document.getElementById("wincount").innerHTML =  'Win Count: '+ wincount;
		document.getElementById("losecount").innerHTML = 'Lose Count: '+ losecount;
		
	} else {
		var remain = 10-gamecount
		var warning = window.confirm("There are still " + remain + " rounds, if you wish to restart, the remaining round will be counted as lost!");
		if (confirm){
			highscoreFunction()
			losecount = remain + losecount ;
			gamecount = 10			
		var gameend = alert("Game finished\n" + "Your score: \n Win count: " + wincount + " Thank you for playing the game~\nPlease restart if you wish to play again");
		document.getElementById("wincount").innerHTML =  'Win Count: '+ wincount;
		document.getElementById("losecount").innerHTML = 'Lose Count: '+ losecount;
		}
		console.log(wincount, losecount, gamecount)
		
	}
}

function highscoreFunction(){
	
	var txt;
	var i;
	var name = prompt("Congratulation you make it to the highscore! Please enter your name: ", "Unknown");
    var winner = [name, wincount]
    var temp_record ;
	
	console.log(winner,highscore,temp_record)
    highscore.push(winner)
    

    for(j=0;j<highscore.length-1;j++){
	    for (i = 0; i < highscore.length-1; i++){
		     if (highscore[i][1]<highscore[i+1][1]){
                   temp_record=highscore[i];
                    highscore[i]=highscore[i+1]
                    highscore[i+1]=temp_record;
					console.log(temp_record);
			 }
        } 
    }
    highscore.pop();

	if(typeof(Storage) !== "undefined") {
		if (sessionStorage.highscore) {
            sessionStorage.highscore = highscore ;
        } 
        document.getElementById("1place").innerHTML = "1st Place:" + highscore[0][0] ;
        document.getElementById("2place").innerHTML = "2nd Place:" + highscore[1][0] ;
        document.getElementById("3place").innerHTML = "3rd Place:" + highscore[2][0] ;
        document.getElementById("4place").innerHTML = "4th Place:" + highscore[3][0] ;
        document.getElementById("5place").innerHTML = "5th Place:" + highscore[4][0] ;
		document.getElementById("1score").innerHTML = "Score: " + highscore[0][1] ;
        document.getElementById("2score").innerHTML = "Score: " + highscore[1][1] ;
        document.getElementById("3score").innerHTML = "Score: " + highscore[2][1] ;
        document.getElementById("4score").innerHTML = "Score: " + highscore[3][1] ;
        document.getElementById("5score").innerHTML = "Score: " + highscore[4][1] ;
    }
	highscore.toString()
    localStorage.setItem("rank", highscore);
    console.log(name,wincount,highscore)
}


function quitFunction(){
	self.close();
}

function testfunction(){
    var a = ["a","b"]
    var b = ["1","2"]
    var c = ["3","4"]
    a.push(b)
    a.push(c)
    console.log(a[1])
}
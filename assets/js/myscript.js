var hand1 = 0
var hand2 = 0
var playerguess
var playertotal
var gamecount = 0
var wincount = 0
var losecount = 0
var highscore = [["", 0], ["", 0], ["", 0], ["", 0], ["", 0]]

//Setting player choice function on hand1 - left hand
function lefthand1() {
    hand1 = 0
    document.getElementById("playerhand1").innerHTML = hand1;
    document.getElementById("playerhand1").style.backgroundImage = "url('../2ndproject-minigame/assets/images/fist.png')";
}

function lefthand2() {
    hand1 = 5
    document.getElementById("playerhand1").innerHTML = hand1;
    document.getElementById("playerhand1").style.backgroundImage = "url('../2ndproject-minigame/assets/images/hand.png')";
}

//Setting player choice function on hand 2 - right hand
function righthand1() {
    hand2 = 0
    document.getElementById("playerhand2").innerHTML = hand2
    document.getElementById("playerhand2").style.backgroundImage = "url('../2ndproject-minigame/assets/images/fist.png')";
}

function righthand2() {
    hand2 = 5
    document.getElementById("playerhand2").innerHTML = hand2;
    document.getElementById("playerhand2").style.backgroundImage = "url('../2ndproject-minigame/assets/images/hand.png')";
}

//Setting player guess function
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



function confirmFunction() {
    // Setting opponent(system) randomly choose between 0 and 5
    var random = [0, 5];
    var random1 = random[Math.floor(Math.random() * random.length)];
    var random2 = random[Math.floor(Math.random() * random.length)];
    var gametotal;
    document.getElementById("handrandom1").innerHTML = random1;
    if (random1 == 0) {
        document.getElementById("handrandom1").style.backgroundImage = "url('../2ndproject-minigame/assets/images/o_fist.png')";
    } else {
        document.getElementById("handrandom1").style.backgroundImage = "url('../2ndproject-minigame/assets/images/o_hand.png')";
    }

    document.getElementById("handrandom2").innerHTML = random2;
    if (random2 == 0) {
        document.getElementById("handrandom2").style.backgroundImage = "url('../2ndproject-minigame/assets/images/o_fist.png')";
    } else {
        document.getElementById("handrandom2").style.backgroundImage = "url('../2ndproject-minigame/assets/images/o_hand.png')";
    }

    //add up player total hand
    playertotal = hand1 + hand2;
    document.getElementById("playertotal").innerHTML = "Player Total:  " + playertotal;
    gametotal = playertotal + random1 + random2;
    //logic where player guess right, wincount
    if (playerguess == null) {
        //remind player to choose thier guess if player forgot about it.
        $("#\\reminder").modal("show"); // Modal:reminder
        playertotal = hand1 + hand2;
    } else {

        if (gametotal == playerguess && gamecount < 10) {
            wincount = Number(wincount) + 1
            gamecount = Number(gamecount) + 1;
            document.getElementById("wincount").innerHTML = 'Win Count: ' + wincount;
            document.getElementById("highscorewincount").innerHTML = wincount;
            document.getElementById("losecount").innerHTML = 'Lose Count: ' + losecount;
            //logic where player guess wrong, losecount
        } else if (gametotal !== playerguess && gamecount < 10) {
            losecount = Number(losecount) + 1;
            gamecount = Number(gamecount) + 1;
            document.getElementById("wincount").innerHTML = 'Win Count: ' + wincount;
            document.getElementById("losecount").innerHTML = 'Lose Count: ' + losecount;
            //message for player to insert their name and notification to restart the game.
        } else if (gamecount >= 10) {
            $("#\\gameend").modal("show");
            $('#scorebrief').html("<span>Your score:</span> <br><span> Win count :</span> <span class='score'>" + wincount + "</h3><br> Thank you for playing the game~<br>Please restart if you wish to play again");
        }
    }
}

// logic for restarting the game
function restartFunction() {
    if (gamecount === 10) {
        highscoreFunction()
    } else {
        var remain = 10 - gamecount
        $("#\\warning").modal("show");
        $('#roundwarning').html("<span>There are still </span><span class='score'>  " + remain + "</span><span>  rounds, if you wish to restart, the remaining round will be counted as lost!</span>");
        $('#warningbtn').click(function () {
            highscoreFunction()
            losecount = remain + losecount;
            gamecount = 10
            $("#\\warning").modal("show");
            $('#scorebrief').html("<span>Your score:</span> <br><span> Win count :</span> <span class='score'>" + wincount + "</h3><br> Thank you for playing the game~<br>Please restart if you wish to play again");
        });
    }
    backtomenu();
}

//function go back to menu
function backtomenu() {
    $(document).ready(function () {
        $("#menu").fadeIn("500");
    });
}

//function fade out menu and go to the game page. 
function playFunction() {
    $(document).ready(function () {
        $("#newgame").click(function () {
            $("#menu").fadeOut("500");
        });
    });
    gamecount = 0;
    wincount = 0;
    losecount = 0;
    document.getElementById("wincount").innerHTML = 'Win Count: ' + wincount;
    document.getElementById("losecount").innerHTML = 'Lose Count: ' + losecount;
}

//logic for highscore board
function highscoreFunction() {
    var txt;
    var i;
    $("#\\onthelist").modal({
        backdrop: 'static',
        keyboard: false,
    });
    $("#onthelistClose").click(function () {
        var name = $("#onthelist #playerName").val();
        var wincount = $("#onthelist #highscorewincount").html();
        var winner = [name, wincount]
        var temp_record;
        console.log(name,wincount);
        highscore.push(winner);

        //logic to sort highscore
        for (j = 0; j < highscore.length - 1; j++) {
            for (i = 0; i < highscore.length - 1; i++) {
                if (highscore[i][1] < highscore[i + 1][1]) {
                    temp_record = highscore[i];
                    highscore[i] = highscore[i + 1]
                    highscore[i + 1] = temp_record;
                }
            }
        }
        highscore.pop();
        //Printing highscore
        if (typeof (Storage) !== "undefined") {
            if (sessionStorage.highscore) {
                sessionStorage.highscore = highscore;
            }
            document.getElementById("1place").innerHTML = "1st Place:" + highscore[0][0];
            document.getElementById("2place").innerHTML = "2nd Place:" + highscore[1][0];
            document.getElementById("3place").innerHTML = "3rd Place:" + highscore[2][0];
            document.getElementById("1score").innerHTML = "Score: " + highscore[0][1];
            document.getElementById("2score").innerHTML = "Score: " + highscore[1][1];
            document.getElementById("3score").innerHTML = "Score: " + highscore[2][1];
        }
    });


}

//close game tab function
function quitFunction() {
    self.close();
}
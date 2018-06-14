//Array of word list
var stuffList = ['accountant', 'lawyer', 'teacher', 'mechanic', 'electrician', 'engineer', 'waiter', 'surgeon', 'firefighter', 'actor', 'doctor', 'dentist', 'actuary', 'chef', 'plumber'];

//computer picks a random word and stores it
var hangmanGuess = stuffList[Math.floor(Math.random() * stuffList.length)];

//object with incorrect letter, correct letter, user answer, counters, and new divs
var game = {
    correctAns: [],
    incorrectAns: [],
    combineAnswer: '',
    wins: 0,
    loses: 0,
    chances: 10,
    firstDiv: $("<p>"),
    secondDiv: $("<p>"),
    thirdDiv: $("<p>"),
    fourthDiv: $("<p>"),
    fifthDiv: $("<p>")
    
}

var wordDisplay;

//this is used to remove the "please press to start" message later
var parent = document.getElementById("game");
var child = document.getElementById("startMessage");


//adds class for style and appends divs
game.firstDiv.addClass("hangmanWord");
game.secondDiv.addClass("hangmanWord");
$("#game").append(game.firstDiv);
$("#game").append(game.secondDiv);
$("#game").append(game.thirdDiv);
$("#game").append(game.fourthDiv);
$("#game").append(game.fifthDiv);

//adds underscores to correctAns based on number of letters in random guess
for (i = 0; i < hangmanGuess.length; i++) {
    game.correctAns.splice(i, 0, "_");
}

//used to have the underscores on the page as soon as the page loads
wordDisplay = game.correctAns.join(" ");

$(game.firstDiv).text(wordDisplay);

/////////////////////FUNCTIONS//////////////////////////////////////////

function removeMessage(){
    if (parent.contains(child) === true) {
        parent.removeChild(child);
    }
}


function losePoints(userGuess){
    if(game.incorrectAns.includes(userGuess)){
        alert("You have already guessed this letter. Please try again.");
    }

    else if (game.correctAns.indexOf(userGuess) < 0) {
        game.incorrectAns.push(userGuess);
        game.chances--;
    }
}



function winGame(){
    if (game.combineAnswer.replace(/\s/g, '') == hangmanGuess) {
        game.wins++;
        alert("The correct answer is: " + hangmanGuess);
        reset();
    }
}


function loseGame(){
    if(game.chances == 0){
        game.loses++;
        alert("The answer was: " + hangmanGuess);
        reset();
    }
}


function reset() {
    game.correctAns= [];
    game.incorrectAns= [];
    game.combineAnswer = '';
    game.chances = 10;

    hangmanGuess = stuffList[Math.floor(Math.random() * stuffList.length)];

    for (i = 0; i < hangmanGuess.length; i++) {
        game.correctAns.splice(i, 0, "_");
    }


    wordDisplay = game.correctAns.join(" ");
    $(game.firstDiv).text(wordDisplay);

    $(game.secondDiv).text(game.incorrectAns);
}
    


/////////////////////////////////////////////////////////////////////////


document.onkeyup = function (event) {

    var userGuess = event.key.toLowerCase();

    //This is here so I don't have to keep guessing
    console.log(hangmanGuess);


    removeMessage();

    //Goes through each letter of the guessed word and compares it to the user input
    for (i = 0; i < hangmanGuess.length; i++) {
        if (userGuess == hangmanGuess[i]) {
            game.correctAns[i] = userGuess;
            game.combineAnswer = game.correctAns.join(" ");
            if (game.correctAns.includes("_")) {
                game.combineAnswer = game.correctAns.join(" ");
            }
        }
        else {
            game.combineAnswer = game.correctAns.join(" ");
        }
    }

    losePoints(userGuess);
    
    
    $(game.firstDiv).text(game.combineAnswer);
    $(game.secondDiv).text(game.incorrectAns);
    $(game.thirdDiv).text("You have " + game.chances + " left");
    $(game.fourthDiv).text("Wins: " + game.wins);
    $(game.fifthDiv).text("Loses: " + game.loses);

    
    winGame();
    loseGame();
    
}

    
    

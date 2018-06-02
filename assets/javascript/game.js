var stuffList = ['peanut', 'night', 'bed', 'pony', 'letter'];

var hangmanGuess = stuffList[Math.floor(Math.random() * stuffList.length)];


var correctAns = [];
var combineAnswer;

for(i = 0; i < hangmanGuess.length; i++){
    correctAns.splice(i, 0, "_");
    
}


document.onkeyup = function (event) {

    var userGuess = event.key.toLowerCase();

    console.log(hangmanGuess);
    


    for (i = 0; i < hangmanGuess.length; i++) {
        if(userGuess == hangmanGuess[i]){
            correctAns[i] = userGuess;
            combineAnswer = correctAns.join(" ");
        }

        else {
            combineAnswer = correctAns.join(" ");
        }
    }




    var html = "<p>"+ combineAnswer + "</p>";
           

    document.querySelector("#game").innerHTML = html;


}
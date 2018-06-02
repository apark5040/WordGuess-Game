var stuffList = ['peanut', 'night', 'bed', 'pony', 'letter'];

var hangmanGuess = stuffList[Math.floor(Math.random() * stuffList.length)];


var correctAns = [];
var incorrectAns =[];
var combineAnswer;
var wins = 0;
var misses = 0;
var firstDiv = $("<p>");
var secondDiv = $("<p>");
firstDiv.addClass("hangmanWord");
secondDiv.addClass("hangmanWord");
$("#game").append(firstDiv);
$("#game").append(secondDiv);

for(i = 0; i < hangmanGuess.length; i++){
    correctAns.splice(i, 0, "_");
    
}


document.onkeyup = function (event) {

    var userGuess = event.key.toLowerCase();
    


    console.log(hangmanGuess);
    
    console.log(userGuess);

    for (i = 0; i < hangmanGuess.length; i++) {
        if(userGuess == hangmanGuess[i]){
            correctAns[i] = userGuess;
            combineAnswer = correctAns.join(" ");
            if(correctAns.includes("_")){
                combineAnswer = correctAns.join(" ");
                
            }
            else{
                //insert win quote here
            }
        }

        else {
            
            combineAnswer = correctAns.join(" ");
            misses++;
            
            
            

        }
        
        
    }

    if(correctAns.indexOf(userGuess) < 0){
        incorrectAns.push(userGuess);
    }
    
    

    $(firstDiv).text(combineAnswer);
    $(secondDiv).text(incorrectAns);





    


}
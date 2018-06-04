var stuffList = ['peanut', 'night', 'bed', 'pony', 'letter'];

var hangmanGuess = stuffList[Math.floor(Math.random() * stuffList.length)];

var game = {
correctAns : [],
incorrectAns :[],
combineAnswer: '' ,
wins : 0,
misses : 0,
firstDiv : $("<p>"),
secondDiv : $("<p>")
}


var parent = document.getElementById("game");
var child = document.getElementById("startMessage");
    


game.firstDiv.addClass("hangmanWord");
game.secondDiv.addClass("hangmanWord");
$("#game").append(game.firstDiv);
$("#game").append(game.secondDiv);



for(i = 0; i < hangmanGuess.length; i++){
    game.correctAns.splice(i, 0, "_");  
}

var wordDisplay = game.correctAns.join(" ");

$(game.firstDiv).text(wordDisplay);

function reset(){
  
    game.correctAns = [];
    game.incorrectAns =[];
    game.combineAnswer = "";
  
    hangmanGuess = stuffList[Math.floor(Math.random() * stuffList.length)];
  for(i = 0; i < hangmanGuess.length; i++){
    game.correctAns.splice(i, 0, "_");  
}

  $(game.firstDiv).text(wordDisplay);
  
}




document.onkeyup = function (event) {

    var userGuess = event.key.toLowerCase();

    console.log(hangmanGuess);
    
    
    
    if(parent.contains(child) === true){
      parent.removeChild(child);
      
    }
     
    
      
       
      
      for (i = 0; i < hangmanGuess.length; i++) {
        if(userGuess == hangmanGuess[i]){
            game.correctAns[i] = userGuess;
            game.combineAnswer = game.correctAns.join(" ");
            if(game.correctAns.includes("_")){
                game.combineAnswer = game.correctAns.join(" ");    
            }
        }

        else {
            
            game.combineAnswer = game.correctAns.join(" ");
           
        }
        
      
    
    
    
 
    }

    if(game.correctAns.indexOf(userGuess) < 0){
        game.incorrectAns.push(userGuess);
        game.misses++;
      
    }
  
    if(game.combineAnswer.replace(/\s/g, '') == hangmanGuess){
      game.wins++;
      reset();
    }
  
    
    
    $(game.firstDiv).text(game.combineAnswer);
    $(game.secondDiv).text(game.incorrectAns);

    console.log("Misses: " + game.misses);
    console.log("Wins: " + game.wins);



    


}
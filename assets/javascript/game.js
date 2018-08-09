//creates an array of the alphabet, which are all the choices to choose from
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
                         "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
 
 
// create variables to track score, guesses left and the guesses you've taken so far
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = []; //lets you know how many guesses you've taken, empty array

 // This function is run whenever the user presses a key.
 var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
 document.onkeyup = function(event) {
   
 
 

 

    // determines which key was pressed
    var userGuess = event.key;
    userGuess = userGuess.toLowerCase();// makes computer choice a random letter from the array
    // for (var i = 0; i < guessesSoFar.length; i++) {
    //     if(userGuess === guessesSoFar[i]){
    //         alert("you already chose that letter");
    //         return;
    //     }
    // }
    // tells user if they select the same letter twice and sends out alert to pick another letter and stops function
    if(guessesSoFar.indexOf(userGuess) > -1) {
        alert("you already chose that letter");
        return;
    }

    if (computerChoices.indexOf(userGuess) > -1) {
    //if user picks same letter as computer, user wins
    if (userGuess === computerGuess) {
        wins++;
        guessesLeft = 9;
        guessesSoFar = [];
        alert("you win!");

    }
 
    //binary outcome, if user doesnt win, then they lose which is illustrated by
    else  {
        
        guessesLeft--;
       
       
        

    }
 
    if (guessesLeft === 0) {
        losses++;
        guessesLeft = 9;
        guessesSoFar = [];
        alert("you lose!");
        
        
     
     }







}
    var html =
    
    "<h1>The Psychic Game</h1>" +
    "<p>Guess what letter I'm thinking of!</p>" +
    "<p>wins: " + wins + "</p>" +
    "<p>losses: " + losses + "</p>" +
    "<p>Guesses Left: " + guessesLeft + "</p>" +
    "<p>Your guesses so far: " + guessesSoFar.join(", ") + "</p>";
    

    
    
    
    
    guessesSoFar.push(userGuess)
     document.querySelector("#game").innerHTML = html;
    

}





















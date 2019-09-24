var wins = 0;
var losses = 0;
var left = 9;
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guesses = []

document.onkeyup=function(event) {
    
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var leftText = document.getElementById("left-text");
    var guessesText = document.getElementById("guesses-text");

    var userGuess = event.key;
    userGuess.textContent = event.key;
    
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    if (userGuess === computerGuess) {
        wins++; 
        guesses = [];
        losses = 0;
        left = 9;
       }
    else {
        losses++;
        left--;
        guesses.push(event.key);
        
        if (left === 0) {
        wins = 0;
        guesses = [];
        losses = 0;
        left = 9;
    }
    }

        winsText.textContent = wins;
        lossesText.textContent = losses;
        leftText.textContent = left;
        guessesText.textContent = guesses;

        }
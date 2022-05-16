/* 

Rules of the Game:
P beats R
R beats S
S beats P 

Step 1: You need a way to prompt user for their choice
Step 2: Get computer's choice
Step 3: Return outcome of game (wins, losses, ties)
Step 3a: 
If user picks R and computer picks S, user wins
If user picks P and computer picks R, user wins
If user picks S and computer picks P, user wins
If user picks matches the same pick as the computer, it's a tie

If user picks S and computer picks R, computer wins
If user picks R and computer picks P, computer wins
If user picks P and computer picks S, computer wins

Step 4: Ask if they want to play again

*/

// Global Variables
var wins = 0;
var losses = 0
var ties = 0;
var computerChoices = ["R", "P", "S"];

function startGame() {
    var userPick = prompt("Enter R, P, or S to start the game.")
    console.log("This is the user's choice.")

    var index = Math.floor(Math.random() * computerChoices.length);
    var computerPick = computerChoices[index]

    //ties
    if(userPick === computerPick) {
        ties=ties+1
    }

    //wins
    else if (userPick === "R" && computerPick == "S" || 
    userPick === "P" && computerPick == "R" ||
    userPick === "S" && computerPick == "P") {
        wins=wins+1
    }

    //losses
    else {
        losses=losses+1
    }

    alert("Wins: " + wins + "\n" + "Losses:" + losses + "\n" + "Ties: " + ties)

    var playAgain = confirm("Do you want to play again?")

    if(playAgain===true) {
        startGame()
    }


}

startGame()
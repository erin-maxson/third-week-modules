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


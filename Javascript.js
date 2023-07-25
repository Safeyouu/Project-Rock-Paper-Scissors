// Function to get the computer's choice (randomly)
function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to play a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
  // Convert both choices to lowercase to make the comparison case-insensitive
  const playerChoice = playerSelection.toLowerCase();
  const computerChoice = computerSelection.toLowerCase();

  // Check for a draw
  if (playerChoice === computerChoice) {
    return "It's a draw! Both players chose " + computerChoice + ".";
  }

  // Check the win conditions for the player
  if  (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "rock")
  ) {
    return "You win! " + playerSelection + " beats " + computerSelection + ".";
  }
  while(playerSelection != "rock"|| playerSelection != "scissors "|| playerSelection !="paper"){
    return "Wrong Selection ! Please enter a valid one ";
  }
  // If none of the above conditions matched, the computer wins
  return "You lose! " + computerSelection + " beats " + playerSelection + ".";
}

// Function to play a 5 round game and keep score
function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Enter your choice (Rock/Paper/Scissors):");
    const computerSelection = getComputerChoice();

    const roundResult = playRound(playerSelection, computerSelection);
    console.log(roundResult);

    // Update the scores based on the round result
    if (roundResult.includes("win")) {
      playerScore++;
    } else if (roundResult.includes("lose")) {
      computerScore++;
    }
  }

  // Determine the overall winner
  if (playerScore > computerScore) {
    console.log("Congratulations! You win the game!");
  } else if (playerScore < computerScore) {
    console.log("Sorry, you lost the game. Better luck next time!");
  } else {
    console.log("It's a tie! The game ended in a draw.");
  }
}

// Start the game
game();

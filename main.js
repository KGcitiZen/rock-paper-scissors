//? returns 'rock', 'paper', or 'scissors' string.
function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * 3) + 1;

  switch (randomChoice) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
    default:
      console.warn("Something went wrong!");
  }
}

//? Input --> 1. (optional) Player selection, string
//? Input --> 2. (optional) Computer selection, string
//? Return --> Alert winner message (or draft), string
function startRound(
  playerSelection = prompt("Rock, paper, or scissors? Type your move: "),
  computerSelection = getComputerChoice()
) {
  let ps = playerSelection.toLowerCase();
  let cs = computerSelection;

  switch (true) {
    case ps === cs:
      return "Draft!";
    case ps === "rock" && cs === "scissors":
      return "You win! Rock beats Scissors";
    case ps === "paper" && cs === "rock":
      return "You win! Paper beats Rock";
    case ps === "scissors" && cs === "paper":
      return "You win! Scissors beats Paper";
    case cs === "rock" && ps === "scissors":
      return "You lose! Rock beats Scissors";
    case cs === "paper" && ps === "rock":
      return "You lose! Paper beats Rock";
    case cs === "scissors" && ps === "paper":
      return "You lose! Scissors beats Paper";
    default:
      return "Something went wrong";
  }
}

//? Input --> (optional) number of rounds, integer
//? Output --> 1. Alert round winner message, string
//? Output --> 2. Alert game winner message, string
function game(rounds = 5) {
  let playerScore = 0;
  let computerScore = 0;

  let getRoundWinner = (str) => {
    if (str.includes("win")) {
      playerScore++;
      return "Player";
    } else if (str.includes("lose")) {
      computerScore++;
      return "Computer";
    } else return "No one";
  };

  for (i = 1; i <= 5; i++) {
    let roundResultMessage = startRound();
    let winner = getRoundWinner(roundResultMessage);

    alert(
      `Round ${i} of ${rounds}\n${roundResultMessage}\nRound winner: ${winner}.`
    );
  }

  if (playerScore > computerScore) {
    alert("Player won the game!");
  } else if (computerScore > playerScore) {
    alert("Computer won the game!");
  } else {
    alert("No winner in this game!")
  }
}


game();

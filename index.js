let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);
  if (random === 1) {
    return "rock";
  } else if (random === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let choice = prompt("Enter your choice: ");
  return choice.toLocaleUpperCase();
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    return "draw";
  }

  if (
    (humanChoice == "paper" && computerChoice == "rock") ||
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "scissors" && computerChoice == "paper")
  ) {
    humanScore++;
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
  } else {
    computerScore++;
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
  }
}

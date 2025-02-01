function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return "rock";
  } else if (random === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let choice = prompt("Enter your choice: ");
  return choice.toLocaleLowerCase();
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    console.log("Draw!");
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

let humanScore = 0;
let computerScore = 0;

function playGame() {
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  console.log(humanSelection);
  console.log(computerSelection);

  playRound(humanSelection, computerSelection);
}

for (let i = 0; i < 5; i++) {
  playGame();
}

if (humanScore > computerScore) {
  console.log(`You win! Final score: ${humanScore} - ${computerScore}`);
} else {
  console.log(`You lose! Final score: ${humanScore} - ${computerScore}`);
}

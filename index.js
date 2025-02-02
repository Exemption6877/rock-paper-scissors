let humanScore = 0;
let computerScore = 0;
let buttonChoice = "";

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

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

rockButton.addEventListener("click", (event) => {
  buttonChoice = event.target.id;
  playGame();
});

paperButton.addEventListener("click", (event) => {
  buttonChoice = event.target.id;
  playGame();
});

scissorsButton.addEventListener("click", (event) => {
  buttonChoice = event.target.id;
  playGame();
});

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

function playGame() {
  if (!buttonChoice) return;
  const humanSelection = buttonChoice;
  const computerSelection = getComputerChoice();
  console.log(humanSelection);
  console.log(computerSelection);

  playRound(humanSelection, computerSelection);

  if (humanScore === 5) {
    console.log("Human wins!");
    rockButton.removeEventListener("click", () => {});
    paperButton.removeEventListener("click", () => {});
    scissorsButton.removeEventListener("click", () => {});
  } else if (computerScore === 5) {
    console.log("Computer wins!");
    rockButton.removeEventListener("click", () => {});
    paperButton.removeEventListener("click", () => {});
    scissorsButton.removeEventListener("click", () => {});
  }
}

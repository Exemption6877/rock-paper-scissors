let humanScore = 0;
let computerScore = 0;
let buttonChoice = "";
let gameActive = true;

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

const output = document.querySelector(".output");
const heading2 = document.createElement("h2");
const scoreOutput = document.createElement("h1");

heading2.textContent = "Press a button to play!";
scoreOutput.textContent = `You: ${humanScore} : Computer:${computerScore}`;

output.appendChild(heading2);
output.appendChild(scoreOutput);

rockButton.addEventListener("click", (event) => {
  if (gameActive) {
    buttonChoice = event.target.id;
    gameActive = true;
    playGame();
  } else {
    resetGame();
  }
});

paperButton.addEventListener("click", (event) => {
  if (gameActive) {
    buttonChoice = event.target.id;
    gameActive = true;
    playGame();
  } else {
    resetGame();
  }
});

scissorsButton.addEventListener("click", (event) => {
  if (gameActive) {
    buttonChoice = event.target.id;
    gameActive = true;
    playGame();
  } else {
    resetGame();
  }
});

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
    scoreOutput.textContent = `You: ${humanScore} : Computer:${computerScore}`;
    heading2.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    scoreOutput.textContent = `You: ${humanScore} : Computer:${computerScore}`;
    heading2.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
  }
}

function playGame() {
  const humanSelection = buttonChoice;
  const computerSelection = getComputerChoice();

  heading2.textContent = `Press a button to play!`;

  // parse the choice to the DOM
  console.log(humanSelection);
  console.log(computerSelection);

  playRound(humanSelection, computerSelection);

  endGame();
}

function endGame() {
  if (humanScore == 5) {
    scoreOutput.textContent = `You: ${humanScore} : Computer:${computerScore}`;
    heading2.textContent = `Game Won! Press a button to play again.`;
    gameActive = false;
  } else if (computerScore == 5) {
    scoreOutput.textContent = `You: ${humanScore} : Computer:${computerScore}`;
    heading2.textContent = `Game Lost! Press a button to play again.`;
    gameActive = false;
  }
}

function resetGame() {
  if (!gameActive) {
    humanScore = 0;
    computerScore = 0;
    heading2.textContent = "Press a button to play!";
    scoreOutput.textContent = `You: ${humanScore} : Computer:${computerScore}`;
    gameActive = true;
  }
}

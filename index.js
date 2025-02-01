let humanScore = 0;
let computerScore = 0;


function getComputerChoice(){
    let random = Math.floor(Math.random()* 3);
    if (random === 1) {
        return "Rock";
    } else if (random === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getHumanChoice() {
    return prompt("Enter your choice: ");
}

function playRound(humanChoice, computerChoice) {

}
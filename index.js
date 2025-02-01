let humanScore = 0;
let computerScore = 0;


function getComputerChoice(){
    return Math.floor(Math.random()* 3);
}

function getHumanChoice() {
    return prompt("Enter your choice: ");
}

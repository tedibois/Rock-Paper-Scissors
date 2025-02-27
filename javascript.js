function getComputerChoice (){

}

const rockButton = document.getElementById('rockC');
const paperButton = document.getElementById('paperC');
const scissorsButton = document.getElementById('scissorsC');

rockButton.addEventListener("click"), () => handlePlayerChoice("rock");
paperButton.addEventListener("click"), () => handlePlayerChoice("paper");
scissorsButton.addEventListener("click"), () => handlePlayerChoice("scissors");

function handlePlayerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor (Math.random() * 3);
    return choices[randomIndex];
}

let playerScore = 0;
let computerScore = 0;

function
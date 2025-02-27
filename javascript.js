document.addEventListener('DOMContentLoaded', () => {
    const rockButton = document.getElementById('rockC');
    const paperButton = document.getElementById('paperC');
    const scissorsButton = document.getElementById('scissorsC');

    rockButton.addEventListener("click", () => handlePlayerChoice("rock"));
    paperButton.addEventListener("click", () => handlePlayerChoice("paper"));
    scissorsButton.addEventListener("click", () => handlePlayerChoice("scissors"));

    let playerScore = 0;
    let computerScore = 0;

    function handlePlayerChoice(playerChoice) {
        const computerChoice = getComputerChoice();
        playround(playerChoice, computerChoice);
    }

    function getComputerChoice() {
        const choices = ["rock", "paper", "scissors"];
        const randomIndex = Math.floor(Math.random() * 3);
        return choices[randomIndex];
    }

    function playround(playerChoice, computerChoice) {
        const resultDiv = document.querySelector(".result");

        if (playerChoice === computerChoice) {
            resultDiv.textContent = "It's a tie!";
        } else if (
            (playerChoice === "rock" && computerChoice === "scissors") ||
            (playerChoice === "paper" && computerChoice === "rock") ||
            (playerChoice === "scissors" && computerChoice === "paper")
        ) {
            resultDiv.textContent = `You win! ${playerChoice} beats ${computerChoice}`;
            playerScore++;
        } else {
            resultDiv.textContent = `You lose! ${computerChoice} beats ${playerChoice}`;
            computerScore++;
        }

        updateScoreDisplay();

        if (playerScore === 5 || computerScore === 5) {
            announceWinner();
        }
    }

    function updateScoreDisplay() {
        const resultDiv = document.querySelector(".result");
        resultDiv.textContent += `\nPlayer: ${playerScore} | Computer: ${computerScore}`;
    }

    function announceWinner() {
        const resultDiv = document.querySelector(".result");

        if (playerScore > computerScore) {
            resultDiv.textContent = `You win the game! Final Score: Player ${playerScore} | Computer ${computerScore}`;
        } else {
            resultDiv.textContent = `You lose the game! Final Score: Player ${playerScore} | Computer ${computerScore}`;
        }

        playerScore = 0;
        computerScore = 0;
    }
});
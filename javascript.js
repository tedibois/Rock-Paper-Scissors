document.addEventListener('DOMContentLoaded', () => {
    const rockButton = document.getElementById('rockC');
    const paperButton = document.getElementById('paperC');
    const scissorsButton = document.getElementById('scissorsC');
    
    const resultDiv = document.querySelector(".result");
    const playerScoreElement = document.getElementById("playerScore");
    const computerScoreElement = document.getElementById("computerScore");

    let playerScore = 0;
    let computerScore = 0;

    if (rockButton && paperButton && scissorsButton) {
        rockButton.addEventListener("click", () => handlePlayerChoice("rock"));
        paperButton.addEventListener("click", () => handlePlayerChoice("paper"));
        scissorsButton.addEventListener("click", () => handlePlayerChoice("scissors"));
    } else {
        console.error("Buttons not found! Check your HTML IDs.");
    }

    function handlePlayerChoice(playerChoice) {
        const computerChoice = getComputerChoice();
        playround(playerChoice, computerChoice);
    }

    function getComputerChoice() {
        const choices = ["rock", "paper", "scissors"];
        return choices[Math.floor(Math.random() * choices.length)];
    }

    function playround(playerChoice, computerChoice) {
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
        playerScoreElement.textContent = playerScore;
        computerScoreElement.textContent = computerScore;
    }

    function announceWinner() {
        if (playerScore > computerScore) {
            resultDiv.textContent = `You win the game! Final Score: Player ${playerScore} | Computer ${computerScore}`;
        } else {
            resultDiv.textContent = `You lose the game! Final Score: Player ${playerScore} | Computer ${computerScore}`;
        }

        playerScore = 0;
        computerScore = 0;
        updateScoreDisplay();
    }
});

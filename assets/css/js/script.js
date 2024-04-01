const choices = document.querySelectorAll('.choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const winnerDisplay = document.getElementById('winner');
const userScoreDisplay = document.getElementById('your-score');
const computerScoreDisplay = document.getElementById('computer-score');
const attemptsDisplay = document.getElementById('attempts');

let userScore = 0;
let computerScore = 0;
let attempts = 5;

const gameRules = {
    Rock: {wins: ['Scissors', 'Lizard'], loses: ['Paper', 'Spock']},
    Paper: {wins: ['Rock', 'Spock'], loses: ['Scissors', 'Lizard']},
    Scissors: {wins: ['Paper', 'Lizard'], loses: ['Rock', 'Spock']},
    Lizard: {wins: ['Spock', 'Paper'], loses: ['Rock', 'Scissors']},
    Spock: {wins: ['Scissors', 'Rock'], loses: ['Lizard', 'Paper']}
};

choices.forEach(choice => {
    choice.addEventListener('click', function() {
        const userChoice = this.getAttribute('data-choice');
        const computerChoice = getComputerChoice();
        updateDisplay(userChoice, computerChoice);
        determineWinner(userChoice, computerChoice);
    });
});

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function updateDisplay(userChoice, computerChoice) {
    computerChoiceDisplay.textContent = computerChoice;
    attemptsDisplay.textContent = --attempts;
    checkGameOver();
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        winnerDisplay.textContent = "It's a tie!";
    } else if (gameRules[userChoice].wins.includes(computerChoice)) {
        winnerDisplay.textContent = "You win!";
        userScoreDisplay.textContent = ++userScore;
    } else {
        winnerDisplay.textContent = "Computer wins!";
        computerScoreDisplay.textContent = ++computerScore;
    }
}

function checkGameOver() {
    if (attempts === 0) {
        choices.forEach(choice => choice.disabled = true);
        winnerDisplay.textContent += " Game Over!";
        // Here you can add more functionality, like asking if they want to play again.
    }
}

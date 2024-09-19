let userScore = 0;
let computerScore = 0;
let attemptsLeft = 10;

const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("computer-score");
const resultMessage = document.getElementById("reslute");
const actionMessage = document.getElementById("action-massege");
const attemptsLeftMessage = document.getElementById("attempts-left");
const playAgainButton = document.getElementById("play-again");

const rockChoice = document.getElementById("rock");
const paperChoice = document.getElementById("paper");
const scissorChoice = document.getElementById("scissor");

const choices = ['rock', 'paper', 'scissor'];

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function game(userChoice) {
    if (attemptsLeft > 0) {
        const computerChoice = getComputerChoice();
        switch (userChoice + computerChoice) {
            case 'rockscissor':
            case 'paperrock':
            case 'scissorpaper':
                win(userChoice, computerChoice);
                break;
            case 'rockpaper':
            case 'paperscissor':
            case 'scissorrock':
                lose(userChoice, computerChoice);
                break;
            default:
                draw(userChoice, computerChoice);
        }
        attemptsLeft--;
        attemptsLeftMessage.textContent = `المحاولات المتبقية: ${attemptsLeft}`;
    }
    
    if (attemptsLeft === 0) {
        endGame();
    }
}

function win(userChoice, computerChoice) {
    userScore++;
    userScoreSpan.textContent = userScore;
    resultMessage.textContent = `${translateChoice(userChoice)} بتغلب ${translateChoice(computerChoice)}، انت كسبت!`;
    actionMessage.textContent = 'اختر اختيار!';
}

function lose(userChoice, computerChoice) {
    computerScore++;
    computerScoreSpan.textContent = computerScore;
    resultMessage.textContent = `${translateChoice(computerChoice)} بتغلب ${translateChoice(userChoice)}، انت خسرت!`;
    actionMessage.textContent = 'اختر اختيار!';
}

function draw(userChoice, computerChoice) {
    resultMessage.textContent = `التعادل! ${translateChoice(userChoice)} زي ${translateChoice(computerChoice)}.`;
    actionMessage.textContent = 'اختر اختيار!';
}

function translateChoice(choice) {
    switch (choice) {
        case 'rock':
            return 'حجرة';
        case 'paper':
            return 'ورقة';
        case 'scissor':
            return 'مقص';
    }
}

function endGame() {
    actionMessage.textContent = 'اللعبة خلصت!';
    playAgainButton.classList.remove('hidden');
}

playAgainButton.addEventListener('click', () => {
    userScore = 0;
    computerScore = 0;
    attemptsLeft = 10;
    userScoreSpan.textContent = userScore;
    computerScoreSpan.textContent = computerScore;
    resultMessage.textContent = '';
    attemptsLeftMessage.textContent = `المحاولات المتبقية: ${attemptsLeft}`;
    actionMessage.textContent = 'اختر اختيار!';
    playAgainButton.classList.add('hidden');
});

rockChoice.addEventListener('click', () => game('rock'));
paperChoice.addEventListener('click', () => game('paper'));
scissorChoice.addEventListener('click', () => game('scissor'));

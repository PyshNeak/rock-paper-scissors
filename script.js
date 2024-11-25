selectionBtns = document.querySelectorAll('.selection-btn');

function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3);
    let options = ["Rock", "Paper", "Scissors"];
    return options[rand];
}

function getHumanChoice() {
    let selection = prompt('1: Rock\n2: Paper\n3: Scissors\nSelection: ');
    let options = ["Rock", "Paper", "Scissors"];
    return options[selection-1];
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
    const announcement = document.querySelector('.announcement');
    const score = document.querySelector('.score');
    if (humanChoice == 'Rock' && computerChoice == 'Scissors'
        || humanChoice == 'Paper' && computerChoice == 'Rock'
        || humanChoice == 'Scissors' && computerChoice == 'Paper') {
        humanScore++;
        announcement.textContent = 'You win! ' + humanChoice + " beats " + computerChoice + "!"
    } else if (humanChoice === computerChoice) {
        announcement.textContent = 'You tie! ' + humanChoice + " matches " + computerChoice + "!";
    } else {
        announcement.textContent = 'You lose!! ' + humanChoice + " loses too " + computerChoice + "!"
        computerScore++;
    }
    score.textContent = 'User: ' + humanScore + ' Computer: ' + computerScore;

    if (humanScore === 5) {
        announcement.textContent = "YOU WIN!!!!";
        selectionBtns.forEach((button) => {
            button.removeEventListener('click', startRound);
        });
    } else if (computerScore === 5) {
        announcement.textContent = "YOU SUCK.";
        selectionBtns.forEach((button) => {
            button.removeEventListener('click', startRound);
        });
    }
}

function startRound(e) {
    selection = e.target.textContent;
    playRound(selection);
}


selectionBtns.forEach((button) => {
    button.addEventListener('click', startRound);
});


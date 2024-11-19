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

function playRound(humanChoice, computerChoice) {
    if (humanChoice == 'Rock' && computerChoice == 'Scissors'
        || humanChoice == 'Paper' && computerChoice == 'Rock'
        || humanChoice == 'Scissors' && computerChoice == 'Paper') {
        humanScore++;
        console.log('You win! ' + humanChoice + " beats " + computerChoice + "!");
    } else if (humanChoice === computerChoice) {
        console.log('You tie! ' + humanChoice + " matches " + computerChoice + "!");
    } else {
        computerScore++;
        console.log('You lose!! ' + humanChoice + " loses too " + computerChoice + "!");
    }
}

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);
console.log(humanScore, computerScore);
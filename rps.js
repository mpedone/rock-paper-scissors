function getComputerChoice() {
    // set the computer's choice
    let choices = ["rock", "paper", "scissors"];
    let choice = choices[Math.floor(Math.random()*3)];
    return choice;
}

function getHumanChoice() {
    // prompt for human choice
    humanChoices = ["rock", "paper", "scissors"];
    
    let keepAsking = 1;
    while(keepAsking) {
        let humanChoice = prompt("Please pick a weapon.");
        if(humanChoice == null){
            keepAsking = 0;
        } else if (humanChoices.includes(humanChoice.toLowerCase())) {
            return humanChoice.toLowerCase();
            keepAsking = 0;
        }
    }    
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    // Compare selections
    let result = ""
    if (humanChoice === computerChoice) {
        result = `It's a tie!`
        humanScore += 1;
        computerScore += 1;
    } else {
        switch (humanChoice) {
            case "rock":
                if (computerChoice === "scissors") {
                    result = 'Rock smashes scissors, user wins!';
                    humanScore += 1;
                } else if (computerChoice === "paper") {
                    result = 'Paper covers rock, computer wins!';
                    computerScore += 1;
                }
                break;
            case "paper":
                if (computerChoice === "rock") {
                    result = 'Paper covers rock, user wins!';
                    humanScore += 1;
                } else if (computerChoice === "scissors") {
                    result = 'Scissors cut paper, computer wins!';
                    computerScore += 1;
                }
                break;
            case "scissors":
                if (computerChoice === "paper") {
                    result = 'Scissors cut paper, user wins!';
                    humanScore += 1;
                } else if (computerChoice === "rock") {
                    result = 'Rock smashes scissors, computer wins!';
                    computerScore += 1;
                }
                break;
        }
    }
    // increment appropriate score counter
    console.log(`User selected ${humanChoice}, computer selected ${computerChoice}... ${result}`);
    console.log(`User: ${humanScore}, Computer: ${computerScore}`)
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
console.log(computerSelection)

playRound(humanSelection, computerSelection);
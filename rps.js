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

function playRound(humanChoice, computerChoice) {
    // Compare selections
    if (humanChoice === computerChoice) {
        return "tie";
    } else {
        switch (humanChoice) {
            case "rock":
                if (computerChoice === "scissors") {
                    return "user";
                } else if (computerChoice === "paper") {
                    return "computer";
                }
                break;
            case "paper":
                if (computerChoice === "rock") {
                    return "user";
                } else if (computerChoice === "scissors") {
                    return "computer";
                }
                break;
            case "scissors":
                if (computerChoice === "paper") {
                    return "user";
                } else if (computerChoice === "rock") {
                    return "computer";
                }
                break;
        }
    }
}

function victoryMethod(choice) {
    if (choice === "rock") {
        return "smashes";
    } else if (choice === "paper") {
        return "covers";
    } else {
        return "cuts";
    }
}

// playRound(humanSelection, computerSelection);

function playGame(rounds) {
    let humanScore = 0;
    let computerScore = 0;
    let verb = ""

    for (let i = 0; i < rounds; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        result = playRound(humanSelection, computerSelection);
        
        let message = `Human chose ${humanSelection}, Computer chose ${computerSelection},`
        
        if (result === "tie") {
            humanScore += 1;
            computerScore += 1;
            console.log(`${message} It's a tie!`);
        } else if (result === "user") {
            humanScore += 1;
            verb = victoryMethod(humanSelection);
            console.log(`${message} ${humanSelection} ${verb} ${computerSelection}. Human wins!`);
        } else {
            computerScore += 1;
            verb = victoryMethod(computerSelection);
            console.log(`${message} ${computerSelection} ${verb} ${humanSelection}. Computer wins!`)
        }
        
        console.log(`User: ${humanScore}, CPU: ${computerScore}`)
    }
}

playGame(5);
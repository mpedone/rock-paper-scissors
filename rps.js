function getComputerChoice() {
    // set the computer's choice
    let choices = ["rock", "paper", "scissors"];
    let choice = choices[Math.floor(Math.random()*3)];
    return choice;
}

function determineRoundWinner(human, computer){
    // Compare selections
    if (human === computer) {
        return "tie";
    } else {
        switch (human) {
            case "rock":
                if (computer === "scissors") {
                    return "user";
                } else if (computer === "paper") {
                    return "computer";
                }
                break;
            case "paper":
                if (computer === "rock") {
                    return "user";
                } else if (computer === "scissors") {
                    return "computer";
                }
                break;
            case "scissors":
                if (computer === "paper") {
                    return "user";
                } else if (computer === "rock") {
                    return "computer";
                }
                break;
        }
    }
}

function playRound(humanChoice, computerChoice, humanPoints, computerPoints) {
    let roundWinner = determineRoundWinner(humanChoice, computerChoice);
    return roundWinner;
    // update score of winner

    // output winner to roundPara
    // output score to roundPara
    // check if either score === 5
    // if score === 5, game ends, winner declared
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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let verb = ""

    // for (let i = 0; i < rounds; i++) {
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
        } else if (result === "quit") {
            computerScore += 1;
            console.log("Human chose to quit. Computer wins automatically!");
        } else {
            computerScore += 1;
            verb = victoryMethod(computerSelection);
            console.log(`${message} ${computerSelection} ${verb} ${humanSelection}. Computer wins!`)
        }
        
        console.log(`User: ${humanScore}, CPU: ${computerScore}`)
    // }
}

// playGame();
let humanScore = 0;
let computerScore = 0;

const gameStart = document.querySelector('#game-buttons');

gameStart.addEventListener('click', (event) => {
    let target = event.target;
    const roundWinner = playRound(target.id, getComputerChoice(), humanScore, computerScore);

const roundResults = document.querySelector("div#round-results");
let roundPara = document.createElement("para");

roundPara.textContent += `${roundWinner} `
roundResults.appendChild(roundPara);
    
});
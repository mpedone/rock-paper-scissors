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
                    return "human";
                } else if (computer === "paper") {
                    return "computer";
                }
                break;
            case "paper":
                if (computer === "rock") {
                    return "human";
                } else if (computer === "scissors") {
                    return "computer";
                }
                break;
            case "scissors":
                if (computer === "paper") {
                    return "human";
                } else if (computer === "rock") {
                    return "computer";
                }
                break;
        }
    }
}

function playRound(humanChoice, computerChoice, humanPoints, computerPoints) {
    let winner = determineRoundWinner(humanChoice, computerChoice);

    humanPoints += (winner === "human" || winner === "tie");
    computerPoints += (winner === "computer" || winner === "tie");

    let victoryMsg = "";

    if(winner === "tie"){
        victoryMsg = "It's a tie!";
    } else {
        victoryMsg = `${(winner.toUpperCase())} wins!`;
    }

    let msg = `Human chose: ${humanChoice}<br>
    Computer chose: ${computerChoice}<br><br>
    ${victoryMsg}<br>`;
    
    return [msg, humanPoints, computerPoints];
}

// Not used at the moment, but I might use this again later
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

    const gameStart = document.querySelector('#game-buttons');
    const roundResults = document.querySelector("div#round-results");
    let roundPara1 = document.createElement("p");
    let gamePara = document.createElement("p");
    
    gameStart.addEventListener('click', (event) => {
        gamePara.innerHTML = ""
        roundResults.appendChild(gamePara);

        let target = event.target;
        const roundWinner = playRound(target.id, getComputerChoice(), humanScore, computerScore);
        
        humanScore = roundWinner[1];
        computerScore = roundWinner[2];

        roundPara1.innerHTML = `${roundWinner[0]} <br> 
        Human score: ${roundWinner[1]} <br>
        Computer score: ${roundWinner[2]}`;

        roundResults.appendChild(roundPara1);

        if (humanScore === 5) {
            gamePara.innerHTML = "Human reached 5 points first. Human Wins! <br> GAME OVER";
            humanScore = 0;
            computerScore = 0;
        } else if (computerScore === 5){
            gamePara.innerHTML = "Computer reached 5 points first. Computer Wins! <br> GAME OVER";
            humanScore = 0;
            computerScore = 0;
        } else if (humanScore === 5 && computerScore === 5){
            gamePara.innerHTML = "Both reached 5. It's a tie! GAME OVER!"
            humanScore = 0;
            computerScore = 0;
        }

        roundResults.appendChild(gamePara);
    });
}

playGame();

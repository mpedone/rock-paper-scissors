function getComputerChoice() {
    // set the computer's choice
    let choices = ["rock", "paper", "scissors"];
    let choice = choices[Math.floor(Math.random()*3)];
    return choice;
}

function playRound(human, computer){
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

function updateScore(winner){
    let points = [0, 0]
    points = winner === "human" ? [1, 0] : winner === "computer" ? [0, 1] : [1, 1]
    return points;
}

function victoryMessage(winner) {
    if(winner === "tie"){
        victoryMsg = "It's a tie!";
    } else {
        victoryMsg = `${(winner.toUpperCase())} wins!`;
    }
    return victoryMsg;
}

// Not used at the moment, but I might use this again later
function victoryMethod(winner, choice) {
    if (choice === "rock") {
        return "smashes";
    } else if (choice === "paper") {
        return "covers";
    } else {
        return "cuts";
    }
}

function gameOver(humanScore, computerScore){
    if (humanScore === 5 && computerScore === 5) {
        return "Both reached 5. It's a tie!<br>GAME OVER!";
    } else if (computerScore === 5){
        return "Computer reached 5 points first. Computer Wins! <br> GAME OVER";
    } else if (humanScore === 5){
        return "Human reached 5 points first. Human Wins! <br> GAME OVER";
    } else {
        return 0;
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    const gameStart = document.querySelector('#game-buttons');
    const roundResults = document.querySelector("div#round-results");
    let roundPara = document.createElement("p");
    let gamePara = document.createElement("p");
    
    gameStart.addEventListener('click', (event) => {
        gamePara.innerHTML = ""
        roundResults.appendChild(gamePara);

        let target = event.target;
        let humanWeapon = target.id;
        let computerWeapon = getComputerChoice();
        const roundWinner = playRound(humanWeapon, computerWeapon);
        
        humanScore += updateScore(roundWinner)[0]
        computerScore += updateScore(roundWinner)[1]
        
        // const winningWeapon = roundWinner + "Weapon";
        // let method = victoryMethod(winningWeapon);

        let msg = victoryMessage(roundWinner);

        roundPara.innerHTML = `Human chose: ${humanWeapon} <br>
        Computer chose: ${computerWeapon}. <br><br>
        ${msg} <br> 
        Human score: ${humanScore} <br>
        Computer score: ${computerScore}`;

        roundResults.appendChild(roundPara);

        let endGame = gameOver(humanScore, computerScore);

        if(endGame){
            humanScore = 0;
            computerScore = 0;
            gamePara.innerHTML = endGame;
            roundResults.appendChild(gamePara);
        }
    });
}

playGame();

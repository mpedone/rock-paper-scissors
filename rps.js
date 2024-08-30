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
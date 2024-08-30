function getComputerChoice() {
    choices = ["rock", "paper", "scissors"];
    choice = choices[Math.floor(Math.random()*3)];
    return choice;
}

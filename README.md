# rock-paper-scissors

A simple rock-paper-scissors game to practice JavaScript as part of The Odin Project Fundamentals course.

Game runs in the DevTools console.

User is prompted to enter a choice, which is validated as either rock, paper, or scissors (then made lowercase).
Computer is assigned one of the three at random.
Script then compares the two selections and determines a winner.
A message is logged declaring the choices, the result, and the winner.
The scores are updated.
The game runs a set number of times, controlled by the parameter passed to playGame()

## Issues/Things I would change

Currently, there is no handling of the user cancelling the prompt. It just passes undefined to the function, and then declares the computer the winner, regardless of what it "chose". I think there are a few ways I could fix this, but I don't think it's necessary for this exercise. Perhaps as a personal exercise in the future.

Related to this is the choice validation. Currently, I simply have the prompt re-appear, but with no indication that the user did something wrong. Partly, that is because of the while loop which I used to keep asking until they enter something valid. I could modify the text to explicitly state "Please enter either 'rock', 'paper', or 'scissors'", but I still think it would need a message if the user entered something else. Another way around this would be to have a dropdown list, or just radio buttons, so that the user could ONLY choose one of those three. Again, I think this is outside of the scope of this lesson, so I will keep it in mind for down the road.

## Potential changes

This is just my mind thinking through where this could go. RPS is simple, and there are variations out there, but I'm envisioning a "make-your-own" version, where you could choose 3-5 (more?) "weapons" and add your own rules, then play the game.

Of course, the obvious change is to have the game played in the actual webpage, not the console, which would involve input fields and some sort of dynamic output. I think that is coming down the road in The Odin Project, but if not, I'm sure it would be an interesting project.

### UI Branch

I've created a branch of the original project with the intent of created a UI for the game. I may try to fix some of my logic before continuing on, because I don't feel like my current code is clean enough.

I fixed the issues above, and now I think I will merge them back into the main branch before continuing. I know this isn't what the workflow was supposed to be, but this is a normal workflow, right? So, it's good practice.

#### Game Buttons

I've created buttons to play the game. Click on one of the options, and the playRound() function is called. I need to edit the code now to actually play the game; in my console version, playRound() returns just the winner: user, computer, or tie, and then other functions handle reporting the results and updating the score. I won't need getHumanChoice() at all anymore, whcih also means that I probably didn't need to fix that function before starting on this, but, again, it was good practice.

Going forward from here, I will need to tweak the gameplay functions. playRound() should take as parameters: the user input (from the button), getComputerChoice(), and the current scores, call a new function to determine the winner, format the text, update the scores and display the round winner. playGame() will created the results div and will initialize the scores then send them to playGame() which will return the scores. playGame() will check after each round if either (or both) player has 5 points. If so, it will print the winner in the results div it created.

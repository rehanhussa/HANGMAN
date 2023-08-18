# HANGMAN



## Project Description: 

The game I will be making will be Hangman. A single player game that asks for the user to guess the letters of a word and will deliver penalties if guessed wrong.
If the user is unable to guess the word the game will end. 
The player will also have access to hints.


## Technologies Used

![JavaScript](https://img.shields.io/badge/-JavaScript-05122A?style=flat&logo=javascript)
![HTML5](https://img.shields.io/badge/-HTML5-05122A?style=flat&logo=html5)
![CSS3](https://img.shields.io/badge/-CSS-05122A?style=flat&logo=css3)
![Git](https://img.shields.io/badge/-Git-05122A?style=flat&logo=git)


## Getting Started

https://simplehang.netlify.app/

## Screenshots

![image](https://github.com/rehanhussa/HANGMAN/blob/main/HANGMAN-1.png)

![image](https://github.com/rehanhussa/HANGMAN/blob/main/HANGMAN-2.png)



## Code Examples

```const getRandomWord = () => {
  const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
  currentWord = word; 
  document.querySelector(".hint-text b").innerText = hint;
  resetGame();
};
```


## Motivation

I wanted to create a clean and simple Hangman game to show off my CSS and Javascript skills.

## How to Play
1. Launch up the game clicking the link.
2. Proceed to guess a letter through either the virtual keyboard or your actual keyboard.
3. Repeat step 2 until you've guessed the correct word either using the hint or already guessed letters.
4. If possible try to guess the word using letters already guessed.
5. Use your vocabulary knowledge to win the game!


## BUGS 
1. 

## Next Steps
* Game menu screen to start the game.
* Add an API to randomly generate words.
* Score System. 
* 3D Animation?


## Hangman Game Wireframe: 
1. Initialize Game: - 
Create an array of words to guess from. - Select a random word from the array. - Initialize variables: guessedLetters, remainingGuesses. 


2. Display Components: - 
Display an underscore for unguessed letters, actual letters for guessed ones. - Show the guessed letters. - Show remaining guesses. 


3. Player Interaction: - 
Display input box for guessing a letter. - 
Display a "Guess" button to submit the letter. 


4. Guess Handling: - 
When the "Guess" button is clicked: - Get the guessed letter from the input. - Check if the letter is valid (single character). - Check if the letter has not been guessed before. - Add the guessed letter to the guessedLetters array. - Check if the guessed letter is in the word: - Update the word display. - If not in words, decrease remainingGuesses. 


5. Win/Loss Logic: - 
Check if the player has won (all letters guessed): - Display a win message. - Allow the player to start a new game. - Check if the player has lost (no remaining guesses): - Display a loss message. - Reveal the correct word. - Allow the player to start a new game. 


6. New Game: - 
When the player wants to start a new game: - Select a new random word. - Reset guessedLetters and remainingGuesses. - Reset the word display and guessed letters display. - Hide win/loss messages. 


7. Repeat: - Keep the game loop running until the player decides to stop.

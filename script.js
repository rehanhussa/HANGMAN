document.addEventListener('DOMContentLoaded', (event) => {
});

const wordDisplay = document.querySelector(".word-display");
const guessesText = document.querySelector(".guesses-text b");
const keyboardDiv = document.querySelector(".keyboard");
const gameModal = document.querySelector(".game-modal");
const playAgainBtn = gameModal.querySelector("button");
const hearts = document.querySelectorAll(".heart");

let leftArm = document.querySelector("#leftarm");
let rightArm = document.querySelector("#rightarm");
let leftLeg = document.querySelector("#leftleg");
let rightLeg = document.querySelector("#rightleg");
let body = document.querySelector("#body");
let head = document.querySelector("#head");

import wordList from "./word-list.js";

// Initializing game variables
let currentWord, correctLetters, wrongGuessCount;
const MAX_GUESSES = 6;

const resetGame = () => {
  resetBody();

  // Ressetting game variables and UI elements
  correctLetters = [];
  wrongGuessCount = 0;
  guessesText.innerText = `${wrongGuessCount} / ${MAX_GUESSES}`;
  wordDisplay.innerHTML = currentWord
    .split("")
    .map(() => `<li class="letter"></li>`)
    .join("");
  keyboardDiv
    .querySelectorAll("button")
    .forEach((btn) => (btn.disabled = false));
  gameModal.classList.remove("show");
  hearts.forEach((heart) => heart.classList.remove("lost"));
};

const getRandomWord = () => {
  // Selecting a random word and hint from the wordList
  const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
  currentWord = word; // Making currentWord as random word
  document.querySelector(".hint-text b").innerText = hint;
  resetGame();
};

const gameOver = (isVictory) => {
  // After the game is complete, showing modal with relevant details
  const modalText = isVictory ? `You found the word:` : "The correct word was:";
  gameModal.querySelector("img").src = `${isVictory ? "victory" : "lost"}.gif`;
  gameModal.querySelector("h4").innerText = isVictory
    ? "Congrats!"
    : "Game Over!";
  gameModal.querySelector("p").innerHTML = `${modalText} <b>${currentWord}</b>`;
  gameModal.classList.add("show");
};

const initGame = (button, clickedLetter) => {
  if (wrongGuessCount === MAX_GUESSES) return gameOver(false);
  // Checking if clickedLetter exists on the currentWord
  if (currentWord.includes(clickedLetter)) {
    // Showing all correct letters on the word display
    [...currentWord].forEach((letter, index) => {
      if (letter === clickedLetter) {
        correctLetters.push(letter);
        wordDisplay.querySelectorAll("li")[index].innerText = letter;
        wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
      }
    });
    if (!currentWord.includes(clickedLetter)) {
      wrongGuessCount++;
      displayBodyParts(wrongGuessCount); // Displaying body parts
    }
  } else {
    // If clicked letter doesn't exist then update the wrongGuessCount
    wrongGuessCount++;
    displayBodyParts(wrongGuessCount); // Displaying body parts
    hearts[wrongGuessCount - 1].classList.remove("heart");
    hearts[wrongGuessCount - 1].classList.add("lost");
  }
  button.disabled = true; // Disabling the clicked button so user can't click again
  guessesText.innerText = `${wrongGuessCount} / ${MAX_GUESSES}`;

  // Calling gameOver function if any of these condition meets
  //   if (wrongGuessCount === MAX_GUESSES) return gameOver(false);
  if (correctLetters.length === currentWord.length) return gameOver(true);
};

// Everytime I click on a letter or rendering - change

// import word-list.js  // import wordList from './word-list.js'

for (let i = 97; i <= 122; i++) {
  const button = document.createElement("button");
  button.innerText = String.fromCharCode(i);
  button.dataset.letter = String.fromCharCode(i);
  keyboardDiv.appendChild(button);
  button.addEventListener("click", (e) =>
    initGame(e.target, String.fromCharCode(i))
  );
}

// Creating keyboard buttons and adding event listeners

resetBody();

let bodyParts = [head, body, leftArm, rightArm, leftLeg, rightLeg];
function displayBodyParts(guesses) {
  bodyParts[guesses - 1].style.display = "block";
}

// Reset button

const resetButton = document.querySelector("#reset");

function resetBody() {
  leftArm.style.display = "none";
  rightArm.style.display = "none";
  leftLeg.style.display = "none";
  rightLeg.style.display = "none";
  body.style.display = "none";
  head.style.display = "none";
}

// Create a function that will be called when a key is pressed
function handleKeyDown(event) {
  // Check if the key is a letter
  if (event.key >= "a" && event.key <= "z") {
    // Get the button that corresponds to this letter
    const button = document.querySelector(`button[data-letter='${event.key}']`);
    if (button) {
      // Call initGame with the button and the letter
      if (button.disabled) {
        // Check if the button is disabled, if it is, return the game to prevent key's pressed
        return;
      }
      initGame(button, event.key);
    }
  }
}

// Add the event listener
window.addEventListener("keydown", handleKeyDown);

getRandomWord();
playAgainBtn.addEventListener("click", getRandomWord);

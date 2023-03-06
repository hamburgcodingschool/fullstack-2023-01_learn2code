let prompt = require("prompt-sync")();
let word = "voodoo";

let board = [];
let wrongGuesses = 0;

for (let i = 0; i < word.length; i++) {
  board.push("_");
}

while (true) {
  let guess = prompt("Guess a letter: ");
  if (letterInWord(word, guess)) {
    updateBoard(guess);
  } else {
    wrongGuesses++;
  }

  if (wrongGuesses > 10) {
    console.log("You lose");
  }

  if (wordIsComplete()) {
    console.log("You win");
  }
}

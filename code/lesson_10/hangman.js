let prompt = require("prompt-sync")();

let words = [
  "voodoo",
  "Jan",
  "Sandra",
  "Bruno",
  "Comando",
  "funky",
  "Landscape",
  "Portrait",
];

let dice = Math.floor(Math.random() * words.length);

let word = words[dice];

let board = [];
let wrongGuesses = 0;

for (let i = 0; i < word.length; i++) {
  board.push("_");
}

function letterInWord(word, guess) {
  return word.toUpperCase().indexOf(guess.toUpperCase()) !== -1;
}

function updateBoard(board, word, guess) {
  for (let i = 0; i < word.length; i++) {
    if (word[i].toUpperCase() === guess.toUpperCase()) {
      board[i] = word[i];
    }
    return board;
  }
}

function wordIsComplete(board) {
  return board.indexOf("_") === -1;
}

// function wordIsComplete(board, word) {
//   for (let i = 0; i < board.length; i++) {
//     if (board[i].toUpperCase() !== word[i].toUpperCase()) {
//       return false;
//     }
//   }
//   return true;
// }

while (true) {
  let guess = prompt("Guess a letter: ");
  if (letterInWord(word, guess)) {
    board = updateBoard(board, word, guess);
  } else {
    wrongGuesses++;
  }
  console.log(board);

  if (wrongGuesses > 10) {
    console.log("You lose");
    break;
  }

  if (wordIsComplete(board)) {
    console.log("You win");
    break;
  }
}

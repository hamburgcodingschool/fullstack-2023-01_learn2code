function updateBoard(board, word, guess) {
  for (let i = 0; i < word.length; i++) {
    if (word[i].toUpperCase() === guess.toUpperCase()) {
      board[i] = word[i];
    }
  }
  return board;
}

let myTestBoard = ["_", "_"];
let myTestWord = "vo";

console.log(updateBoard(myTestBoard, myTestWord, "o"));

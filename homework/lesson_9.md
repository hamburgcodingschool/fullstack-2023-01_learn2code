# Lesson 9 Homework

## Hangman

You can find the code skeleton in [hangman.js](../code/lesson_9/hangman.js) and the description in [hangman.md](../code/lesson_9/hangman.md)

We'll need a couple of functions to build our hangman game. Let's build them one by one. Build them in their own files we'll combine them in the next lesson.

### `letterInWord(word, guess)`

You can use `indexOf` here, but we need to make sure that we convert both the word and the guess to either all lower or uppercase.

```JavaScript
// examples for letterInWord()
console.log(letterInWord("vodoo", "F")) // false
console.log(letterInWord("vodoo", "V")) // true
console.log(letterInWord("vodoo", "i")) // true
console.log(letterInWord("Vodoo", "v")) // true
```

### `updateBoard(guess)`

Given a guess, we need to update our `board` array to show the guessed character on the board.

- go over `word` character by character
- if character is the guess replace the `"_"` in `board` on that position with the character of the guess.

```JavaScript
// Example for testing the function
let word = 'voodoo';
let board = ['_', '_', '_', '_', '_', '_'];
updateBoard('o');
console.log(board) // ['_', 'o', 'o', '_', 'o', 'o'];
```

## Something playful

(This is a bonus task to look at something a bit more graphical)

Go to [editor.p5js.org](https://editor.p5js.org)

Paste the following code and press the play button:

```
function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  translate(width / 2, height / 2);
  rotate(frameCount * 0.2);
  noFill();
  rect(0,0,frameCount,frameCount);
}
```

The way p5 works is that `setup()` is called once at the beginning. Here, we just set up a canvas of 400 times 400 pixels and clear it to a certain background color.

`draw()` is called "once per frame" meaning that we can create animations. Think of it sort of as an endless loop that is called over and over again. Think of `frameCount` as a counter that simply counts up every time `draw()` is called.

Can you work out yourself what the program does and why it does that?

`rotate()` and `translate()` change the coordinate system on the canvas for the next drawing instructions.

(`noFill()` simply makes sure that we only draw the border of the rectangle)

Play around with the parameters.

If you want to find out more, go to [reference](https://p5js.org/reference/) to check out the documentation.

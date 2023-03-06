# Hangman

## How it is played

1. Choose a random word
2. Output how many letters that word has
   - Setting up the board: n blank positions
3. Ask for a letter
4. Compare the letter with the word
   - letter is present in word
     - show letter(s) on the board
   - letter is wrong
     - count up "wrong answers counter"
5. check if user has entered >10 wrong guesses

   - User loses the game

6. check if word is complete

   - User wins the game

7. Repeat from step 3

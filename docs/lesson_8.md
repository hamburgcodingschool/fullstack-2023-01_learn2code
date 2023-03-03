# Lesson 8

Just a couple of loose remarks:

- Composition is a very powerful concept in programming:
  - Write small, simple functions that you then combine into more complex pieces of software
  - Functions you write can be used in other functions you write
- Function arguments are "positional" meaning that their **order** is important. The names, not so much.
- If you see a lot of duplication in two functions (as was the case with our `encrypt` and `decrypt` functions), it probably makes sense to try to "refactor" them. It's not always as easy as with our case.
- There are always more that one way to solve a problem. That's fine. It's not always clear if one of them is the best one. Often what's best dependens heavily on the context:
  - Do we want code that is easily readable and understandable, maybe even for non-programmers?
  - Do we need to squeeze the last bit of performance out of this piece of code, because it's ran a trillion times a second on billions of machines? (Not likely but you get the idea)
  - Does the code contain similar code that follows a certain style or structure?
  - Do _you_ have a clear preference because it makes more sense to you?

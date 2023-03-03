# Homework Lesson 8

## Longest Name Pt. 3

We've looked at Sandras version of the "find longest name" exercise from last homework. Here's how I remember the version looked:

```JavaScript
let famousFive = ["Anne", "Dick", "George", "Ju", "Timmy"];

function longest(names) {
  let longestLength = 0;
  let longestName = "";
  for(let i=0;i<names.length, i++) {
    if (names[i].length > longestLength) {
      longestLength = names[i].length;
      longestName = names[i];
    }
  }
  return longestName;
}

console.log(longest(famousFive));
```

I want you to try out two variants of this:

1. Can you rewrite this function so that instead of the name itself, it uses the index of the longest name? (So instead of a `longestName` variable it has a `longestIndex` variable instead)
2. Can you rewrite thus function so that instead of having to have two variables for name and length, you only have one variable (but the function still needs to return the name!)

## Fill in the blanks

Consider the following sceleton of a function

```JavaScript
function blankFormatter(word, characters) {
  let formatted = "";

  return formatted;
}
```

It has two arguments:

1. The first one is a string, which probably is a word. A word like "Plusquamperfect" or "Shortage".
2. The second one is an array of characters. It can be empty, but will probably contain a number of characters that may or may not be in the word.

- It should return a string. The string should have the same number of characters as the `word` argument.
- For each character in `word` it should display:
  - The character itself if you can find the character in the `characters` array
  - An underscore (`_`) if the character is not to be found in the `characters` array
- Case should be ignored, so a `p` in the characters array matches a "P" in `word`.
  **Hint**: To figure out if a an element is in an array, you can either use the findInArray function we've built before, or you can use `indexOf` that works the same way on arrays as it works on strings, meaning that `[1,2,3].indexOf(2)` will return `1`, whereas `[1,2,3].indexOf(4)` will return `-1`.

Here are a couple of examples:

```JavaScript
console.log(blankFormatter("voodoo", ['o', 'f'])) // "_oo_oo"
console.log(blankFormatter("Plusquamperfect", ['u', 'p', 't'])) // "P_u__u________t"
console.log(blankFormatter("Shortage", [])) // "________"
```

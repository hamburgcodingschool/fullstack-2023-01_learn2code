# Homework Lesson 7

I know the second part of the first exercise is a big pile of stuff to solve.

Take it as a challenge and we'll have a look at it together in the next lesson so don't feel bad if you can only solve it partly or not at all.

## My first encryption scheme

This is a two step exercise.

### indexOf

Write a function that, instead of testing if a character is in a string (as we did this lesson), so returning a boolean, it returns the index in the string. If the character is not found, return -1.

(The function should be easily adaptable from isCharacterInString - If you want to cheat, google for "JavaScript indexOf")

### the caesar cipher

given these two variables:

```JavaScript
let original = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let encrypted = "FGHIJKLMNOPQRSTUVWXYZABCDE"
```

Write two functions. One should encrypt a text and the other one should decrypt it. The encryption works like this:

- Character by character, walk through the string and
  - make sure that it is uppercase
  - look up the position of the character in `original`
  - look up the character _at the same position_ in `encrypted`
  - add that character to a new string
  - if the character is _not_ in `original`, for example, because it is a space or a comma or number or whatever, add the original character to the new string
- Return the new string at the end

This encryption is called the caesar cipher.

Example:

```JavaScript
  encodeCaesar("HELLO DEAR STUDENTS") // => "MJQQT IJFW XYZIJSYX"
  decodeCaesar("MJQQT IJFW XYZIJSYX") // => "HELLO DEAR STUDENTS"
```

The decryption works almost in the same way, any ideas what you need to change?

Hint: Do _not_ care about the capitalisation of the original text when encrypting and decrypting. Only dealing with uppercase is fine.

Hint: Remember that you can concatenate strings with the `+`, so part of your code could look like this:

```JavaScript
let encrypted = ""
for(let i=0;i<original.length;i++) {
  // stuff happens
  encrypted = encrypted + magicallyLookedUpCharacter;
}
```

To make it easier, at first ignore extra characters.

If you want to make them work, remember that your indexOf function is supposed to
return -1 if the character wasn't found. So there's your special case you need to
handle.

## Who here has the longest name

(Adapted from last lesson)

Given the following array:

```JavaScript
let names = ["Anne", "Dick", "George", "Ju", "Timmy"];
```

Write a function that returns the longest name in the list

As we've seen in todays lesson, Strings in many ways behave like Arrays and one of that way is that Strings also have a `.length` property we can use:

```JavaScript
let name = "Jan"
name.length // => 3
```

<details>
  <summary>Tipps</summary>
  <li>You can solve this with one variable that just holds the current candidate for the longest string and then you can compare that variable against the current array item in a for loop. If the current array item is longer, replace the current candidate in the variable with the current array item.</li>
  <li>Or, you can solve this with two variables, where one holds the <b>index</b> of the current candidate, and one holds the current maximum length. Try both approaches, maybe, and figure out which one you like more</li>
</details>

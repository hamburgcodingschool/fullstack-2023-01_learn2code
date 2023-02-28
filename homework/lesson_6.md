# Homework Lesson 6

## Leap years

- Create a program that outputs all leap years between 1900 and 2200
- Here's a quote from the german Wikipedia explaining the rules:
  - Die durch 4 ganzzahlig teilbaren Jahre sind, abgesehen von den folgenden Ausnahmen, Schaltjahre.
  - Säkularjahre, also die Jahre, die ein Jahrhundert abschließen (z. B. 1800, 1900, 2100 und 2200), sind, abgesehen von der folgenden Ausnahme, keine Schaltjahre.
  - Die durch 400 ganzzahlig teilbaren Säkularjahre, zum Beispiel das Jahr 2000, sind jedoch Schaltjahre.
- You can check the Wikipedia article as well for a full list to check your result against.

## Find me something

- Create an array with some random data (think of something fun yourself, could be strings, could be numbers)
- Create a single variable that contains something that may or may not be in the array
- Write some code that finds out if the thing in the variable is also in the array

```JavaScript
  let haystack = [1,2,3,4,5];
  let needle = 7;
  let found = false
  // code for finding the needle in the haystack
  // for(...) {
  //   ...
  // }
  console.log("Found?", found);
```

## Who here has the longest name

Given the following array:

```JavaScript
let names = ["Anne", "Dick", "George", "Ju", "Timmy"];
```

Find and output the longest name in the list.

Hint: Strings in many ways behave like Arrays and one of that way is that strings also have a `.length` property we can use:

```JavaScript
let name = "Jan"
name.length // => 3
```

<details>
  <summary>Tipps</summary>
  <li>You can solve this with one variable that just holds the current candidate for the longest string and then you can compare that variable against the current array item in a for loop. If the current array item is longer, replace the current candidate in the variable with the current array item.</li>
  <li>Or, you can solve this with two variables, where one holds the <b>index</b> of the current candidate, and one holds the current maximum length. Try both approaches, maybe, and figure out which one you like more</li>
</details>

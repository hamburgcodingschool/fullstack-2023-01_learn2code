# Lesson 4 - while and for

## Loops

With loops and if/else we have most concepts together to build all kinds of programs.

## while

`while()` is the simple loop in JavaScript. It loops until the condition given is false. So `while(true)` will actually run forever.

We can build a simple counter with this:

```JavaScript
let counter = 0;
while(counter < 20) {
  console.log(counter);
  counter++;
}
```

Depending on where you increment the counter (at the beginning or the end of the loop block), we can use it to count from 1 to 20 or from 0 to 19.

## for

This simple counter idea is used very often in programming and so JavaScript and many other languages have a specialised construct for this

`for(;;)` is more complex to set up but we will use it a lot for these simple counting cases.

Here's some code that is functionally equivalent to the `while()` example above:

```JavaScript
for(let counter=0;counter<20;counter++) {
  console.log(counter);
}
```

The for loop has three parts in the parentheses:

- The initialisation (Here used to set up our counter variable)
- The test if the loop should continue (here to check if we reached 20)
- The "after-each-loop" part (here used to increment the counter)

The canonical example for a for loop always looks like this:

```JavaScript
for(let i=0;i<20;i++) {}
```

Using `i` as a single character variable name is okay here, because `i` is a very common name for the loop counter, you will find examples for this in every programming language since the early days (when variable names often were just one or two characters long because the programming language only would allow these)

Of course you can transform and also misuse the very flexible for loop in JavaScript. But mostly, it will look something like that.

## arrays

The Array is a data type that is different from the simple data types we've looked at so far. It allows us to create lists of things. One way to create arrays is called an array literal and looks like this:

```JavaScript
let list = [1, 2, 3, 4];
```

Arrays in JavaScript can be arbitrarily long, can be changed in size at any time.

If we want to access items (also called members) of the array, we can do so by the index, or the position of the item in the array:

```JavaScript
let list = [1, 2, 3, 4];
console.log(list[0])
```

The index always starts at 0 (In JavaScript at least).

We can ask the array for it's length by checking the `.length` property:

```JavaScript
let list = [1, 2, 3, 4];
console.log(list.length);
```

We can loop over all the elements in an array very conveniently with a for loop:

```JavaScript
let list = [1, 2, 3, 4];
for(let i=0;i<list.length;i++) {
  let item = list[i];
}
```

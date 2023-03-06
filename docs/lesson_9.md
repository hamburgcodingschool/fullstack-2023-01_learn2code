# Lesson 9

## Multidimensional array

When we first looked at arrays, I said that array elements could be anything. That means that they also can be arrays.

If we pack a bunch of arrays of the same size into an array, we get a **matrix**, which is a data structure often used in computer graphics, but also in statistics etc:

```JavaScript
let myMatrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
```

We can access individual "cells" in this matrix by using the square brackets twice, first for the row, then for the column:

```JavaScript
myMatrix[0][0] // 1
myMatrix[2][2] // 9
```

To iterate over all of the elements of a matrix, we'll need two for loops. For example, here's the code to sum up all the elements of the matrix:

```JavaScript
function sumMatrix(matrix) {
  let sum = 0;
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[i].length; x++) {
      sum += matrix[y][x];
    }
  }
  return sum;
}
```

## Objects

Objects are similar to arrays, but instead of addressing the elements by an \*_index_ (a number that represents the position in the array), Object elements are addressed by a name or a **key**.

You can create an object like this:

```JavaScript
let myObject = {
  name: "Jan",
  age: 47,
  eyeColor: 'who knows',
  lastDiceRolls: [20, 18, 1, 17],
  "last-dice-roll": 20
};
```

if the name or key does not contain special characters (such as the `-` in `last-dice-roll`), you can write the key without quotes.

Same is true for addressing the object elements, where we can use the dot for accessing "normal" names, but need to use square brackets for names with special characters:

```JavaScript
myObject.name // "Jan"
myObject.age  // 47
myObject["last-dice-rolll"] // 20
```

The syntax using the square brackets **also** works for the "normal" names, though:

```JavaScript
myObject["name"] // "Jan"
```

Objects are a very important building block for JavaScript and specifically the web part of it, so be prepared to see a lot of that in later courses.

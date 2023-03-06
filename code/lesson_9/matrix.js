let myMatrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function sumMatrix(matrix) {
  let sum = 0;
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[i].length; x++) {
      sum += matrix[y][x];
    }
  }
  return sum;
}

console.log(sumMatrix(myMatrix));

let myArray = [4, 5, 6];

function sumArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

//console.log(sumArray(myArray));

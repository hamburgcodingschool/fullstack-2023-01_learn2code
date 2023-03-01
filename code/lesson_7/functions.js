// function multiply(a, b) {
//   return a * b;
// }

// console.log(multiply(3,5));
// console.log(multiply(13,5));

function multiply(array, multiplicator) {
  let output = [];
  // Check if anything is given for array, if not, return an empty array
  if (array == null) {
    return [];
  }

  for (let i = 0;i < array.length; i = i + 1) {
    let element = array[i];
    output[i] = element * multiplicator;
  }
  return output;
}

console.log(multiply(null, 1))


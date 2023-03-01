let original = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let encrypted = "FGHIJKLMNOPQRSTUVWXYZABCDE"

function caesar(string) {
  let upper = string.toUpperCase();
  let encoded = "";
  for(let i=0;i<upper.length;i++) {
    let pos = original.indexOf(upper[i]);
    if (pos === -1) {
      encoded += upper[i];    
    } else {
      encoded += encrypted[pos];
    }
  }
  return encoded;
}
function deCaesar(string) {
  let upper = string.toUpperCase();
  let encoded = "";
  for(let i=0;i<upper.length;i++) {
    let pos = encrypted.indexOf(upper[i]);
    if (pos === -1) {
      encoded += upper[i];    
    } else {
      encoded += original[pos];
    }
  }
  return encoded;
}

console.log(caesar("HELLO DEAR STUDENTS"));
console.log(deCaesar(caesar("HELLO DEAR STUDENTS")));
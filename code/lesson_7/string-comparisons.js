// E3: 

function equalStrings(a, b) {
  return a === b
}

console.log(equalStrings("the", "the"));
console.log(equalStrings("the", "tha"));

// compare two strings but ignore the case
// Hint: 

function equalStringsIgnoreCase(a,b) {
  return a.toLowerCase() === b.toLowerCase();
}

console.log("tHe".toUpperCase(), "ThE".toLowerCase());

console.log(equalStringsIgnoreCase("tHe", "The")) // => true
console.log(equalStringsIgnoreCase("tHe", "ThA")) // => false

//-------------------------------------------------

function isInString(str, character) {
  for(let i=0;i<str.length;i++) {
    if (str[i] === character) {
      return true;
    }
  }
  return false;
}

console.log(isInString("hello", "h")) // => true
console.log(isInString("hello", "w")) // => false



let original = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let encrypted = "FGHIJKLMNOPQRSTUVWXYZABCDE";

function encrypt(inputText) {
  return enDecrypt(inputText, original, encrypted);
}
function decrypt(inputText) {
  return enDecrypt(inputText, encrypted, original);
}
function enDecrypt(originalText, inputString, outputString) {
  let solution = "";
  for (let i = 0; i < originalText.length; i++) {
    let character = originalText[i];
    let position = inputString.indexOf(character.toUpperCase());
    if (position === -1) {
      solution += character;
    } else {
      let encryptedCharacter = outputString[position];
      solution += encryptedCharacter;
    }
  }
  return solution;
}

console.log(decrypt(encrypt("hello world")));
console.log(encrypt("hello world"));

console.log(enDecrypt("abcd", "DBAC", "ABCD"));

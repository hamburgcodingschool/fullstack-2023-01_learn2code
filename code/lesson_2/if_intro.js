let prompt = require('prompt-sync')();

let age = prompt("What's your age? ");

if (age >= 16) {
  if (age >= 18) {
    console.log("You're allowed to drink any alcoholic drink. Drink responsibly!");
  } else {
    console.log("You're allowed to drink Beer and Wine etc.. Drink responsibly!");
  }
} else {
  console.log("You're not allowed to drink any alcoholic drink");
}
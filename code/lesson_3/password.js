let prompt = require("prompt-sync")();
// E2: Let's build a Login mask
let username = "jan";
let password = "correct horse battery staple";

let enteredUsername = prompt("Username: ");
let enteredPassword = prompt("Password: ");

if (enteredUsername === username && enteredPassword === password) {
  console.log("Welcome to the system!")
} else {
  console.log("You're not allowed in");
}

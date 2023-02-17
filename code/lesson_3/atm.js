let prompt = require('prompt-sync')();

let balance = 200;

let withdraw = prompt("Withdraw: ");

if (balance >= withdraw) {
  let newBalance = balance - withdraw;
  console.log("New Balance: " + newBalance);
} else {
  console.log("Insufficient Funds");
}

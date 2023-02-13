// meant to be copied into https://replit.com/languages/nodejs
// A simple unit/currency conversion tool
let moneyIn = prompt("Money in");
let conversionRate = 1.25;
// make sure "moneyIn" is a number
let moneyOut = Number(moneyIn) * conversionRate;

console.log("Money out", moneyOut);
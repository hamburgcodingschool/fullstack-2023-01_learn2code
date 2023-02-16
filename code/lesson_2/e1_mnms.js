// Birthday party. We have x M&Ms
// we have y Kids in attendence.
// The sweets should be divided up evenly
// How many are remaining so that dad or mom
// can snack on them?

// Input: number of M&Ms, number of Kids
// Output should look like this:
// Daddy gets 12 M&M's

let prompt = require('prompt-sync')();

let kids = prompt("How many kids? ");
let sweets = prompt("How many M&Ms? ");

let remaining = sweets % kids;

console.log("Daddy gets " + remaining + " M&Ms.");
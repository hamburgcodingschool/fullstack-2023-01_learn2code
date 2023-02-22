let prompt = require("prompt-sync")();

// let balance = 2000000;
// let choice = prompt("would you like to withdraw or deposit? (w/d)");
// let value = prompt("what amount?");

// console.log("Your balance is $" + balance);
// console.log("Your entered " + choice);
// console.log("The amount " + value);

// if (choice === "w") {
//     console.log("You chose to Withdraw " + value);
//     balance = balance - value;

// } else {
//     console.log("You chose to Deposit " + value);
//     balance = balance + value;

// }

// console.log("Thank you for using our services. Your updated balance is $" + balance);


// let nr1AsString = prompt("first number?");
// let nr2AsString = prompt("second number?");
// let nr3AsString = prompt("third number?");

// let nr1 = Number(nr1AsString);
// let nr2 = Number(nr2AsString);
// let nr3 = Number(nr3AsString);

// TODO: prompt user for numbers once I am done with the logic

// let nr1 = 400;
// let nr2 = 400;
// let nr3 = 255;

// if (nr1 > nr2) {
//     if (nr1 > nr3) {
//         console.log(nr1);
//     } else {
//         console.log(nr3);
//     }
// } else {
//     if (nr2 > nr3) {
//         console.log(nr2);
//     } else {
//         console.log(nr3);
//     }
// }


let nr1 = 400;
let nr2 = 600;
let nr3 = 255;
let nr4 = 1255;
let nr5 = 55;

let max = nr1; // 1255

if (nr2 > max) {
    max = nr2;
}

if (nr3 > max) {
    max = nr3;
}

if (nr4 > max) {
    max = nr4;
}

if (nr5 > max) {
    max = nr5;
}

console.log(max);
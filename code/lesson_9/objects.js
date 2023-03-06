let object = {
  name: "Jan",
  age: 47,
  eyeColor: "who knows",
  lastDiceRolls: [20, 18, 1, 17],
  "last-dice-roll": 20,
  upperCaseName: function () {
    return this.name.toUpperCase();
  },
};

console;

let myArray = [0, 1, 2, 3];

console.log(object.name, object.age, object["last-dice-roll"]);

// Database table "users"
// id, name, age, password

let table = [
  { id: 1, name: "jan", password: "****" },
  { id: 2, name: "sandra", password: "****" },
  { id: 3, name: "bruno", password: "****" },
];

table[0].name; // => "jan"

// <a href="http://example.com" id="link">Link</a>
let domNode = document.getElementById("link");
domNode.id; // -> "link"
domNode.childNodes;

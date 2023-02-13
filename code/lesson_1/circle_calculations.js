// meant to be copied into https://replit.com/languages/nodejs
let radiusAsString = prompt("Circle Radius");
let radius = Number(radiusAsString);
let circumference = 2 * Math.PI * radius;
let area = Math.PI * radius * radius; // alternatively: Math.PI * (radius ** 2);

console.log("Radius given", radius);
console.log("Circumference", circumference);
console.log("Area", area);

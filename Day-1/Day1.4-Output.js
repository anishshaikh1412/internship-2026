/**
 * Day 1.4 — Section 2: Predict the Output
 */

console.log("--- Section 2 Outputs ---");

// Q1. Scope
let city = "Anand";
function showCity() {
  let city = "Surat";
  console.log(city); // Surat
}
showCity();
console.log(city); // Anand

// Q2. Hoisting
console.log(price); // undefined
var price = 500;
console.log(price); // 500

// Q3. Function Return
function calculate(a, b) {
  console.log(a + b); // 30
}
const result = calculate(10, 20);
console.log(result); // undefined

// Q4. Call Stack
function first() {
  console.log("A");
  second();
  console.log("B");
}
function second() {
  console.log("C");
}
first(); // A, C, B

// Q5. Shadowing
let marks = 60;
if (true) {
  let marks = 90;
  console.log(marks); // 90
}
console.log(marks); // 60

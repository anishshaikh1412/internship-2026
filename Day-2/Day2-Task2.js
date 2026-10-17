/**
 * Day 2 - Task 2
 * Section B — Predict the Output (15 Marks)
 * Each question carries 3 marks.
 */

// Q1
function outer() {
  let value = 5;
  return () => ++value;
}

const counter = outer();

console.log(counter()); // 6
console.log(counter()); // 7

// Q2
const numbers1 = [1, 2, 3];
const result = numbers1.map(n => n * 3);
console.log(result); // [3, 6, 9]

// Q3
const numbers2 = [10, 20, 30, 40];
console.log(numbers2.filter(n => n >= 30)); // [30, 40]

// Q4
const numbers3 = [4, 8, 12];
console.log(numbers3.find(n => n > 5)); // 8

// Q5
function run(callback) {
  console.log("A");
  callback();
  console.log("C");
}

run(() => console.log("B")); // A, B, C

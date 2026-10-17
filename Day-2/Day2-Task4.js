/**
 * Day 2 - Task 4
 * Section D — Coding Exercises (20 Marks)
 * Each question carries 5 marks.
 */

// Q1: Create a closure-based counter that starts at 0 and increments by 2 on every call.
function createCounterByTwo() {
  let count = 0;
  return function () {
    count += 2;
    return count;
  };
}

const counterByTwo = createCounterByTwo();
console.log(counterByTwo()); // 2
console.log(counterByTwo()); // 4
console.log(counterByTwo()); // 6

// Q2: Write a calculator function that accepts two numbers and a callback operation.
function calculator(a, b, operation) {
  return operation(a, b);
}

const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;

console.log(calculator(10, 5, add));       // 15
console.log(calculator(10, 5, subtract));  // 5
console.log(calculator(10, 5, multiply));  // 50
console.log(calculator(10, 5, divide));    // 2

// Q3: Use map() to convert an array of prices into prices with 18% GST added.
const prices = [100, 250, 500, 1000];

const pricesWithGST = prices.map(price => {
  const gst = price * 0.18;
  return price + gst;
});

console.log(pricesWithGST); // [118, 295, 590, 1180]

// Q4: Use filter() to select users who are active from an array of user objects.
const users = [
  { id: 1, name: "Asha", active: true },
  { id: 2, name: "Ravi", active: false },
  { id: 3, name: "Priya", active: true },
  { id: 4, name: "Karan", active: false },
  { id: 5, name: "Meera", active: true }
];

const activeUsers = users.filter(user => user.active === true);

console.log(activeUsers);
// [{ id: 1, name: "Asha", active: true },
//  { id: 3, name: "Priya", active: true },
//  { id: 5, name: "Meera", active: true }]

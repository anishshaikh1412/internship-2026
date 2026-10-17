/**
 * Day 2 - Task 3
 * Section C — Debugging (15 Marks)
 * Each question carries 5 marks.
 */

// Q1 — Closure: Correct the code so the counter increases by one on each call.
function createCounter() {
  let count = 0;

  // FIX: Return a function that increments and returns count
  return function () {
    return ++count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2

// Q2 — Array Transformation: Fix to create array of doubled numbers
const numbers = [1, 2, 3];

// FIX: Use map() instead of forEach() to get a new array
const doubled = numbers.map(n => n * 2);

console.log(doubled); // [2, 4, 6]

// Q3 — Finding a Student: Correct the condition for ID 2
const students = [
  { id: 1, name: "Asha" },
  { id: 2, name: "Ravi" }
];

// FIX: Use === for comparison (original used = assignment)
const student = students.find(student => student.id === 2);

console.log(student); // { id: 2, name: "Ravi" }

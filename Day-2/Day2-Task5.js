/**
 * Day 2 - Task 5
 * Section E — Mini Project: Student Result Processor (20 Marks)
 */

// ===== Student Data =====
// At least five student objects with id, name, and marks
const students = [
  { id: 1, name: "Asha", marks: 85 },
  { id: 2, name: "Ravi", marks: 45 },
  { id: 3, name: "Priya", marks: 72 },
  { id: 4, name: "Karan", marks: 38 },
  { id: 5, name: "Meera", marks: 91 },
  { id: 6, name: "Vikram", marks: 55 }
];

// ===== Closure-based Operation Counter =====
// Tracks how many times a result-processing operation is performed
function createOperationCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const trackOperation = createOperationCounter();

// ===== 1. forEach() — Print every student's name and marks =====
// forEach() executes a provided function once for each array element.
// It does NOT return a new array; used for side effects like logging.
console.log("=== All Students (forEach) ===");
students.forEach(student => {
  trackOperation(); // Track this operation
  console.log(`${student.name}: ${student.marks} marks`);
});

// ===== 2. filter() — Select students with marks >= 50 =====
// filter() creates a new array with elements that pass the test
// implemented by the provided callback function.
console.log("\n=== Passed Students (filter) ===");
const passedStudents = students.filter(student => {
  trackOperation(); // Track this operation
  return student.marks >= 50;
});
console.log(passedStudents);

// ===== 3. map() — Create array of names who passed =====
// map() creates a new array by transforming each element using
// the provided callback function.
console.log("\n=== Passed Student Names (map) ===");
const passedNames = passedStudents.map(student => {
  trackOperation(); // Track this operation
  return student.name;
});
console.log(passedNames);

// ===== 4. find() — Locate a student by ID =====
// find() returns the FIRST element that satisfies the provided
// testing function. Returns undefined if no match is found.
console.log("\n=== Find Student by ID ===");
const targetId = 3;
const foundStudent = students.find(student => {
  trackOperation(); // Track this operation
  return student.id === targetId;
});
console.log(`Student with ID ${targetId}:`, foundStudent);

// ===== 5. Closure Counter — Track total operations =====
console.log("\n=== Operation Tracking (Closure) ===");
console.log(`Total operations performed: ${trackOperation()}`);
// Note: calling trackOperation() here also increments it
// To display without incrementing, we'd need a getter function.
// Here's a better version with a getter:

function createTrackedCounter() {
  let count = 0;
  return {
    increment: function () {
      count++;
      return count;
    },
    getCount: function () {
      return count;
    }
  };
}

const tracker = createTrackedCounter();
students.forEach(() => tracker.increment());        // 6
students.filter(s => s.marks >= 50).forEach(() => tracker.increment()); // 4 more
passedNames.forEach(() => tracker.increment());     // 4 more
students.find(s => s.id === 3); tracker.increment(); // 1 more

console.log(`Final operation count: ${tracker.getCount()}`); // 15

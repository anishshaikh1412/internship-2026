// Day 1.2 - Task 2: Temporal Dead Zone

// Incorrect code:
// console.log(course);
// const course = "MERN Stack";

// Error:
// ReferenceError: Cannot access 'course' before initialization

// Explanation:
// const and let declarations are hoisted,
// but they remain uninitialized in the Temporal Dead Zone (TDZ)
// until execution reaches their declaration.

// Correct code:

const course = "MERN Stack";

console.log(course);

// Output:
// MERN Stack

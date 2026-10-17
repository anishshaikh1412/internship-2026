// Day 1.2 - Task 4: Call Stack

function third() {
  console.log("Third");
}

function second() {
  console.log("Second");
  third();
  console.log("Second finished");
}

function first() {
  console.log("First");
  second();
  console.log("First finished");
}

first();

// Output:
// First
// Second
// Third
// Second finished
// First finished

// Call stack when third() is running:
//
// Top
// ┌──────────────────┐
// │ third()          │
// ├──────────────────┤
// │ second()         │
// ├──────────────────┤
// │ first()          │
// ├──────────────────┤
// │ Global execution │
// └──────────────────┘
// Bottom

// Explanation:
// first() calls second(), and second() calls third().
// While third() executes, all three function calls
// are active on the call stack.
// When third() returns, execution resumes in second().
// After second() returns, execution resumes in first().
// Completed function calls are removed from the stack.

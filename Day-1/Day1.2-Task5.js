// Day 1.2 - Task 5: Debugging

// Original code:
// printMessage();
// const message = "Welcome";
//
// function printMessage() {
//   console.log(message);
// }

// Error:
// ReferenceError: Cannot access 'message' before initialization

// Explanation:
// The function declaration is not the problem because
// function declarations are hoisted.

// printMessage() executes before message is initialized.
// When the function accesses message, the const variable
// is still in its Temporal Dead Zone.

// Corrected code:

const message = "Welcome";

printMessage();

function printMessage() {
  console.log(message);
}

// Output:
// Welcome

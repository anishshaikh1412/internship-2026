// Day 1.2 - Task 3: Function Comparison

// Function declaration
console.log(squareDeclaration(5));

function squareDeclaration(number) {
  return number * number;
}

// Output: 25

// Function expression
try {
  console.log(squareExpression(5));
} catch (error) {
  console.log(error.name);
}

const squareExpression = function (number) {
  return number * number;
};

console.log(squareExpression(5));

// Output:
// ReferenceError
// 25

// Explanation:
// Function declarations are fully hoisted,
// so they can be called before their declaration.

// A function expression assigned to const cannot be accessed
// before initialization because const is in the TDZ.
// After initialization, the function can be called normally.

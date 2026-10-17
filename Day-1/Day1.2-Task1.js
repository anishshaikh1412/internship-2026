// Day 1.2 - Task 1: Hoisting

console.log(price);

var price = 100;

console.log(price);

// Output:
// undefined
// 100

// Explanation:
// var declarations are hoisted and initialized with undefined.
// The assignment price = 100 happens when execution reaches that line.
// Therefore, the first console.log() prints undefined,
// while the second console.log() prints 100.

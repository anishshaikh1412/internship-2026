/**
 * Day 2 - Task 6
 * Section F — Viva Questions (10 Marks)
 * Each question carries 2 marks.
 */

/*
 * Q1: Explain a closure with a real example.
 * ---------------------------------------------------
 * A closure is a function that "remembers" the variables from its
 * lexical scope even after the outer function has finished executing.
 * The inner function retains access to the outer function's variables.
 *
 * Real example: A bank account balance tracker.
 */
function createBankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit: function (amount) {
      balance += amount;
      return `Deposited ${amount}. New balance: ${balance}`;
    },
    withdraw: function (amount) {
      if (amount > balance) return "Insufficient funds";
      balance -= amount;
      return `Withdrew ${amount}. New balance: ${balance}`;
    },
    getBalance: function () {
      return balance;
    }
  };
}

const myAccount = createBankAccount(1000);
console.log(myAccount.deposit(500));   // Deposited 500. New balance: 1500
console.log(myAccount.withdraw(200));  // Withdrew 200. New balance: 1300
console.log(myAccount.getBalance());   // 1300
// `balance` is private — not accessible from outside, only via closure.

/*
 * Q2: What is the difference between map() and filter()?
 * ---------------------------------------------------
 * map():
 *   - Transforms EACH element in the array.
 *   - Returns a new array of the SAME length as the original.
 *   - The callback's return value becomes the new element.
 *
 * filter():
 *   - Selects elements that pass a test (callback returns true/false).
 *   - Returns a new array with only the matching elements.
 *   - May have a SHORTER length than the original.
 */

const nums = [1, 2, 3, 4, 5];
console.log(nums.map(n => n * 10));      // [10, 20, 30, 40, 50]  (same length)
console.log(nums.filter(n => n > 2));    // [3, 4, 5]              (shorter)

/*
 * Q3: What is the difference between find() and filter()?
 * ---------------------------------------------------
 * find():
 *   - Returns the FIRST matching element (a single value).
 *   - Stops iterating as soon as a match is found.
 *   - Returns undefined if no match is found.
 *
 * filter():
 *   - Returns ALL matching elements as a NEW ARRAY.
 *   - Iterates through the entire array.
 *   - Returns an empty array [] if no matches are found.
 */

const items = [3, 7, 11, 14, 18];
console.log(items.find(n => n > 10));    // 11 (first match only)
console.log(items.filter(n => n > 10));  // [11, 14, 18] (all matches)

/*
 * Q4: Why is a callback useful?
 * ---------------------------------------------------
 * A callback is useful because it:
 *   1. Enables asynchronous programming (e.g., setTimeout, API calls).
 *   2. Allows customizing behavior of higher-order functions.
 *   3. Promotes code reusability and separation of concerns.
 *   4. Enables event-driven programming (e.g., onClick handlers).
 */

// Example: Customizing behavior via callback
function processArray(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

console.log(processArray([1, 2, 3], n => n * n));   // [1, 4, 9]
console.log(processArray([1, 2, 3], n => n + 100)); // [101, 102, 103]

/*
 * Q5: Give an example of a higher-order function.
 * ---------------------------------------------------
 * A higher-order function either:
 *   - Accepts one or more functions as arguments, OR
 *   - Returns a function as its result.
 *
 * Built-in examples: map(), filter(), forEach(), find(), reduce(), setTimeout()
 */
function greet(greeting) {
  return function (name) {
    return `${greeting}, ${name}!`;
  };
}

const sayHello = greet("Hello");   // Returns a function
console.log(sayHello("Tanvir"));   // "Hello, Tanvir!"
console.log(sayHello("Ravi"));     // "Hello, Ravi!"

// Also: a function that accepts another function
function repeat(n, action) {
  for (let i = 0; i < n; i++) action(i);
}
repeat(3, i => console.log(`Iteration ${i}`));

/**
 * Day 3 - Task 6
 * Section F — Viva Questions (10 Marks)
 * Each question carries 2 marks.
 */

// ===== Q1: Difference between object and array =====
// Object: key-value pairs, accessed by key name (e.g., user.name)
// Array:  ordered list, accessed by numeric index (e.g., arr[0])
const obj = { a: 1, b: 2 };
const arr = [1, 2, 3];
console.log(obj.a);   // 1  (key access)
console.log(arr[0]);  // 1  (index access)

// ===== Q2: Spread vs Rest =====
// Spread (...):  EXPANDS elements. Used in function calls, arrays, objects.
// Rest (...):    COLLECTS elements. Used in function params and destructuring.

// Spread example:
const nums = [1, 2, 3];
console.log([...nums, 4, 5]); // [1, 2, 3, 4, 5]

// Rest example:
function sum(...values) {
  return values.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4)); // 10

// ===== Q3: What is a shallow copy? =====
// A shallow copy duplicates the TOP-LEVEL properties only.
// Nested objects/arrays are still SHARED by reference between copies.
const original = { a: 1, nested: { b: 2 } };
const shallow = { ...original };

shallow.a = 100;            // top-level: safe
shallow.nested.b = 200;     // nested: affects BOTH!

console.log(original.a);         // 1 (unchanged)
console.log(original.nested.b);  // 200 (changed! shared reference)

// ===== Q4: Why avoid mutating React state directly? =====
// 1. React compares references to detect changes. Mutating the same object
//    means React may not re-render.
// 2. Time-travel debugging / undo breaks.
// 3. Effects and memoization may not re-run correctly.
// Correct way: create a new object with spread or Object.assign.
const state = { count: 0 };
// ❌ Bad: state.count = 1;
// ✅ Good:
const newState = { ...state, count: 1 };
console.log(newState); // { count: 1 }

// ===== Q5: Safe access to possibly missing nested property =====
// Use optional chaining (?.) and nullish coalescing (??).
const user = { profile: null };

console.log(user.profile?.name);        // undefined (no crash)
console.log(user.profile?.name ?? "N/A"); // "N/A"

const user2 = { profile: { name: "Tanvir" } };
console.log(user2.profile?.name);       // "Tanvir"

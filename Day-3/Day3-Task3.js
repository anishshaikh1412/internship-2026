/**
 * Day 3 - Task 3
 * Section C — Debugging (15 Marks)
 * Each question carries 5 marks.
 */

// ===== Q1 =====
// Problem: user.address is undefined, so accessing .city throws TypeError.
const user = { name: "Asha" };

// FIX: Use optional chaining (?.) to safely access nested property.
console.log(user.address?.city); // undefined (no crash)

// ===== Q2 =====
// Problem: `copy = numbers` copies the REFERENCE, not the array.
// So push affects both variables.
const numbers = [1, 2, 3];

// FIX: Use spread to create a new array.
const copy = [...numbers];
copy.push(4);

console.log(numbers); // [1, 2, 3]
console.log(copy);    // [1, 2, 3, 4]

// ===== Q3 =====
// Problem: The original code did not change `updatedStudent.marks` to 90
// before, but the intent was unclear. Clear fix below.
const student = { name: "Jay", marks: 70 };

// FIX: Spread student, then override marks with 90 in the new object.
const updatedStudent = { ...student, marks: 90 };

console.log(student.marks);        // 70 (original unchanged)
console.log(updatedStudent.marks); // 90 (updated copy)

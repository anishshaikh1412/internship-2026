/**
 * Day 3 - Task 2
 * Section B — Predict the Output (15 Marks)
 * Each question carries 3 marks.
 */

// ===== Q1 =====
const user1 = { name: "Amit", age: 20 };
const { name } = user1;
console.log(name);
// Output: "Amit"
// Reason: Destructuring extracts `name` property into a local variable.

// ===== Q2 =====
const original = [1, 2, 3];
const copy = [...original];
copy.push(4);
console.log(original.length); // 3
console.log(copy.length);     // 4
// Reason: Spread creates a new array. copy.push() affects only `copy`.

// ===== Q3 =====
const user2 = { name: "Riya", city: "Anand" };
const updated = { ...user2, city: "Surat" };
console.log(user2.city);   // "Anand"
console.log(updated.city); // "Surat"
// Reason: Spread copies original; second `city` overrides in new object only.

// ===== Q4 =====
const [first, ...remaining] = [5, 10, 15, 20];
console.log(first);      // 5
console.log(remaining);  // [10, 15, 20]
// Reason: Rest collects remaining elements into an array.

// ===== Q5 =====
const product = {
  name: "Laptop",
  details: { color: "Silver" }
};
const copyProduct = { ...product };
copyProduct.details.color = "Black";
console.log(product.details.color); // "Black"
// Reason: Spread is SHALLOW. `details` object is shared by reference.

/**
 * Day 1.4 — Section 3: Debugging Fixes
 */

// Q1. Scope Error — name function ke bahar accessible nahi
function showName() {
  const name = "Rahul";
  return name;
}
console.log(showName()); // Rahul

// Q2. TDZ Error — declaration se pehle access
const course = "MERN Stack";
console.log(course); // MERN Stack

// Q3. Return fix
function calculateTotal(price, quantity) {
  return price * quantity;
}
const total = calculateTotal(200, 3);
console.log(total); // 600

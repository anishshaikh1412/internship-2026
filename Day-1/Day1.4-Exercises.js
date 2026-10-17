/**
 * Day 1.4 — Section 4: Coding Exercises
 */

// Q1. introduceStudent
function introduceStudent(name, age, course) {
  return `Hello, I am ${name}, I am ${age} years old, and I am learning ${course}.`;
}
console.log(introduceStudent("Asha", 21, "MERN Stack"));

// Q2. checkEvenOdd
function checkEvenOdd(number) {
  if (typeof number !== "number" || !Number.isFinite(number)) return "Invalid";
  return number % 2 === 0 ? "Even" : "Odd";
}
console.log(checkEvenOdd(4), checkEvenOdd(7), checkEvenOdd(0));

// Q3. calculateDiscount
function calculateDiscount(price, percentage) {
  if (typeof price !== "number" || typeof percentage !== "number") return null;
  if (price < 0) return null;
  if (percentage < 0 || percentage > 100) return null;
  return price - (price * percentage) / 100;
}
console.log(calculateDiscount(1000, 10));  // 900
console.log(calculateDiscount(-100, 10));  // null
console.log(calculateDiscount(1000, 150)); // null

// Q4. getGrade
function getGrade(marks) {
  if (typeof marks !== "number" || !Number.isFinite(marks)) return "Invalid marks";
  if (marks < 0 || marks > 100) return "Invalid marks";
  if (marks >= 90) return "A";
  if (marks >= 75) return "B";
  if (marks >= 50) return "C";
  return "Fail";
}
console.log(getGrade(49), getGrade(50), getGrade(75), getGrade(90), getGrade(100), getGrade(120));

// Q5. findStudent
const studentsSmall = [
  { name: "Asha", marks: 82 },
  { name: "Ravi", marks: 67 },
  { name: "Neha", marks: 91 }
];
function findStudent(students, name) {
  if (!Array.isArray(students) || typeof name !== "string") return undefined;
  return students.find(s => s && s.name === name);
}
console.log(findStudent(studentsSmall, "Ravi"));
console.log(findStudent(studentsSmall, "Zoya"));

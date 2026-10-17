/**
 * Day 3 - Task 4
 * Section D — Coding Exercises (20 Marks)
 * Each question carries 5 marks.
 */

// ===== Q1: Course object with title, duration, price. Add level, update price. =====
const course = {
  title: "Full Stack Development",
  duration: "6 months",
  price: 25000
};

// Add `level` property
course.level = "Intermediate";

// Update price
course.price = 30000;

console.log(course);
// { title: "Full Stack Development", duration: "6 months",
//   price: 30000, level: "Intermediate" }

// ===== Q2: Destructuring with default value =====
const user = {
  name: "Tanvir",
  email: "mrtanvir0072@gmail.com"
  // city is missing
};

const { name, email, city = "Anand" } = user;

console.log(name);  // "Tanvir"
console.log(email); // "mrtanvir0072@gmail.com"
console.log(city);  // "Anand" (default value used)

// ===== Q3: sumAll() using rest parameters =====
function sumAll(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}

console.log(sumAll(1, 2, 3));          // 6
console.log(sumAll(10, 20, 30, 40));   // 100
console.log(sumAll(5));                // 5
console.log(sumAll());                 // 0

// ===== Q4: Immutable role update =====
const person = {
  name: "Amit",
  age: 25,
  role: "Developer"
};

// Create new object with updated role WITHOUT mutating original
const updatedPerson = { ...person, role: "Senior Developer" };

console.log(person.role);        // "Developer"  (unchanged)
console.log(updatedPerson.role); // "Senior Developer"

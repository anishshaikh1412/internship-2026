/**
 * Day 3 - Task 5
 * Section E — Mini Project: Student Record Manager (20 Marks)
 */

// ===== Student Data =====
// At least 3 students with id, name, marks, address (nested object)
const students = [
  {
    id: 1,
    name: "Asha",
    marks: 85,
    address: { city: "Anand", state: "Gujarat" }
  },
  {
    id: 2,
    name: "Ravi",
    marks: 62,
    address: { city: "Surat", state: "Gujarat" }
  },
  {
    id: 3,
    name: "Priya",
    marks: 91,
    address: { city: "Vadodara", state: "Gujarat" }
  },
  {
    id: 4,
    name: "Karan",
    marks: 48,
    address: { city: "Ahmedabad", state: "Gujarat" }
  },
  {
    id: 5,
    name: "Meera",
    marks: 75,
    address: { city: "Rajkot", state: "Gujarat" }
  }
];

// ===== 3. Display each student's name and city =====
// Destructuring inside forEach for clean access
console.log("=== Student Names & Cities ===");
students.forEach(student => {
  // Destructure nested address in one step
  const { name, address: { city } } = student;
  console.log(`${name} — ${city}`);
});

// ===== 4. filter() — students with marks >= 70 =====
// filter() returns a NEW array; original `students` untouched.
console.log("\n=== Students with Marks >= 70 ===");
const topStudents = students.filter(student => student.marks >= 70);
console.log(topStudents.map(s => `${s.name}: ${s.marks}`));

// ===== 5. map() — updated marks for a selected student =====
// We want to update marks of student with id=2 (Ravi) to 80, immutably.
const selectedId = 2;
const updatedStudents = students.map(student =>
  // If id matches, spread student and override marks
  // Otherwise return original student reference
  student.id === selectedId
    ? { ...student, marks: 80 }
    : student
);
console.log("\n=== After Immutable Update (id=2 → 80) ===");
console.log(updatedStudents.find(s => s.id === selectedId));

// ===== 6. Destructuring — extract name and marks =====
console.log("\n=== Destructuring Demo ===");
const { name: studentName, marks: studentMarks } = students[0];
console.log(`Extracted: ${studentName} scored ${studentMarks}`);

// ===== 7. Verify original data is untouched =====
console.log("\n=== Verify Original Not Mutated ===");
console.log("Original students[1].marks:", students[1].marks);  // 62 (unchanged)
console.log("Updated students[1].marks:", updatedStudents.find(s => s.id === 2).marks); // 80

// ===== Immutable Update Explanation =====
/*
 * IMMUTABLE UPDATE RULES:
 * 1. Never do: student.marks = 80 (that mutates the original object).
 * 2. Instead use spread: { ...student, marks: 80 } creates a NEW object.
 * 3. In arrays, use .map() to create a new array where only the target
 *    element is replaced with the updated version.
 * 4. This preserves original data — critical for React state updates,
 *    undo functionality, and predictable debugging.
 */

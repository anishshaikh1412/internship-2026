/**
 * Day 1.4 — Section 5: Mini Project
 * Student Result Processor
 */

const students = [
  { name: "Asha", marks: 82 },
  { name: "Ravi", marks: 67 },
  { name: "Neha", marks: 91 },
  { name: "Imran", marks: 48 },
  { name: "Meera", marks: 74 }
];

function isValidStudent(student) {
  return (
    student !== null &&
    typeof student === "object" &&
    typeof student.name === "string" &&
    student.name.trim().length > 0 &&
    Number.isFinite(student.marks) &&
    student.marks >= 0 &&
    student.marks <= 100
  );
}

// 1. Total
function getTotalMarks(studentList) {
  if (!Array.isArray(studentList)) return 0;
  return studentList.filter(isValidStudent).reduce((sum, s) => sum + s.marks, 0);
}
console.log("Total marks:", getTotalMarks(students)); // 362

// 2. Average
function getAverageMarks(studentList) {
  if (!Array.isArray(studentList)) return null;
  const valid = studentList.filter(isValidStudent);
  if (valid.length === 0) return null;
  return getTotalMarks(valid) / valid.length;
}
console.log("Average marks:", getAverageMarks(students)); // 72.4
console.log("Average (empty):", getAverageMarks([])); // null

// 3. Result
function getStudentResult(student) {
  if (!isValidStudent(student)) return "Invalid";
  return student.marks >= 50 ? "Pass" : "Fail";
}
console.log("Imran's result:", getStudentResult(students[3])); // Fail

// 4. Find by name
function findStudentByName(studentList, name) {
  if (!Array.isArray(studentList) || typeof name !== "string") return undefined;
  return studentList.find(s => isValidStudent(s) && s.name === name);
}
console.log("Find Neha:", findStudentByName(students, "Neha"));

// 5. Top student
function getTopStudent(studentList) {
  if (!Array.isArray(studentList)) return undefined;
  return studentList
    .filter(isValidStudent)
    .reduce((top, s) => (top === undefined || s.marks > top.marks ? s : top), undefined);
}
console.log("Top student:", getTopStudent(students)); // Neha

// 6. Report
function printStudentReport(studentList) {
  if (!Array.isArray(studentList)) return;
  console.log("----- Student Report -----");
  studentList.filter(isValidStudent).forEach(s => {
    console.log(`${s.name} — Marks: ${s.marks} — Result: ${getStudentResult(s)}`);
  });
  console.log("--------------------------");
}
printStudentReport(students);

// Edge cases
console.log("\n--- Edge Cases ---");
console.log(getTotalMarks([]));
console.log(getAverageMarks([]));
console.log(getTopStudent([]));
console.log(findStudentByName([], "Asha"));
console.log(getStudentResult(null));
console.log(getTotalMarks([
  { name: "Aman", marks: 85 },
  { name: "Bad", marks: 150 },
  { name: "Missing" },
  null
]));
console.log("Original length:", students.length);

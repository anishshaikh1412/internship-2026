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

function getTopStudent(studentList) {
  if (!Array.isArray(studentList)) return undefined;
  return studentList
    .filter(isValidStudent)
    .reduce((topStudent, student) => {
      if (topStudent === undefined || student.marks > topStudent.marks) return student;
      return topStudent;
    }, undefined);
}

function getPassingStudents(studentList) {
  if (!Array.isArray(studentList)) return [];
  return studentList.filter(s => isValidStudent(s) && s.marks >= 50);
}

function countPassingStudents(studentList) {
  return getPassingStudents(studentList).length;
}

function getValidStudents(studentList) {
  if (!Array.isArray(studentList)) return [];
  return studentList.filter(isValidStudent);
}

console.log("Top student:", getTopStudent(students));
console.log("Passing students:", getPassingStudents(students));
console.log("Number passed:", countPassingStudents(students));
console.log("Valid records:", getValidStudents([
  { name: "Aman", marks: 85 },
  { name: "Invalid", marks: 150 },
  { name: "Missing Marks" },
  { name: "Sara", marks: 42 },
  null
]));
console.log(getTopStudent([]));
console.log(getPassingStudents([]));
console.log(countPassingStudents([]));
console.log(getValidStudents([]));
console.log(students.length);

var student = {
    name: "abc",
    rollNo: 39,
    marks: 99
};
console.log(student);

console.log(delete student.marks);
console.log(student);

console.log(delete student["rollNo"]);
console.log(student);
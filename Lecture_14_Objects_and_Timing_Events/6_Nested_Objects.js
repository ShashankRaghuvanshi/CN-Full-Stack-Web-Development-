var student = {
    name: "abc",
    rollNo: 135,
    marks: 90,
    "2": "two",
    address: {
        city: "New Delhi",
        pincode: 110032
    }
};

console.log(student.address);
console.log(student);
console.log(student.address.city);
console.log(student.address["pincode"]);
console.log(student["address"].city);
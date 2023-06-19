//Empty object creation
var obj = {};
var obj = new Object();

var student = {
    name: "abc",
    rollNo: 40, 
    marks: 89
};
console.log(student);

//accessing the property in two ways
console.log(student.marks);
console.log(student["marks"]);

//Note
//There are situation when .property will not work like
// "2": "two" , "-number": 10
//with student.2 or student.-number it will throw error
//but with student["2"] or student["-number"] it will work


var prop = "name";
function printProperty(obj, prop)
{
    console.log(obj[prop]);
}
printProperty(student, prop);
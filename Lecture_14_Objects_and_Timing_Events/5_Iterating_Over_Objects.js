var student = {
    name : "abc",
    rollNo: 34,
    marks: 86
};

console.log(student);

for(var prop in student)        //for in iteration 
{
    console.log(prop);
}

for(var prop in student)
{
    console.log(prop, student[prop]);       //use [] and . will not work
}

//all keys
var keys = Object.keys(student);
console.log(keys);

var keys = Object.getOwnPropertyNames(student);
console.log(keys);
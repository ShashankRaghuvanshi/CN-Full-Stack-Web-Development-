//splice function is used to make change in Array

//splice
//1. start index
//2. deletion count
//3. elements to be inserted

var arr = [2,3,4,5,6];
console.log(arr);

console.log(arr.splice(1,1));
console.log(arr);

console.log(arr.splice(1));
console.log(arr);

arr = [2,3,4,5,6];
console.log(arr.splice(2,0,10));
console.log(arr);

console.log(arr.splice(2,0,10,20,30));
console.log(arr);

arr.splice(2,2,40,50);
console.log(arr);
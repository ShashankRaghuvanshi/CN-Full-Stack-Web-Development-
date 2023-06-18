//Arrays in JavaScript are Hetrogeneous
var arr = ["abc", 4, true, 8];

console.log(arr);             //print the array

var arr1 = new Array(1000);    //it is assigning just length not space
console.log(arr1);

var arr2 = [4,5,6,7];
console.log(arr2.length);

console.log(arr2.push(10));          //add element at end
console.log(arr2);

console.log(arr2.pop());             //remove last element
console.log(arr2);

console.log(arr2.shift());           //left shift 
console.log(arr2);

console.log(arr2.unshift(8));        //right shift 
console.log(arr2);

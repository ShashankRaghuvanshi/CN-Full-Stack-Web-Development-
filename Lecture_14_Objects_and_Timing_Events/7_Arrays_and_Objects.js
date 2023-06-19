//arrays are object, they also have key value pair i.e index, valueofIndex;

var arr = [ 20, 30, 40, 50];
console.log(arr);
console.log(arr[0]);
console.log(arr["0"]);     //type coercion from string to number;


var obj = {
    "0": 20,
    "1": 30,
    "2": 40,
    "3": 50
}
console.log(obj["0"]);   
console.log(obj[0]);          //type coercion 


console.log(arr.length);      //it will work for arrays
console.log(obj.length);      //it will give undefined for objects

arr[6] = "abb";
console.log(arr);

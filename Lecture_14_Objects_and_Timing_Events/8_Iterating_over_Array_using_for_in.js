var arr = [20,30,40,50];

var obj = {
    "0": 20,
    "1": 30,
    "2": 40,
    "3": 50
}

console.log(arr);
console.log(obj);

obj.prop1 = "demo";
console.log(obj);

console.log(arr.length);
arr.prop = "demo";
console.log(arr);
console.log(arr.length);

for(var i in arr)
{
    console.log(i);
}
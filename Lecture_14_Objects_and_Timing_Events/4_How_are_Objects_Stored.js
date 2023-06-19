var obj = {
    "p1" : 10
};

var obj2 = obj;                 //not creating new object

console.log(obj);
console.log(obj2);

obj2.p1 = 100;
console.log(obj);
console.log(obj2);

console.log(obj == obj2);          //checking location/address of two objects
console.log(obj === obj2);

obj2 = 
{
    "p1": 10
};

console.log(obj == obj2);
console.log(obj === obj2);
var arr = [1,2,3,4];
var arr1 = new Array(1,2,3,4,5);
for(var i=0; i<arr.length; i++)
{
    console.log(arr[i]);
}

for(var i=0; i<arr1.length; i++)
{
    console.log(arr1[i]);
}

console.log(arr[6]);

arr[2] = 90;
console.log(arr[2]);


arr[7] = 100;
console.log(arr[7]);
console.log(arr);

var arr3 = new Array();           //empty array

var arr4 = new Array(2);          //here 2 is size not value

var arr5 = new Array(2,3);        //2,3 are element or value of array


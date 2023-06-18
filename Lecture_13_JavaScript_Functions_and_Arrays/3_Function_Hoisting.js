// function hoistDemo()
// {
//     console.log(i);
// }
// hoistDemo();


function hoistDemo()
{
    console.log(i);                    //variable hoisting
    var i =10;
}
hoistDemo();

//above code is like this with help of variable hoisting
function hoistDemo1()
{
    var i;
    console.log(i);
}
hoistDemo1();

console.log(j);
var j = 10;



hoistDemo2();                       //function hoisting
function hoistDemo2()
{
    console.log(i);
    var i=10;
}
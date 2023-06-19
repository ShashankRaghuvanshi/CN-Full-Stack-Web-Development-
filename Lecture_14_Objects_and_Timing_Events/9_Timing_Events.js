function sayHello()
{
    console.log("hello");
}
setTimeout(sayHello, 1000);         //hello after interval of 1 second   //sayhello pass the function not call the function

setTimeout(sayHello, 2000);         //setTimeout only once

// setInterval(sayHello, 1000);        //setInterval repeat after certain time interval


// var sec = 1;
// function sayHello1()
// {
//     console.log("after ", sec);
//     sec++;
// }

// setInterval(sayHello1, 1000);

var sec = 1;
function sayHello1()
{
    console.log("after ", sec);
    sec++;
    if(sec == 6)
    {
        //stop
        clearInterval(id);
    }
}

var id = setInterval(sayHello1, 1000);
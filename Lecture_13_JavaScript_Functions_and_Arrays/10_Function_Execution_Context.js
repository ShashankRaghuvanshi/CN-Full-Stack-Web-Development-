function c()
{
    console.log("Inside C");
}

function b()
{
    c();
    console.log("Inside B");
}

function a()
{
    b();
    console.log("Inside A");
}

a();
console.log("global context");

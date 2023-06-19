var count =10;
function timer()
{
    if(count == 0)
    {
        console.log("time up!");
        clearInterval(id);
        return;
    }
    console.log(count--);
}
var id = setInterval(timer, 1000);
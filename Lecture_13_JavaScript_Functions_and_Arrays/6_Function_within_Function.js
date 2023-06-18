function outer()
{
    var outerVar = 10;
    function inner()
    {
        console.log(outerVar);
    }
    inner();
}
outer();
// inner();       cannot do this 
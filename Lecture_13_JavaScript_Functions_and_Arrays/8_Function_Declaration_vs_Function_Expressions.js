
console.log(fact(5));
// console.log(factorial(5));
console.log(factorial);

function fact(n)
{
    var ans = 1;
    for(var  i=1; i<=n; i++)
    {
        ans = ans * i;
    }
    return ans;
}

var factorial = function fact(n)
{
    var ans = 1;
    for(var i = 1; i<=n; i++)
    {
        ans = ans * i;
    }
    return ans;
}
var factorial = function fact(n)                   //named function expression
{
    var ans = 1;
    for(var i = 1; i<=n; i++)
    {
        ans = ans * i;
    }
    return ans;
};
console.log(factorial);
console.log(factorial(5));


var factorial2 = function (n)                   //anonymous function expression
{
    var ans = 1;
    for(var i = 1; i<=n; i++)
    {
        ans = ans * i;
    }
    return ans;
};
console.log(factorial2);
console.log(factorial2(5));


var factorial3 = function fact(n)                   //named function expression use recursively
{
   if(n==0)
   {
    return 1;
   }
   return n * fact(n-1);
};
console.log(factorial3);
console.log(factorial3(5));

// function fact(n)
// {
//     var ans = 1;
//     for(var i = 1; i<=n; i++)
//     {
//         ans = ans * i;
//     }
//     return ans;
// }


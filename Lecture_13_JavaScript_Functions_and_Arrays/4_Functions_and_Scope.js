var name1 = "global";                    //global variable
console.log(name1);


function scopeDemo()
{
    var i =10;
    console.log(i);
}
scopeDemo();
// console.log(i);                    //i is local variable so not defined


function scopeDemo1()
{
    var name1 = "function";            
    console.log(name1);               //first check for local if not avialable than go global variable
} 
scopeDemo1();
console.log(name1);




let num=25;
let count=0;
for(let i=0; i<=num; i++)
{
    if(num%i==0)
    {
        count++;
    }
}
if(count>3)
{
    console.log(num,"is a prime number");
}
else 
{
    console.log(num,"is not a prime number");
}
let num=25;
let flag=true;
for(let i=2; i<num; i++)
{
    if(num%i==0)
    {
        flag=false;
	break;
    }
}
if(flag=true)
{
    console.log(num,"is a prime number");
}
else 
{
    console.log(num,"is not a prime number");
}
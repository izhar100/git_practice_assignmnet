let nam="naman";
let bag="";
for(let i=nam.length-1; i>=0; i--)
{
    bag=bag+nam[i];
}
if(bag==nam)
{
    console.log("Palindrome");
}
else 
{
    console.log("Not Palindrome")
}
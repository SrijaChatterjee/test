//WD3
const input1= parseInt(prompt("Enter first number"));
const input2= parseInt(prompt("Enter second number"));
const sum=input1+input2;
if(sum%2==0)
{
  document.write("Sum of two numbers are "+sum+" and it is even");
}
else
{
   document.write("Sum of two numbers are "+sum+" and it is odd");
}

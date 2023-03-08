//This is a function to calculate for the factorial of a number

function factorial(num){
    let fact = 1
    //This starts at 1 and goes up as long as our number is less than the number passed into our function
    for (i = 1; i <= num; i++) {
         fact *= i;
     }
     return fact;
  }
 
  console.log(factorial(9))
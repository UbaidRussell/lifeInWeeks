let age = prompt("What is your age?");
let year = prompt("What year were you born?");



// Write your function here:
const howOld = (age, year) =>{
    const date = new Date().getFullYear();//This line works and we have the current year
  
    const yearDifference = year - date;
    const newAge = age + yearDifference;
    
    if(newAge > age){
      return `You will be ${newAge} in the year ${year}`
    } else if(newAge < 0){
      return `The year ${year} was ${-newAge} years before you were born`
    } else {
      return `You were ${newAge} in the year ${year}`
    }
  }
  
  
  
  
  
  // Once your function is written, write function calls to test your code!
  console.log(howOld(20, 2030))
  
  
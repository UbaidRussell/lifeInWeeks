let userInputAge = prompt("What is your age?");
let userInputYear = prompt("What year were you born?");
let text = document.querySelector('h1')



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
  

text.innerHTML = howOld(userInputAge, userInputYear)
let age = prompt("What is your age?");
let year = prompt("What year were you born?");
let text = document.querySelector('h1')



// Write your function here:
const howOld = (age, year) =>{
    const date = new Date().getFullYear();//This line works and we have the current year
  
    const yearDifference = year - date;
    const newAge = age + yearDifference;
    
    if(newAge > age){
      text.innerHTML = `You will be ${newAge} in the year ${year}`
    } else if(newAge < 0){
      text.innerHTML = `The year ${year} was ${-newAge} years before you were born`
    } else {
      text.innerHTML = `You were ${newAge} in the year ${year}`
    }
  }
  

howOld(age, year)
  
  
const form = document.querySelector('form');
let userInput;
let results = document.getElementById('results');
//This function checks if a number is even or not by using an if staement and seeing if num divided by 2 equals 0
function isEven(num){
  if(num % 2 == 0){
    return 'Even'
  }
  else{
    return 'Odd'
  }
}

//This gets our userInput and logs it to the console
function getUserInput(){
  var userInputElement = document.getElementById('number');
  var userInputValue = userInputElement.value;
  results.innerHTML = `${userInputValue} is: ${isEven(userInputValue)}`;
  console.log('User entered:', userInputValue);
  return userInputValue;
}



//This stops our page from reloading
document.addEventListener('DOMContentLoaded', function() {
  form.addEventListener('submit', function (event){
    event.preventDefault();
    console.log(isEven(getUserInput()));
  });
});
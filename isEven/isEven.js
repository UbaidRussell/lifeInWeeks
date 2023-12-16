const form = document.querySelector('form');
let userInput;
//This function checks if a number is even or not by using an if staement and seeing if num divided by 2 equals 0
function isEven(num){
  if(num % 2 == 0){
    return true
  }
  else{
    return false
  }
}

//This gets our userInput and logs it to the console
function getUserInput(){
  var userInputElement = document.getElementById('number');
  var userInputValue = userInputElement.value;
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
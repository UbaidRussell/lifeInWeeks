const form = document.querySelector('form');
let userInput;

let inputOutputted = document.getElementById('result');



//An emoticon is a group of keyboard characters like [ : ) ] that typically represent emoji's but are instead made only with a keyboard and a dab of creativity. Here's we tinkered with a few and developed a program that can output one depending on the input.
const toEmoticon = emoticon => {
  switch (emoticon){
    case 'shrug':
    return '|_{"}_|';
    break;
    case 'smiley face':
    return ':)'
    break;
    case 'frowny face':
    return ':(';
    break;
    case 'winky face':
    return ';)';
    break;
    case 'heart':
    return '<3';
    default: 
    return '|_(* ~ *)_|';
  }
}


const getValue = () => {
  // Access the form and select element
  var dropdown = document.getElementById('emojiChoices');
  // Get the selected value
  var selectedValue = dropdown.value;
  //Change our userInput variable to the selected value
  userInput = selectedValue;
  // returns our selected value
  return selectedValue;
}


//This function is used to stop the page from reloading when the submit button is clicked and also displays our emoticon.
document.addEventListener('DOMContentLoaded', function() {
  // Add a submit event listener to the form
  form.addEventListener('submit', function (event){
    // Prevent the default form submission behavior
    event.preventDefault();

    inputOutputted.textContent = toEmoticon(userInput);
  });
});
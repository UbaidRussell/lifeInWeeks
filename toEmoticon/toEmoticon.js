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

/*
// script.js
function getValue() {
  // Access the form and select element
  var form = document.getElementById('myForm');
  var dropdown = form.elements['emojiChoices'];

  // Get the selected value
  var selectedValue = dropdown.value;

  // Use the value as needed
  console.log(selectedValue);
}*/

const getValue = () => {
  // Access the form and select element
  var form = document.getElementById('myForm');
  var dropdown = form.elements['emojiChoices'];

  // Get the selected value
  var selectedValue = dropdown.value;
  var selectedValueText = dropdown.options[dropdown.selectedIndex].text;

  // Use the value as needed
  console.log(selectedValue);
  console.log(selectedValueText);
}

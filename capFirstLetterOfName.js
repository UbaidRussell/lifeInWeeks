//step 1 
//we need a variable to store the name a user enters into the prompt

var name = prompt("What is yourName?");

//step 2
//we need to be able to capitalize the first letter of their name

//We can isolate this step
//a isolate the first char

var firstChar = name.slice(0,1);


//b turn the first char to uppercase
var upperCaseFirstChar = firstChar.toUpperCase();

//c isolate the rest of the name  
var restOfName = name.slice(1,name.length);

//d concatenate the first char with the rest of the char
var wholeName = upperCaseFirstChar + restOfName.toLowerCase(); 

//Step 3 
//We use the capitalized version in order to greet them using a alert 

alert("Hello, " + wholeName);

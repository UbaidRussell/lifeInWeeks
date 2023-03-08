// Write a function subLength() that takes 2 parameters, a string and a single character.
// The function should search through string for the two occurrences of the 
// character and return the length between them including the 2 characters. 
// If there are less than 2 or more than 2 occurrences of the character the function should return 0.

// Below we begin writing our code.

function subLength(string , char){
    //Loops through the string
    for (let x = 0; x <= string.length; x++){
        char++;
        
    }
    return char;
}

console.log(subLength('Hello my name is Ubaid'/*Test statement*/, 7  /*Test number */ ))




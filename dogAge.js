//This program gets us dog age in human years and is a great program to use if you want to figure out your dogs age in human years.

var dogAge = prompt("What is your dogs age?");
var humanAge = (dogAge - 2) * 4 + 21;

alert("your dog is " + humanAge + " In human ages");


//Below we're going to have another way tp get this done.


//This variable is my age.
const myAge = 20;

//This is our early years.
let earlyYears = 2

//Here we multiple out early years by 10.5 and got the first two years of a dogs life (Counts by 10.5)
earlyYears = earlyYears * 10.5;

//This code subtracts 2 from my age because we already calcualted early years for a dog in our earlyYears variable
let laterYears = myAge - 2;
//Calculates the number of dog years by multipling our age (-2 because we already got those two years in ealryYears) by 4
laterYears *= 4;

//This line of code adds our earlyYears and our LaterYears together to get our age in dog years
myAgeInDogYears = earlyYears + laterYears
//This is a string of my name
let myName = 'Ubaid'.toLowerCase();

console.log(`Our later year is ${laterYears}`)
console.log(`and our early year is ${earlyYears}`)
console.log(`This means that ${myName}'s age in dog years is: ${myAgeInDogYears}`)

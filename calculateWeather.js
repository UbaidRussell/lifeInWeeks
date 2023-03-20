//This is our kelvin variable
const kelvin = 293;
//This code gets out celsius
const celsius = kelvin - 273;
//This code divides 9 by 5, adds 32 then multiplies the remainder of that by the value of our celsius variables
let fahrenheit = celsius * (9 / 5) + 32;
//This code rounds our variable so that it's not a decimal number
fahrenheit = Math.floor(fahrenheit)


console.log(`The temperature is ${fahrenheit} degress Fahrenheit`)
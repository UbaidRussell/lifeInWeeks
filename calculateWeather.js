//This is our kelvin variable
const kelvin = 293;
//This code gets out celsius
const celsius = kelvin - 273;
//This code divides 9 by 5, adds 32 then multiplies the remainder of that by the value of our celsius variables
let fahrenheit = celsius * (9 / 5) + 32;
//This code rounds our variable so that it's not a decimal number
fahrenheit = Math.floor(fahrenheit)


console.log(`The temperature is ${fahrenheit} degress Fahrenheit`)

/* 
Great work! Kelvin can now publish his forecasts in Celsius and Fahrenheit.

If you’d like extra practice, try this:

Convert celsius to the Newton scale using the equation below
Newton = Celsius * (33/100)

Round down the Newton temperature using the .floor() method
Use console.log and string interpolation to log the temperature in newton to the console

*/
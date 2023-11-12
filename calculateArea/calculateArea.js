//Messing around. The goal is to calculate area using a single line function block. 
const calculateArea = (height, width) => height * width;
let selectedElement = document.querySelector("p");

let heightInput = prompt("Choose your height")
let widthInput = prompt("Choose your Width:")


selectedElement.innerHTML = calculateArea(heightInput, widthInput);
//console.log(calculateArea(10, 10));


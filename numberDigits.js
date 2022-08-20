//Tells us the number of digits in a number
function numberDigits(x){
  if (x >= 0 && x <= 9){
    return `One digit: ${x}`
  }else if (x >=10 && x <= 99){
    return `Two digits: ${x}`
  } else {
    return `The number is: ${x}`
  }

}

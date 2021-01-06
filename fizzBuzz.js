var output = [];
var count = 1;

function fizzBuzz(){

//outputs fizzbuzz if count is divisible by both 3 and 5
if (count % 3 === 0 && count % 5 === 0){
    output.push("FizzBuzz");
}

//outputs fizz if count is divisible by 3
else if (count % 3 === 0){
    output.push("Fizz");
}

//outputs buzz if count is divisible by 5
else if(count % 5 === 0 ){
    output.push("Buzz");
}
//outputs count
else{
    output.push(count);
}



//Increments count by 1
count++;

 //just logs the output
    console.log(output);
}

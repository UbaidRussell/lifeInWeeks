//This program gets us a certain amount of values in a fibonacci sequence
//in order to run it we just have to throw a number into out fibonacci function

function fibonacciGenerator(n){
    var output = [];
    if (n === 1){
        output = [0];
    }
    else if (n === 2){
        output = [0,1];
    }
    else {
        output = [0,1];
        
        for(var i = 2; i < n; i++){

        output.push(output[output.length - 2] + output[output.length - 1]);
    }
   }

    return output;
}

console.log(fibonacciGenerator(50))
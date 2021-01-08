function beer(){

    //sets number of bottles to 99
    var numberOfBottles = 99;
    
    //while loop runs as long as number of bottles is greater than or equal to 0.
    while (numberOfBottles >= 0) {
    
    //sets bottle word to bottle
    var bottleWord = "bottle";
    
    //updates bottle word depending on if number of bottles equals 1.
    if (numberOfBottles === 1) {
        bottleWord = "bottles";
    } 
    
    //console log numer of bottles, bottleword, 
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
	  
    //decrements the number of bottles by 1 everytime the while loop is ran.
    numberOfBottles--;
    
    //console logs the number of bottle + bottleword and a string
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}
}

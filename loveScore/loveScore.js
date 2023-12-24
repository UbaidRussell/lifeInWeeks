let results = document.getElementById("results");
//This program gives us a love score for two people

var name1 = prompt("Give me a name");
var name2 = prompt("Give me another name");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;

//We can use this to change our results ID in our HTML
if (loveScore > 70){
    results.innerHTML = "Your love score is " + loveScore + "%" + " and you love each other like kanye loves kanye";
}
if (loveScore > 30 && loveScore <= 70) { 
    results.innerHTML = "Your love score is " + loveScore + "%";
}
if (loveScore <= 30) { 
    results.innerHTML = "Your love score is " + loveScore + "%" + " you go together like oil and water";
}
else {
    results.innerHTML = "Your love score is " + loveScore + "%";
}


console.log(name1 + " and "+ name2 + " have a love rate of " + loveScore +"%");


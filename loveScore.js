var name1 = prompt("Give me a name");
var name2 = prompt("Give me another name");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;

if (loveScore > 70){
    alert("Your love score is " + loveScore + "%" + " and you love each other like kanye loves kanye");
}
if (loveScore > 30 && loveScore <= 70) { 
    alert("Your love score is " + loveScore + "%");
}
if (loveScore <= 30) { 
    alert("Your love score is " + loveScore + "%" + "you go together like oil and water");
}
else {
    alert("Your love score is " + loveScore + "%");
}


console.log(name1 + " and "+ name2 + " have a love rate of " + loveScore +"%");


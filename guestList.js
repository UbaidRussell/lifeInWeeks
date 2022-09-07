
var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"]

var guestName = prompt("What is your name?");

if (guestList.includes(guestName)){
    alert("Welcome!");
    //Pushes the Guest name into the guestList array
    guestList.push(guestName);
} else {
    alert("Sorry, maybe next time.");
}

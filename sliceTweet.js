//Below are 2 ways to slice a string when you only want it to contain a certain number of characters.


//first way
var tweet = prompt("Compose your tweet:");
var tweetUnder140 = tweet.slice(0,140);

alert(tweetUnder140);

// second way
alert(prompt("Compose your tweet: ").slice(0,140));

// playing with code, testing out writing a function to cut tweets.
// This is all untested code
function tweetCutter (x){
    if (x > 140){

    }
}
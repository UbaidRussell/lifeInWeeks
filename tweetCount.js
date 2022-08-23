//Here we wrote the code that allows us to only input a set number of charactwers in a Twitter Tweet. 

var tweet = prompt("Compose your tweet:"); 
var tweetCount = tweet.length;

alert("you have written" + tweetCount + "Characters, you have" + (140 - tweetCount) + "Characters remaining");

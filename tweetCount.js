var tweet = prompt("Compose your tweet:");
var tweetCount = tweet.length;

alert("you have written" + tweetCount + "Characters, you have" + (140 - tweetCount) + "Characters remaining");

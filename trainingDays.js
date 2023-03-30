const name = 'Nala';
const name2 = 'Warren';

//This function gets us a random event
const getRandEvent = () => {
  const random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};
//This function takes in a parameter (event, which is assigned getRandEvent) and determining on what that value is returns a certain amount of days
const getTrainingDays = event => {
  let days;
  if (event === 'Marathon') {
     days = 50;
  } else if (event === 'Triathlon') {
     days = 100;
  } else if (event === 'Pentathlon') {
     days = 200;
  }
  return days;
};


const logEvent = (name, event) => {
  console.log(`${name}'s event is: ${event}`);
};
const logTime = (name, days) => {
  console.log(`${name}'s time to train is: ${days} days`);
};


//Event is assigned a random event
const event = getRandEvent();
//Then days is assigned a random training day since event is passed in
const days = getTrainingDays(event);

//Function Caller 1
logEvent(name,event);
logTime(name,days);
console.log(' ')//We only added this line to seperate our outputs on the console
 
const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
//Function caller 2
logEvent(name2, event2);
logTime(name2, days2);

//Get user choice function 
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();

    if (userInput === 'rock'){
      return userInput;
    } else if (userInput === 'paper') {
      return userInput 
    } else if (userInput === 'scissors'){
      return userInput
    } else {
      console.log('You have not entered a valid play. Please enter Rock, paper or scissors')
    }
};
//Get computer choice function 
const getComputerChoice = () => {
  let x = Math.floor(Math.random() * 3)

      if (x === 0){
        return 'rock'
      } else if ( x === 1){
        return 'paper'
      } else if (x === 2){
      return 'scissors'
    } else {
      console.log('We have an error in our code')
    }
}
//Comparison function to get our winner. 
const determineWinner = (userChoice, computerChoice) =>{
  if (userChoice === computerChoice){
    return 'You guys both scored a tie'
  } 
        //Test for ROCK
        if (userChoice === 'rock'){if (computerChoice === 'paper'){return 'Computer has won'} else {return 'User has won'}}
        //Test for Paper
        if (userChoice === 'paper'){if (computerChoice === 'scissor'){return 'computer has won'} else { return 'user has won'}}
        //Test for scissors
        if (userChoice === 'scissors'){ if (computerChoice === 'rock'){return 'computer has won'} else {return 'user has won'}}

}

function playGame(){
    let userChoice = getUserChoice('Rock');
    let computerChoice = getComputerChoice()
    
    console.log(`Our user thrown ` + userChoice)
    console.log(`Our computer thrown ` + computerChoice)
  
    console.log(determineWinner(userChoice, computerChoice))
}
  
playGame();
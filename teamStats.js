const team = {
    //The data
    _players: [
      {firstName: 'Lebron', lastName: 'James', age: 30},
      {firstName: 'Dwayne', lastName: 'Wade', age: 28},
      {firstName: 'Chris', lastName: 'Bosh', age: 27}
    ],
    _games: [
      {opponent: 'Chicago Bulls', teampoints: 145, opponentPoints: 52}, 
      {opponent: 'Golden State Warriors', teamPoints: 122, opponentPoints: 30},
      {opponent: 'Thunders', teamPoints: 125, opponentPoints: 40}
    ], 

    //Getting Data
    get players(){
      return this._players;
    },
    get games(){
      return this._games;
    },


  ///This code adds a new player to our _players data
    addPlayer(newFirstName, newLastName, newAge){
      const player = {
        firstName: newFirstName,
        lastName: newLastName, 
        age: newAge
        }
      return team._players.push(player);
    }, 
  // This code adds the record of a new game to our _games data
  addGame(newOpponent, newTeamPoints, newOpponentPoints){
    const game = {
    opponent: newOpponent, 
    teamPoints: newTeamPoints, 
    opponentPoints: newOpponentPoints
    }
    return team._games.push(game);
  }

  };

  let newGame = team.addGame('Titans', 100, 98)
  let newPlayer = team.addPlayer('Bugs', 'Bunny', 76)
  //Test to see if our getter method is active 
  console.log(team.players);
  console.log(team.games);
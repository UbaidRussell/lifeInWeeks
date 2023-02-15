const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    get energyLevel(){
      let energyLevelTesting = this._energyLevel;
      if(typeof energyLevelTesting === "number"){
        return `My current energy level is ${this._energyLevel}`
      } else {
        return 'System malfunction: cannot retrieve energy level'
      }
    }  
  };
  
  console.log(robot.energyLevel)
  
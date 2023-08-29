//This is our parent class 
class School{
    constructor(name, level, numberOfStudents){
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
    }
    get name(){
      return this._name;
    }
    get level(){
      return this._level;
    }
    get numberOfStudents(){
      return this._numberOfStudents;
    }
    quickFacts(){
      console.log(`${this.name} educates ${this.numberOfStudents} students at ${this.level} school level.`)
    }
  
    static pickSubstituteTeacher(substituteTeachers){
      let randomNumber = Math.floor(Math.random() * substituteTeachers.length)
      return substituteTeachers[randomNumber]
    }
  
    set numberOfStudents(input){
      if(input.isInteger()){
        this._numberOfStudents = input;
      } else {
        console.log('Invalid input: numberOfStudents must be set to a number.')
      }
    }
  }
  //This is our PrimarySchool class extension for School
  class PrimarySchool extends School{
    constructor(name, numberOfStudents, pickupPolicy){
      super(name)
      this._level = 'primary'
      this._numberOfStudents = numberOfStudents;
      this._pickupPolicy = pickupPolicy
    }
    get pickupPolicy(){
      return this._pickupPolicy;
    }
  }
  
  //This is our HighSchool class extension for School
  class HighSchool extends School{
    constructor(name, numberOfStudents, sportsTeams){
    super(name)
    this._numberOfStudents = numberOfStudents;
    this._level = 'highschool'
    this._sportsTeams = []
    }
    get sportsTeam(){
      return this._sportsTeams;
    }
  }
  
  //Our Instances
  const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.')
  const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field'])

  lorraineHansbury.quickFacts()
  School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'])
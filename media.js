class Media{
    constructor(title){
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    get title(){
        return this._title;
    }
    get isCheckedOut(){
        return this._isCheckedOut;
    }
    get ratings(){
        return this._ratings;
    }

    set isCheckedOut(value){
        this._isCheckedOut = value;
    }
    
    toggleCheckOutStatus(){
        this._isCheckedOut = !this._isCheckedOut;
    }

    getAverageRating(ratings){
      /* let ratingSum = this._ratings.reduce((accumulator, currentValue) => accumulator + currentValue, 0 / this._ratings.length); 
      return ratingSum; */
      const sum = this._ratings.reduce(function (accumulator, currentValue){
  return accumulator + currentValue;
}, 0);

const average = sum / this._ratings.length;
return average
    }   

    addRating(inputValue){
      this._ratings.push(inputValue)
    }
}


/**This is going to be the Book extension to our Media class */
class Book extends Media{
 constructor(author,title, pages){
  super(title)
  this._author = author;
  this._pages = pages;
 }

 get author(){
  return this._author;
 }
 get pages(){
  return this._pages;
 }
}

/*This is going to be the Movie extension to our media class */
class Movie extends Media{
  constructor(director,title, runTime){
    super(title)
    this._director = director;
    this._runTime = runTime;
  }
  get director(){
    return this._director;
  }
  get runTime(){
    return this._runTime;
  }
}

/*This is going to be the CD extension to our media class */
class CD extends Media{
    constructor(artist,title, songs){
        super(title)
        this._artist = artist;
        this._songs = songs;
    }
    get artist(){
        return this._artist;
    }
    get songs(){
        return this._songs;
    }
}


//Test for our Book class
const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544)
historyOfEverything.toggleCheckOutStatus();
historyOfEverything.addRating(4)
historyOfEverything.addRating(5)
historyOfEverything.addRating(5)
historyOfEverything.getAverageRating()
console.log(historyOfEverything)
console.log(`Average ${historyOfEverything.getAverageRating()}`)
console.log(' ')
console.log(' ')
const speed = new Movie('Jan de Bont', 'Speed', 116)
speed.toggleCheckOutStatus()
speed.addRating(1)
speed.addRating(1)
speed.addRating(5)
console.log(speed)
console.log(`Average: ${speed.getAverageRating()}`)
const studentCreation = (name, age, gender, quote) => {
    return{
        name: name, 
        age: age, 
        gender: gender, 
        yearQuote(){
            console.log(quote);
        }
    }
}

const jefferey = studentCreation('Jefferey Whitlock', 20, 'male', 'You got this')
const victoria = studentCreation('Victoria Samson', 21, 'Female', 'We will take the lead this year')


console.log(jefferey)
console.log(victoria)
console.log(jefferey.yearQuote());
console.log(victoria.yearQuote());
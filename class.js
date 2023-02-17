//Here we created a function that allows us to create student objects with different properties
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

//Here we use that function and create those objects of students giving them different properties
const jefferey = studentCreation('Jefferey Whitlock', 20, 'male', 'You got this')
const victoria = studentCreation('Victoria Samson', 21, 'Female', 'We will take the lead this year')

//We simply call our objects to the console here. 
console.log(jefferey)
console.log(victoria)
console.log(jefferey.yearQuote());
console.log(victoria.yearQuote());
//Here we created a function that allows us to create student objects with different properties
const studentCreation = (name, age, gender, quote) => {
    return{
        name,age,gender, 
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



//We can use HTML and CSS tom make this website log the student objects to the screen, and we can use the same function to create more students and log them to the screen as well.
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains']; //This is our Array

groceryList.shift(); //Here we remove the first element 'Orange Juice' from our array.
groceryList.unshift('popcorn');//here we add popcorn to the first element in our array.
console.log(groceryList); // Logs our array. 

console.log(groceryList.slice(1, 4)); //Here we use the slice method to slice off array items 1 - 4
console.log(groceryList)

const pastaIndex = groceryList.indexOf('pasta'); //Here we created a variable to check what index is the pasta element. 
console.log(pastaIndex)

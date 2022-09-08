//Here is our Array
const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

//Her we declarae a variable and set it to index's in our array
let listItem = famousSayings[0];
console.log(listItem);

//This line should take 'where there is love there is life.' off of hours list.------------------------------------------
famousSayings.pop();

//This one outputs where there is love there is life. 
console.log(famousSayings[2]);

//This one outputs undefined since we begin our array at 0 and there is no 3rd element in our array. 
console.log(famousSayings[3]);

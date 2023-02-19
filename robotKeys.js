//This code is us testing the Built in Object method Object.keys() on a robot method we created

const robot = {
    model: 'SAL-1000',
    mobile: true,
    sentient: false,
    armor: 'Steel-plated',
    energyLevel: 75
};

const robotKeys = Object.keys(robot); //Assigning a variable is one way we can get our out.
console.log(robotKeys)

console.log(Object.keys(robot)) // This is another way we can also get the same output. 
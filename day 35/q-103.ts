// Write a function that returns a random boolean value, true or false.

//this function return a random  boolean value
function randomValue() : boolean {
    return Math.random() > 0.5;  // Returs true if random value is greater than 0.5

}

console.log(randomValue());// Outputs either true or false randomly
// By comparing a random number to 0.5, we effectively get a true or false value randomly.
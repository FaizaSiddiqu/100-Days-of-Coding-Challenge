//generate a random intiger between 1- 10


function randomInt(): number {
    return Math.floor(Math.random() * 10) + 1;

}

console.log(randomInt());
//outputs a random integer b/t 1 and 10
//This function combines Math.random() with Math.floor() to create a random integer within our range.



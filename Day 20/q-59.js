// Add a Special Number: Make a program that creates custom adders. These adders can add a specific 
// number to any other number you give them later.
function makeadder(valToAdd) {
    return function (number) {
        return number + valToAdd;
    };
}
var addFive = makeadder(5);
console.log(addFive(10));

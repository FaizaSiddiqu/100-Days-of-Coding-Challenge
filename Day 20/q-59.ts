// Add a Special Number: Make a program that creates custom adders. These adders can add a specific 
// number to any other number you give them later.



function makeadder(valToAdd : number) :(number) => number{
    return function(number : number) : number {
    return number + valToAdd

    }
}
let addFive = makeadder(5)
console.log(addFive(10))
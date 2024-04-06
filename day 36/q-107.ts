
//this function checks if a number is divisible by both 2 and 3
function divisibility(number : number) : boolean {
    //use the module operator to check for no reminde
    return number % 2 === 0 && number % 3 === 0;
}

console.log(divisibility(12));
console.log(divisibility(14));
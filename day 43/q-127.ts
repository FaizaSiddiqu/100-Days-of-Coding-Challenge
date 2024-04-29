// Convert a traditional function expression to an arrow function.


//tradional Function expression
const traditionalFunction = function(a: number , b : number) {
    return a + b;
}

// Converted arrow function
const arrowFunction = (a: number, b: number) => a + b;

console.log(traditionalFunction(4, 3));
console.log(arrowFunction(3, 4));

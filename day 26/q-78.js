// Function Expressions vs. Function Declarations: Compare function expressions and declarations by creating 
// one of each that performs the same task, such as squaring a number.
function squareDeclaration(number1) {
    return number1 * number1;
}
var squareExpression = function (number) {
    return number * number;
};
console.log(squareDeclaration(4));
console.log(squareExpression(4));
// Both methods give us the same result, showing two different ways to create functions that do the same thing.

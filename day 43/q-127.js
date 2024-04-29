"use strict";
// Convert a traditional function expression to an arrow function.
Object.defineProperty(exports, "__esModule", { value: true });
//tradional Function expression
const traditionalFunction = function (a, b) {
    return a + b;
};
// Converted arrow function
const arrowFunction = (a, b) => a + b;
console.log(traditionalFunction(4, 3));
console.log(arrowFunction(3, 4));

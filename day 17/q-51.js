"use strict";
// : Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it 
// into an arrow function.
//Original function for calculating the area of a rectangle
function area(width, height) {
    return width * height;
}
// Refactored into an arrow function
let calculateArea = (width, height) => width * height;
//// Example usage of the arrow function
console.log(`An area of rectangular is ${calculateArea(5, 7)}`);

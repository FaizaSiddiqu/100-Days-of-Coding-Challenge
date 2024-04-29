"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Arrow function that calculates the product of all its parameters
const multiplyparameters = (...numbers) => numbers.reduce((total, number) => total * number, 1);
console.log(multiplyparameters(2, 4, 3));
// This function uses the rest parameter syntax to take any number of arguments, then multiplies them together.

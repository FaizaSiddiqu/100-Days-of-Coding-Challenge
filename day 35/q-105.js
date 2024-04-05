"use strict";
// Simulate a dice roll using JavaScript and return a random integer between 1 and 6.
Object.defineProperty(exports, "__esModule", { value: true });
//This function simulates rolling a dice and returns a number between 1 and 6
function rollDice() {
    return Math.floor(Math.random() * 10) + 1; //calculate the randon integer from
}
console.log(rollDice()); //Outputs a random number between 1 and 6
// Here, we mimic the action of rolling a dice and getting a result.

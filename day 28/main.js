"use strict";
// Question 82: Find the Length of a String: Write a function that takes a string as an argument and returns the 
// number of characters in the string.
let userName = "Faiza Siddqiui";
function lengthOfString(str) {
    return str.length;
}
;
console.log(lengthOfString(userName));
// Question 83: Converting to Upper and Lower Case: Create a function that takes a string, converts it to
//  uppercase, then to lowercase, and logs both.
let personName = "Faiza Siddiqui";
function lowerAndUpperCase(str) {
    console.log(`LowerCase : ${str.toLowerCase()}`);
    console.log(`UpperCase : ${str.toUpperCase()}`);
}
;
lowerAndUpperCase(personName);
// Question 84: Replacing Text in a String: Write a function that takes a sentence and replaces all instances
//  of the word "JavaScript" with "TypeScript".
// This function swaps "JavaScript" with "TypeScript" in a sentence
function replacingText(sentence) {
    console.log(sentence.replace(/javascript/g, "Typescript"));
    // Uses a regular expression with the 'g' flag for a global replacement
}
;
// Example: Changing a programming language name in a sentence
replacingText("I love Javascript");
// Outputs: "I love TypeScript and TypeScript is awesome!"
// Every "JavaScript" in the sentence is changed to "TypeScript".

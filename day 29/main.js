"use strict";
// Question 85: Finding the Position of a Substring: Write a function that locates the first occurrence of 
// the word "code" within any given string and returns its position.
// This function finds where "code" first shows up in a text
function findCodePosition(str) {
    return str.indexOf("code"); // Looks for "code" and tells where it found it
}
// Example: Searching within a sentence
console.log(findCodePosition("Learn to code with JavaScript")); // Outputs the start position of "code"
// It tells us the position number where "code" starts.
// Question 86: Checking for Text Presence: Create a function that checks if the word "JavaScript" is present in 
// a given string. It should return true if found, otherwise false.
function checkTrueOrFalse(str) {
    return str.includes("javascript");
}
;
console.log(checkTrueOrFalse("I love coding in Javascript")); //Outputs true or false based on the check
// It simply says true if "JavaScript" is there, or false if it's not
// Question 87: Extracting a Substring: Demonstrate how to extract the first 10 characters from a string.
//Explain & TIP: .substring() can be used to get a specific part of a string, by specifying the start and end positions.
function extractSubstring(str) {
    return str.substring(0, 10);
}
console.log(extractSubstring("Hello,Javascript World"));

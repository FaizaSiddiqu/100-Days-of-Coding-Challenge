// Question 94: Use the .map() method to create a new array that contains the length of each word from an array of words.
// Defines an array with some words
var word = ["Hello", "World", "Hello", "typescript"];
// Uses .map() to create a new array with the length of each word
var length2 = word.map(function (word) { return word.length; });
console.log(length2);
// Each number in the new array represents the length of the corresponding word in the original array.
// Question 95: Write a function that uses the .filter() method to return an array of numbers greater than 10.
// Explain & TIP: The .filter() method creates a new array with all elements that pass the test implemented
// by the provided function.
// This function filters an array, keeping only numbers greater than 10
function retrurnNumber(num) {
    return num.filter(function (number) { return number > 10; });
}
;
//Filtering an array of number
var nums2 = [2, 4, 6, 8, 10, 20, 25, 28, 30];
console.log(retrurnNumber(nums2));
// The new array contains only the numbers that are greater than 10.
// Question 96: Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.
// Explain & TIP: The .reduce() method applies a function against an accumulator and each element in the array 
//(from left to right) to reduce it to a single value.
function calculateSum(number) {
    return number.reduce(function (accumulator, current) { return accumulator + current; }, 0);
}
var num1 = [2, 2, 4, 2];
console.log(calculateSum(num1));

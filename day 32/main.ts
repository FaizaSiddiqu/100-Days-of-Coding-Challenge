// Question 94: Use the .map() method to create a new array that contains the length of each word from an array of words.

// Defines an array with some words
const word: string[] = ["Hello", "World", "Hello", "typescript"];
// Uses .map() to create a new array with the length of each word
const length2: number[] = word.map((word) => word.length);
console.log(length2);
// Each number in the new array represents the length of the corresponding word in the original array.

// Question 95: Write a function that uses the .filter() method to return an array of numbers greater than 10.
// Explain & TIP: The .filter() method creates a new array with all elements that pass the test implemented
// by the provided function.

// This function filters an array, keeping only numbers greater than 10
function retrurnNumber(num: number[]): number[] {
  return num.filter((number) => number > 10);
}

//Filtering an array of number
const nums2: number[] = [2, 4, 6, 8, 10, 20, 25, 28, 30];
console.log(retrurnNumber(nums2));
// The new array contains only the numbers that are greater than 10.

// Question 96: Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.

// Explain & TIP: The .reduce() method applies a function against an accumulator and each element in the array
//(from left to right) to reduce it to a single value.

function calculateSum(number: number[]): number {
  return number.reduce((accumulator, current) => accumulator + current, 0);
}
const num1: number[] = [2, 2, 4, 2];
console.log(calculateSum(num1));
// It adds up all the numbers in the array, resulting in a single sum value.

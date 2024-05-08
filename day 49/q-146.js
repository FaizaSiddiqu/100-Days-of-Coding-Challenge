// Show an example of a callback function used to filter an array of numbers.
//This array of a number will be filtered
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// Uses .filter() with a callback function to filter out numbers greater than 
var filteredNumber = numbers.filter(function (number) { return number > 10; });
console.log(filteredNumber);
// The callback function here checks each number,and .filter() creates a new array with numbers that meet the criteria.

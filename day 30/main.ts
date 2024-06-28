// Question 88: Rounding to the Nearest Integer: Write a function that takes a decimal number as input and 
// returns the number rounded to the nearest integer.

// This function rounds a decimal number to the nearest whole number
function nearestInteger(num : number) : number{
    return Math.round(num)     // Rounds the  number
};
console.log(nearestInteger(6.9))
console.log(nearestInteger(4.4))
//it shows how the function round number either up or down


// Question 89: Converting Strings to Numbers: Create a function that takes a string representing a number
//  (like "123") and converts it into an actual number type.

// Explain & TIP: parseInt() for whole numbers or parseFloat() for decimals are handy for turning number-like 
// strings into real numbers, allowing you to perform mathematical operations on them.

function ConvertingNumber(str:string) : number{
     return parseFloat(str)   // converting string into number
}
// Example: Turning a numeric string into a real number
console.log(ConvertingNumber("123.45"))
console.log(ConvertingNumber("98"))

// Question 90: Checking if a Value is NaN: Demonstrate how to check if a variable's value is NaN (Not a Number) 
// and return a boolean result.

// Explain & TIP: isNaN() helps you figure out if something that's supposed to be a number didn't turn out to 
// be a number. It's useful for validating inputs or results of calculations.

function isValueOfNaN(value : any) : boolean{
    return isNaN(value)   // // Checks and returns true if the value is NaN, false otherwise

};
console.log(isValueOfNaN("Hello")) // Outputs: true, because "hello" isn't a number
console.log(isValueOfNaN(12345))  ; // Outputs: false, because 123 is a number
// This way, we can guard against unexpected non-numeric values in our calculations or inputs.

"use strict";
// // Question 91: Create an array of your three favorite fruits and add a new fruit to the end of the array.
// let favoriteFruit : string[] = ["Mango" ,"Apple" , "Banana" , "Cherry"];
// favoriteFruit.push("Grapes")
// console.log(favoriteFruit)
// // Question 92: Write a function to remove the last element from an array and return the removed element.
// function removeLastElement<T>(arr : T[]) : T | undefined{
//     return arr.pop()   // removes and return the last element of the array
// };
// // Example: Removing the last fruit from the array
// const fruits: string[] = ["Apple", "Banana", "Cherry"];
// console.log(removeLastElement(fruits)); // Outputs: 'Cherry'
// console.log(fruits); // Outputs: ['Apple', 'Banana']
// // Here, we take out the last fruit and show the updated list.
// //Question 93: Find the index of "Banana" in an array of fruits and replace it with "Mango".
// //Explain & TIP: To replace an item in an array, find its index using .indexOf(), then use that index to set a new 
// //value with array bracket notation.
// function replaceFruit(fruit : string[]) :void{
//     const index = fruit.indexOf("Banana")  // find the index of banana
//     if(index !== -1) fruit[index] = "Mango"  // replace "Bnaana" with "Mango" if found
// };
// // Example: Replacing "Banana" in the array
// let fruit : string[] = ["apple" , "Banana" , "melon"]
// replaceFruit(fruit)
// console.log(fruit)
// // We're swapping "Banana" for "Mango" in our fruit list.
var Color;
(function (Color) {
    Color[Color["blue"] = 0] = "blue";
    Color[Color["red"] = 1] = "red";
    Color[Color["green"] = 2] = "green";
})(Color || (Color = {}));
console.log(Color.blue);

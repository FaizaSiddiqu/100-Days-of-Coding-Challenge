"use strict";
// // question 79
// Creating and Accessing Object Properties: Construct an object representing a car with properties for
//  make, model, and year. Then, show how you can access the model property of the car.
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2016
};
console.log(car.model);
// //quetion 80
// Updating Object Properties: Add a property named color to the existing car object, and then update the year
//  property to 2021. Show how to perform these operations.
let car1 = {
    name: 'Toyota',
    model: "Corolla",
    color: "Red",
    year: 2016
};
//updating  colour and year
car1.color = "Black";
car1.year = 2021;
console.log(car1);
// question 81
// Iterating Over Object Properties: Write a function that takes an object as an argument and logs all of its
//  properties and values.
function logPropertyObject(obj) {
    for (let property in obj) {
        // Loops through each property in the object
        console.log(`${property}: ${obj[property]}`);
        // Shows the property name and its value
    }
    ;
}
;
logPropertyObject({ make: "Toyota", model: "Corolla", color: "Blue", year: 2021 });
//This function shows every detail about an object

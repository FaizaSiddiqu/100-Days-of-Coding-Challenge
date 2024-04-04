"use strict";
// Function with Rest Parameters: Write a function that takes a rest parameter representing 
// multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.
//defines a function that multiple hobbies that arguments.
function myHobbies(...hobbies) {
    //loop through each hobby in the array
    hobbies.forEach(hobby => {
        // console log a statement for each hobby
        console.log(`I enjoy  ${hobby}.`);
    });
}
//calls the function with three hobbies
myHobbies(" raeding a book , coding , driving");

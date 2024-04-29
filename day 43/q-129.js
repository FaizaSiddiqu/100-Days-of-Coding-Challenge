"use strict";
// // Explain how this behaves differently in arrow functions compared to traditional functions.
Object.defineProperty(exports, "__esModule", { value: true });
// //Demonstrating "this" tradional and arrow function
// const traditionalVsArrow = function {
//     value: "traditionalVsArrow value"
//     traditionalFunction: function() {
//         console.log("Tradional Function:", this.value);  // "this" refrs to tradionalvsarrow object
//     }
//     arrowFunction :() => {
//         console.log("Arrow Function:", this.value); //
//     }
// }
// traditionalVsArrow.tradionalFunction();
// traditionalVsArrow.arrowFunction();
// Demonstrating 'this' in traditional vs. arrow functions
const traditionalVsArrow = {
    value: "traditionalVsArrow value",
    traditionalFunction: function () {
        console.log("Traditional function:", this.value); // 'this' refers to traditionalVsArrow object
    },
    arrowFunction: function () {
        console.log("Arrow function:", this.value); // 'this' is not bound to traditionalVsArrow object but to the scope
        //    in which traditionalVsArrow was defined
    },
};
traditionalVsArrow.traditionalFunction(); // Logs "traditionalVsArrow value"
traditionalVsArrow.arrowFunction(); // Likely undefined, depending on the outer scope's 'this.value'
// This code snippet illustrates the difference in how 'this' is determined in
//               traditional functions versus arrow functions.

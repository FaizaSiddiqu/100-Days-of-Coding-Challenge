"use strict";
let mixedItem = ["orange", "banana", "geapes"];
let stringArray = mixedItem.filter(item => typeof item === "string");
console.log(stringArray);

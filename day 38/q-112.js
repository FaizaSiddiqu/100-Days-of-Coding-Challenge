"use strict";
//: Create a Map that stores the names of countries as keys and their capitals as values. 
//Add three countries to the Map.
Object.defineProperty(exports, "__esModule", { value: true });
const countries = new Map();
countries.set("USA", " Washington"); //set method take only two parameter one is key and second is 
countries.set("japam", "Tokyo"); //corresponding value
countries.set("France", "Paris");
console.log(countries);

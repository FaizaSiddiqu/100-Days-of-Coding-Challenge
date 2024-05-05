"use strict";
// Create two modules; one that exports a class, and another that imports the class and creates an instance.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
//In files : person.ts
class Person {
    name;
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`hello, My name is ${this.name}`);
    }
}
exports.Person = Person;
//export the person class..
// // In file: Person.ts
// export class Person {
//     name: string;
//     constructor(name: string) {
//       this.name = name;
//     }
//     greet() {
//       console.log(`Hello, my name is ${this.name}`);
//     }
//   }
//   // Exports the Person class

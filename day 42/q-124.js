// Create a function inside an object that returns the object's own name property using the this keyword.
var person = {
    name: "Faiza",
    name2: function () {
        return this.name;
    }
};
console.log(person.name2());
// This method correctly identifies and returns the object's 'name' property using 'this'.

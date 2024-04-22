// Modify a method in an object to use the this keyword to access another property in the same object.
var ractangle = {
    length: 4,
    width: 5,
    calculateArea: function () {
        return this.length * this.width;
    }
};
console.log(ractangle.calculateArea());

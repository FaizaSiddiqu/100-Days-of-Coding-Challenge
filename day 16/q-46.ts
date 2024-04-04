// : Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year,
//  and a method describe() that logs a sentence about the laptop.

let laptop = {
    make:"Dell",
    model: "XPS 15",
    year: "2022",
    describe:function() {
        console.log(`'This laptop is ${this.make} ${this.model} ${this.year}"`);
    }
}
laptop.describe();
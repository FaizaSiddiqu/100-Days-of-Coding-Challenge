// Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias,
//  including properties unique to each shape.

// Creating a custom type (type alias) for shapes that could be circles or rectangles
type Shape  = {
    kind : "circle" | "Rectangle",
    radius? : number , // only for circle,
    height? : number , //only for ractangle
    width? : number // only for ractangle
};
// Describing a circle using shape type
let circle : Shape = {
    kind : "circle",
    radius : 4
};
// Descrobing a ractangle using shape type
let ractangle : Shape = {
    kind : "Rectangle",
    height : 10,
    width : 20
}
console.log(circle)  // for circle
console.log(ractangle) // for ractangle
//  We made a flexible program that can describe different shapes in detail.
// Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias,
//  including properties unique to each shape.
// Describing a circle using shape type
var circle = {
    kind: "circle",
    radius: 4
};
// Descrobing a ractangle using shape type
var ractangle = {
    kind: "Rectangle",
    height: 10,
    width: 20
};
console.log(circle); // for circle
console.log(ractangle); // for ractangle
//  We made a flexible program that can describe different shapes in detail.

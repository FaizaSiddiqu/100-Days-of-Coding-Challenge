// Compare let and const: Create two examples where let allows reassignment but const does not. Try to 
// reassign a const-declared variable and catch the error.
var age = 20;
age = 21;
console.log(age);
var personName = "noor";
try {
    //personName = "faiza"  // const does not re assighned the value
}
catch (error) {
    console.log("can't reassighned a constant");
}

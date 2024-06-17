// Block Scope with let and const: Demonstrate block scope by creating a code block with {} that uses both 
// let and const. Show how variables declared inside the block are not accessible outside of it.


// Demostrating block scope
 {  let blockLet = "visible isnide the block"
const blockConst = " also visible inside the block"
console.log(blockLet)
console.log(blockConst)
 }

try{
   // console.log(blockLet) // this will fail
}catch (error){
    console.log("blockLet is not accsessible outside the block")

}

try{
   // console.log(blockConst)
}catch(error){
    console.log("blockConst is not accsessible outside the block")

}
// //This shows that `let` and `const` keep variables safe inside the block where they're defined.
// Compound Assignment Operators: Use compound assignment operators to simplify arithmetic operations.
//  Start with x = 4 and perform a series of operations (addition, subtraction, multiplication, division) 
//  on x using compound oper

function compoundAssighnmentOperator(){
    let x = 4 
    console.log("start with program" , x)

    // addition
    x += 2 
    console.log("after Addition :" , x)

    //subtraction
    x  -= 2
    console.log("after subtraction: " , x)
    
    //multiplication
    x  *= 2
    console.log("after multiplication:" , x)

    x  /= 4
    console.log("after division:" , x)

}
compoundAssighnmentOperator()
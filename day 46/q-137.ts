// Implement a try-catch block to handle potential errors in a block of code.


//Demontrate using try-catch block to handle error
try{ 
    // intentinally cause error
    throw new Error("something went wrong")

}catch(error){
    console.log(error.message); // logs the error message

}
// This code tries to execute a block that throws an error, and the catch block handles the error gracefully.




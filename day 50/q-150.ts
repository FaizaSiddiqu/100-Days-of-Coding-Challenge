// Describe how asynchronous callbacks differ from synchronous code execution.

//synchorous Example 
console.log("before Synchronous operation")

//simulate a synchronous blocking operation
for( var i = 0 ; i < 1e9 ; i++){}     // a long loop
console.log("after synchronous operation")

//asynchronous Example 
console.log("before asynchronous operation")

setTimeout(function () {
    console.log("aschronous operation completed")
},1000);

console.log("After asynchronous operation")
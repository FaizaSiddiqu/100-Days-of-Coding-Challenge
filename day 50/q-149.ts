// The event loop is a fundamental concept in JavaScript, enabling asynchronous operations. It monitors the call
//  stack and the callback queue. If the call stack is empty, it moves the first event from the queue to the stack,
//   ensuring non-blocking execution.

console.log("Start")
setTimeout(function () {
    console.log("callback executed")  //// This gets queued to be executed by the event loop
}, 0);
console.log("End")
// Although time is 0, "Callback Executed" is  logged after "End" due to thye event loop
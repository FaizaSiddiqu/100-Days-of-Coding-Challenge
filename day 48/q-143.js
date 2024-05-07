// Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.
// Creates a Promise that either resolves or rejects based on a condition
var conditionalPromise = new Promise(function (resolve, reject) {
    var success = Math.random() > 0.5; // randomly use success or failure
    if (success) {
        resolve("Success!");
    }
    else {
        reject(new Error("Failure!"));
    }
})
    .then(function (result) { return console.log(result); }) // handles a successful resolution
    .catch(function (error) { return console.log(error.message); }); // handle a rejection
// This code will randomly log either "Success!" or "Failure" based on the outcome of the promise.

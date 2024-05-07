// Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.

// Creates a Promise that either resolves or rejects based on a condition
const conditionalPromise = new Promise<string>((resolve, reject) => {
    const success = Math.random() > 0.5; // randomly use success or failure

    if (success) {
        resolve("Success!");
    } else {
        reject(new Error("Failure!"));
    }
})
.then((result) => console.log(result)) // handles a successful resolution
.catch((error) => console.log(error.message)); // handle a rejection
// This code will randomly log either "Success!" or "Failure" based on the outcome of the promise.


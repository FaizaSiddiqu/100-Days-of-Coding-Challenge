// Create a Promise that resolves with "Hello, World!" after 2 seconds.
// / Creates a Promise that resolves with "Hello, World!" after 2 seconds
var myPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("Hello , World");
    }, 2000);
});
myPromise.then(function (message) { return console.log(message); });
// / After 2 seconds, "Hello, World!" will be logged to the console.

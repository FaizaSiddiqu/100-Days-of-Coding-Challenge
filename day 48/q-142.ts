// Create a Promise that resolves with "Hello, World!" after 2 seconds.

// / Creates a Promise that resolves with "Hello, World!" after 2 seconds
const myPromise = new Promise <string>((resolve , reject) => {
    setTimeout(() => {
        resolve("Hello , World") 
     } , 2000 )
    })
    
    myPromise.then((message) => console.log(message))
    // / After 2 seconds, "Hello, World!" will be logged to the console.

// question 109: Write an if statement that logs "Good Morning" if the current time is before 12 PM.

// / Checks the current hour and logs "Good Morning" if it's before 12 PM
const currentTime = new Date()
if(currentTime.getHours() < 12){
    console.log("Good Morning!"); // it is morning if before 12PM.
};
// / This simple check helps us greet users appropriately based on the time of day.
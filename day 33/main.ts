// Question 97: Write a function that returns the current date in the format "DD-MM-YYYY".

// Explain & TIP: Working with dates in JavaScript often requires formatting them in a specific way. The Date object 
//provides methods to get the day, month, and year, which you can then assemble into any format you need.

function dateFormatted() : string{
    const today = new Date()

    const day = today.getDate()
    const month = today.getMonth() + 1  // in javascript month starts from 0
    const year = today.getFullYear()

    // Ensure day and month are 2 digit
    const dayFormatted = day < 10 ? `0${day}` : day.toString()
    const monthFormatted = month < 10 ? `0${month}` : month.toString()
    return  `${dayFormatted}-${monthFormatted}-${year}`
};
console.log(dateFormatted())

//Question 98: Create a JavaScript snippet that calculates and logs how many days are left until New Year.

//Explain & TIP: To find the difference between two dates, you can subtract one Date object from another, which gives 
//you the difference in milliseconds. Convert that to days to see how many days are left until a specific event.

// Calculates how many days are left until New Year's Day
function daysUntilNewYear(): number {
    const today = new Date();
    const newYear = new Date(today.getFullYear() + 1, 0, 1); // January 1st of next year
    const diff = newYear.getTime() - today.getTime(); // Difference in milliseconds
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24)); // Converts to days
    return days;
}

console.log(daysUntilNewYear() + " days until New Year.");
// Tells us how many days there are until the next New Year's Day.

// Question 99: Generate a date object representing your next birthday and log it to the console.

// Explain & TIP: When creating a Date object for a future event like a birthday, you might need to adjust the year
// based on whether the birthday has already occurred this year or not.

function getNextBirthday(month: number, day: number): Date {
    const today = new Date();
    let year = today.getFullYear();
    const birthday = new Date(year, month - 1, day); 
    if (birthday < today) {
        
        birthday.setFullYear(year + 1);
    }
    return birthday;
}
const nextBirthday = getNextBirthday(12, 25); 
console.log("Next birthday on:", nextBirthday.toLocaleDateString());









// Question 97: Write a function that returns the current date in the format "DD-MM-YYYY".
// Explain & TIP: Working with dates in JavaScript often requires formatting them in a specific way. The Date object 
//provides methods to get the day, month, and year, which you can then assemble into any format you need.
function dateFormatted() {
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth() + 1; // in javascript month starts from 0
    var year = today.getFullYear();
    // Ensure day and month are 2 digit
    var dayFormatted = day < 10 ? "0".concat(day) : day.toString();
    var monthFormatted = month < 10 ? "0".concat(month) : month.toString();
    return "".concat(dayFormatted, "-").concat(monthFormatted, "-").concat(year);
}
;
console.log(dateFormatted());
// Question 99: Generate a date object representing your next birthday and log it to the console.
// Explain & TIP: When creating a Date object for a future event like a birthday, you might need to adjust the year
// based on whether the birthday has already occurred this year or not.
function getNextBirthday(month, day) {
    var today = new Date();
    var year = today.getFullYear();
    var birthday = new Date(year, month - 1, day);
    if (birthday < today) {
        birthday.setFullYear(year + 1);
    }
    return birthday;
}
var nextBirthday = getNextBirthday(12, 25);
console.log("Next birthday on:", nextBirthday.toLocaleDateString());

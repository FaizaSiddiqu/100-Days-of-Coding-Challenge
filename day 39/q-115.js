// Use a switch statement to log the days of the week based on a number (1-7).
function daysOfTheWeek(dayNumber) {
    switch (dayNumber) {
        case 1:
            console.log("sunday");
            break;
        case 2:
            console.log("Monday");
            break;
        case 3:
            console.log("Tuesday");
            break;
        case 4:
            console.log("Wednesday");
            break;
        case 5:
            console.log("Thursday");
            break;
        case 6:
            console.log("Friday");
            break;
        case 7:
            console.log("saturdat");
            break;
        default:
            console.log("Invalid Day Number");
    }
}
daysOfTheWeek(5);

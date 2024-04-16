// Implement a switch statement that evaluates an expression and uses the default case if none of the cases match.
function evaluatesGrade(grade) {
    switch (grade) {
        case "A":
            console.log("Welldone");
            break;
        case "B":
            console.log("Excellent");
            break;
        case "C":
            console.log("Good");
            break;
        case "D":
            console.log("Fair");
            break;
        case "E":
            console.log("Poor");
            break;
        case "F":
            console.log("Fail");
            break;
        default:
            console.log("Invalid Grade");
    }
}
evaluatesGrade("B");

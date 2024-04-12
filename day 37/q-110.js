"use strict";
// Create a function that assigns a grade (A, B, C, D, F) based on a student's score.
function assignsGrade(score) {
    if (score >= 90) {
        return "A+";
    }
    else if (score >= 80) {
        return "A";
    }
    else if (score >= 70) {
        return "B";
    }
    else if (score >= 60) {
        return "C";
    }
    else if (score >= 50) {
        return "D";
    }
    else {
        console.log("Fail");
    }
}
console.log(assignsGrade(90));
console.log(assignsGrade(80));
console.log(assignsGrade(70));

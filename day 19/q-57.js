"use strict";
//Question 57: Find the Average Grade: Given a list of grades, calculate the average grade.
let grades = [88, 89, 90, 98, 99];
let averageGrade = grades.reduce((total, grade) => total + grade, 0) / grades.length;
console.log(averageGrade);

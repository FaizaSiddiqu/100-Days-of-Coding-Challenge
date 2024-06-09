// Making a Student Template: Create a blueprint for student information, including their name, age, and the 
// classes they're taking, and then fill in this blueprint with an example student.

// creating a blueprint (interface) for student information
interface Student {
    name : string,
    age : number,
    courses : string[]

};
// Filling in the blueprint with an example student
let student : Student = {
    name : "Ariba",
    age : 23,
    courses : ["HTML" , "CSS" ,"TYPESCRIPT"]

};
// Showing the student's information
console.log(student);
// We're using the blueprint to make sure our student has a name, age, and list of courses.

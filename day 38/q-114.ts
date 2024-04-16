// Iterate over a Map of student IDs and names, and log each pair to the console.

//creat a map to stotre students IDs(key) and names(value)
const students = new Map<number , string>();

 students.set(1234 , "Alina"),
 students.set(12345 , "Fatima"),
 students.set(123456 , "Muskan")

// iretates over the map andlogs each student  ids of name
 students.forEach((name , id) => {
    console.log(`STUDENT ID : ${id} , NAME : ${name}`);
 })
//  This loop goes through each student and logs their ID and name.


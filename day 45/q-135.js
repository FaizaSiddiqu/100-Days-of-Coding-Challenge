// Explain how you can format a JSON string with proper indentation for readability.
//reusingb the person from object q-133
var person2 = {
    name: "Faiza",
    age: "21",
    message: "learning typescript"
};
//convert the object into a json string with identation
var jsonString = JSON.stringify(person2, null, 2); // The '2' specifies the number of spaces to use as white space
console.log(jsonString);
// Shows how adding indentation to the JSON string makes it easier to read.

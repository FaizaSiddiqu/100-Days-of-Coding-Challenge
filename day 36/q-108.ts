// Compare two strings to check if they are identical, ignoring case sensitivity.


// compare two string, ignoring case sensitivity
function equalIgnoreCase(input1 : string, input2 : string) : boolean {

//convert both string to lower case
    return input1.toLowerCase() === input2.toLowerCase();

}
console.log(equalIgnoreCase("faiza" ,"Faiza"));
console.log(equalIgnoreCase("typescript" ,"Typesript"))
//both string lower case to ensure the comparison ignores case differences.


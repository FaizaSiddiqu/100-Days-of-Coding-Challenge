// Create a loop that iterates through a string and stops when it finds the first vowel.
// function findVowel(str : string) : void {
//   const vowels = "aeiouAEIOU";
//   for (const char of str) {
//     if (vowels.includes(char)) {
//         console.log(`First vowel found: ${char}`)
//         break;     //stop the loop at the first vowel found
//     }
//     console.log(char);
//   }
//   findVowel("wxyz");// Logs 'w', 'x', 'y', 'z', and then 'First vowel found: y'
//   // Demonstrates iterating through a string and stopping at the first vowel.
// }
// This function iterates through a string and logs each character until it finds a vowel
function logUntilVowel(str) {
    var vowels = "aeiouaeiou";
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        if (vowels.includes(char)) {
            console.log("First vowel found: ".concat(char));
            break; // Stops the loop at the first vowel found
        }
        console.log(char); // Logs each character until a vowel is encountered
    }
}
logUntilVowel("syzygy"); // Logs 's', 'y', 'z', 'y', and then 'First vowel found: y'
// Demonstrates iterating through a string and stopping at the first vowel.

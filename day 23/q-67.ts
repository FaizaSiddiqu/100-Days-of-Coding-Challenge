// Arithmetic with Mixed Types: Write a function that takes two parameters: a number and a string that represents a
//  number (e.g., "5"). Return their sum as a number. 

function addNumberAndString(num1 : number , num2 :string):number{
    return num1 + Number(num2)

}
console.log(addNumberAndString(2 , "3"))
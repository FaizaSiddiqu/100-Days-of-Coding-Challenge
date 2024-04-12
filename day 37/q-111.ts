// Use an if-else-if chain to categorize a person's age group (child, teenager, adult).

function personAge(age : number) {
    if(age < 13) {
        return "child";

    }else if (age <= 19){
        return "teenager";

    }else{
        return "adult";
    }
}
console.log(personAge(12));//child
console.log(personAge(18));//teenager
console.log(personAge(40));//adult
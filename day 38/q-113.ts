// // Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.

const countries = new Map<string , string>()

countries.set("USA" , " Washington")//set method take only two parameter one is key and second is 
countries.set("japan" , "Tokyo")   //corresponding value
countries.set("France" , "Paris")

console.log(countries);

function chechMapForTurkey (countries: Map <string,string>) : void{
    if(countries.has("Turkey")) {
        console.log(`The capital of Turkey is in ${countries.get("Turkey")}`);
    }else{
        console.log(`The Turkey is not in the map`);
    }
};
chechMapForTurkey(countries);


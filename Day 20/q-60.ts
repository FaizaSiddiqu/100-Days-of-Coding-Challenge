// This profile sets itself up and can share info about the user
class UserProfile {
    name : string ;
    age : number;

    constructor (name: string , age : number){
        this.name = name;
        this.age = age

    }
    displayProfile(){
        console.log(`user name ${this.name}`)
        console.log(`user Age ${this.age}`)
    }

}
let userP1 = new UserProfile("Faiza" , 20)
userP1.displayProfile()
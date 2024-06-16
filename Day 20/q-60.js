// This profile sets itself up and can share info about the user
var UserProfile = /** @class */ (function () {
    function UserProfile(name, age) {
        this.name = name;
        this.age = age;
    }
    UserProfile.prototype.displayProfile = function () {
        console.log("user name ".concat(this.name));
        console.log("user Age ".concat(this.age));
    };
    return UserProfile;
}());
var userP1 = new UserProfile("Faiza", 20);
userP1.displayProfile();

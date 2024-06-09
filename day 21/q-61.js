// Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums,
//  and show one 
var Vehiclestype;
(function (Vehiclestype) {
    Vehiclestype[Vehiclestype["car"] = 0] = "car";
    Vehiclestype[Vehiclestype["motorcycle"] = 1] = "motorcycle";
    Vehiclestype[Vehiclestype["buses"] = 2] = "buses";
    Vehiclestype[Vehiclestype["truck"] = 3] = "truck";
})(Vehiclestype || (Vehiclestype = {}));
// Showing one type of vehicle from the list
console.log(Vehiclestype.buses);
// It shows 2 because enums start counting from 0
// Here, we're just checking what number the Car category got in our list.

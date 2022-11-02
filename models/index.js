const Owner = require("./Owner");
const Pet = require("./Pet")
const Toy = require("./Toy")

//Owner has many pets
Owner.hasMany(Pet);
Pet.belongsTo(Owner);
//Pet has many toys
Pet.hasMany(Toy);
Toy.belongsTo(Pet);


module.exports = {
    Owner:Owner,
    Pet:Pet,
    Toy:Toy
}
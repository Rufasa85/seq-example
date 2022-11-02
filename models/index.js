const Owner = require("./Owner");
const Pet = require("./Pet")

Owner.hasMany(Pet);
Pet.belongsTo(Owner);


module.exports = {
    Owner:Owner,
    Pet:Pet
}
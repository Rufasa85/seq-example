const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Pet extends Model {}

Pet.init({
    // add properites here, ex:
    name: {
         type: DataTypes.STRING
    },
    species: {
         type: DataTypes.STRING
    },
    age: DataTypes.INTEGER,
    isCute: {
        type: DataTypes.BOOLEAN,
        defaultValue:true
   },

},{
    sequelize
});

module.exports=Pet
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Owner extends Model {}

Owner.init({
    // add properites here, ex:
    username: {
         type: DataTypes.STRING
    },
    password: {
        type:DataTypes.STRING
    }
},{
    sequelize
});

module.exports=Owner
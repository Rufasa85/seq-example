const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Owner extends Model {}

Owner.init({
    // add properites here, ex:
    username: {
         type: DataTypes.STRING,
         allowNull:false,
         unique:true,
         validate:{
            isAlphanumeric:true
         }
    },
    password: {
        type:DataTypes.STRING,
        validate: {
            len:[8]
        }
    }
},{
    sequelize
});

module.exports=Owner
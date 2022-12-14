const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require("bcrypt");

class Owner extends Model {
    sayHi(){
        console.log(`Hi I am ${this.username}!`)
    }
    checkPassword(pw){
        return bcrypt.compareSync(pw,this.password)
    }
}

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
    sequelize,
    hooks:{
       beforeCreate: ownerObj=>{
        ownerObj.password = bcrypt.hashSync(ownerObj.password,8);
        return ownerObj;
       },
    }
});

module.exports=Owner
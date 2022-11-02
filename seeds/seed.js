const sequelize = require("../config/connection");

const Owner = require("../models/Owner");
const Pet = require("../models/Pet");

const seed = async () => {
  await sequelize.sync({ force: true });
  const owners = await Owner.bulkCreate([
    {
      username: "joe",
      password: "password",
    },
    {
      username: "shivHamut",
      password: "meowmeow",
    },
    {
      username: "arra",
      password: "password1",
    },
  ],{
    individualHooks:true
  });
  const pets = await Pet.bulkCreate([{
    name:"Shiva",
    species:"cat",
    age:2
  },{
    name:"Bahamut",
    species:"cat",
    age:2
  },{
    name:"Bella",
    species:"dog",
    age:2
  },{
    name:"Wolly",
    species:"dog",
    age:2
  },{
    name:"Puppy",
    species:"dog",
    age:15
  }])
//   console.log(owners)
  process.exit(0);
};

seed();

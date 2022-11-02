const sequelize = require("../config/connection");

const Owner = require("../models/Owner");

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
//   console.log(owners)
  process.exit(0);
};

seed();

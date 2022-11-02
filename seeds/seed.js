const sequelize = require("../config/connection");

const {Owner, Pet,Toy} = require("../models")

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
    age:2,
    OwnerId:1
  },{
    name:"Bahamut",
    species:"cat",
    age:2,
    OwnerId:1
  },{
    name:"Bella",
    species:"dog",
    age:2,
    OwnerId:3
  },{
    name:"Wolly",
    species:"dog",
    age:2,
    OwnerId:2
  },{
    name:"Puppy",
    species:"dog",
    age:15,
    OwnerId:1
  }]);
  const toys = await Toy.bulkCreate([
    {
      name:"Ball",
      description:"ITS SOOOOO BOUNCY!!!",
      PetId:3
    },
    {
      name:"Ball",
      description:"it has a motor and light and im gonna chase it all around the house until it gets stuck, usually under a chair leg or in a closet.",
      PetId:2
    },
    {
      name:"My tail",
      description:"I am an adult cat who still chases her tail, its always up to stuff and needs to be caught.  Sometimes it chases me back, and I can never escape",
      PetId:1
    }
  ])
//   console.log(owners)
  process.exit(0);
};

seed();

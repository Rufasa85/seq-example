const express = require("express");
const router = express.Router();
const { Pet,Owner,Toy} = require("../models")


router.get("/", (req, res) => {
  Pet.findAll({
    attributes:["name","isCute"],
    include:[{
      model:Owner,
      attributes:["username"]
    },
    Toy
  ]
  })
    .then((allPets) => {
      res.json(allPets);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err: err });
    });
});
// router.get("/", async (req, res) => {
//   try {
//     const allPets = await Pet.findAll();
//     res.json(allPets);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ err: err });
//   }

// });

router.get("/:id", (req, res) => {
  Pet.findByPk(req.params.id)
    .then((onePet) => {
      res.json(onePet);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err: err });
    });
});

router.post("/", (req, res) => {
  console.log(req.body);
  Pet.create({
    name: req.body.name,
    species: req.body.species,
    age: req.body.age,
    isCute: req.body.isCute,
    OwnerId:req.body.OwnerId
  })
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err: err });
    });
});

router.put("/:id", (req, res) => {
  Pet.update(
    {
      name: req.body.name,
      species: req.body.species,
      age: req.body.age,
      isCute: req.body.isCute,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((updatedPet) => {
      if (updatedPet[0] === 0) {
        return res.status(404).json({ msg: "no pet found!" });
      }
      res.json(updatedPet);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err: err });
    });
});

router.delete("/:id", (req, res) => {
  Pet.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((delPet) => {
      if (delPet === 0) {
        return res.status(404).json({ msg: "no pet found!" });
      }
      res.json(delPet);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err: err });
    });
});

module.exports = router;

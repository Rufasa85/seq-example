const express = require('express');
const router = express.Router();
const {Toy,Pet} = require('../models');


// GET to /api/toys returns all toys
router.get("/", (req, res) => {
    Toy.findAll()
      .then((allToys) => {
        res.json(allToys);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ err: err });
      });
  });
//GET to /api/toys/:id returns a specific toy with their pet data
router.get("/:id", (req, res) => {
    Toy.findByPk(req.params.id,{
        include:[Pet]
    })
      .then((oneToy) => {
        if(!oneToy){
            return res.status(404).json({msg:"no such toy!"})
        }
        res.json(oneToy);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ err: err });
      });
  });
// POST to /api/toys creates a toy
router.post("/", (req, res) => {
    console.log(req.body);
    Toy.create({
      name: req.body.name,
      description:req.body.description,
      PetId:req.body.PetId

    })
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ err: err });
      });
  });
// PUT to /api/toys/:id edits a toy
router.put("/:id", (req, res) => {
    Toy.update(
      {
        name: req.body.name,
        description:req.body.description,
        PetId:req.body.PetId
      },
      {
        where: {
          id: req.params.id,
        },
      }
    )
      .then((updatedToy) => {
        if (updatedToy[0] === 0) {
          return res.status(404).json({ msg: "no Toy found!" });
        }
        res.json(updatedToy);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ err: err });
      });
  });
//DELETE to /api/toys/:id deletes a toy
router.delete("/:id", (req, res) => {
    Toy.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((delToy) => {
        if (delToy === 0) {
          return res.status(404).json({ msg: "no toy found!" });
        }
        res.json(delToy);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ err: err });
      });
  });

module.exports = router;
const express = require('express');
const router = express.Router();
const Pet = require("../models/Pet");

router.get("/",(req,res)=>{
    Pet.findAll().then(allPets=>{
        res.json(allPets)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({err:err})
    })
})

router.get("/:id",(req,res)=>{
    Pet.findByPk(req.params.id).then(onePet=>{
        res.json(onePet)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({err:err})
    })
})

router.post("/",(req,res)=>{
    console.log(req.body)
    Pet.create({
        name:req.body.name,
        species:req.body.species,
        age:req.body.age,
        isCute:req.body.isCute
    }).then(data=>{
        res.json(data)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({err:err})
    })
})

module.exports = router;
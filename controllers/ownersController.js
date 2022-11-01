const express = require('express');
const router = express.Router();
const Owner = require("../models/Owner");

router.get("/",(req,res)=>{
    Owner.findAll().then(allOwners=>{
        res.json(allOwners)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({err:err})
    })
})

router.get("/:id",(req,res)=>{
    Owner.findByPk(req.params.id).then(oneOwner=>{
        res.json(oneOwner)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({err:err})
    })
})

router.post("/",(req,res)=>{
    console.log(req.body)
    Owner.create({
        username:req.body.username,
        password:req.body.password
    }).then(data=>{
        res.json(data)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({err:err})
    })
})

module.exports = router;
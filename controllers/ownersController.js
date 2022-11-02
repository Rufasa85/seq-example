const express = require('express');
const router = express.Router();
const {Owner,Pet} = require("../models")

const bcrypt = require("bcrypt");

router.get("/",(req,res)=>{
    Owner.findAll({
        include:[Pet]
    }).then(allOwners=>{
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

router.post("/login",(req,res)=>{
    Owner.findOne({
        where:{
            username:req.body.username
        }
    }).then(foundOwner=>{
        if(!foundOwner){
            return res.status(401).json({msg:"login failed"})
        }
        if(!foundOwner.checkPassword(req.body.password)){
            return res.status(401).json({msg:"login failed"})
        }
        foundOwner.sayHi()
        res.json(foundOwner)
    }).catch(err=>{
        console.log(err);
        res.json({err});
    })
})

module.exports = router;
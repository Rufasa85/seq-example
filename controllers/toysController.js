const express = require('express');
const router = express.Router();
const {Toy,Pet} = require('../models');


//TODO: GET to /api/toys returns all toys
router.get("/",(req,res)=>{
    res.send("its workiiinnnnnnngggg!")
})
//TODO: GET to /api/toys/:id returns a specific toy with their pet data
//TODO: POST to /api/toys creates a toy
//TODO: PUT to /api/toys/:id edits a toy
//TODO: DELETE to /api/toys/:id deletes a toy


module.exports = router;
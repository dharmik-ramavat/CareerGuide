const personalDb = require("../models/Personal");
const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();


router.post("/create", async (req, res) => {
  const personal = req.body;
  const newperson = new personalDb(personal);
  const saveperson = await newperson.save();
  res.send(saveperson);
  // console.log(saveperson);
});

router.get("/getdetail",async (req,res)=>{

  try{
    const personal= await personalDb.find({}).sort({_id:-1}).limit(1);
    res.status(200).send(personal);

  }catch(error){
    console.log(error);
    res.status(404).json({message:"backend error"})

  }

});




router.post("/upload",async(req,res)=>{
  const {base64}=req.body;
  try{
    personalDb.create({image:base64});
    res.send({Status:"uploaded"})
  }catch(error){
    res.send({Status:"error",data:error});
  }
})

module.exports = router;
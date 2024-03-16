const user = require("../models/userModel")

exports.home = function(req,res,next){   //home route  controllers 
    
    res.status(200).json({sucess:true,message:"this is test route"})
}

exports.userCreate = async function(req,res,next){  //user create route

    try {
      const newuser = new user(req.body);
      await newuser.save();
      res.status(201).json({sucess:true})
    } catch (error) {
      res.status(500).json({sucess:false,message:error.message})
    }
  
  }
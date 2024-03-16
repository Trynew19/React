const express = require("express");
const { home, userCreate } = require("../controllers/userControllers");  //controllers 

const router = express.Router()




router.get("/",home)

router.post("/create",userCreate)






module.exports = router
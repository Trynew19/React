require('dotenv').config({ path: './.env' });
const express = require('express')

const app = express()

require("./models/dbconfig").dbconnection()  //db connection with mongodb atlas 








app.listen(process.env.PORT,()=>{
    console.log(`the server running on port :${process.env.PORT}`);
})










app
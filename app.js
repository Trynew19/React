require('dotenv').config({ path: './.env' });
const express = require('express')

const app = express()

require("./models/dbconfig").dbconnection()  //db connection with mongodb atlas 


// routes

const userRouter = require("./routes/userRouter")
// logger

app.use(require("morgan")("combined"))   //dev , short,tokens,combined,common , morgan=logger

  
// body parser 
app.use(express.json())
app.use(express.urlencoded({extended:true}))






// Routes
app.use("/api/user",userRouter)    //home routes









app.listen(process.env.PORT,()=>{
    console.log(`the server running on port :${process.env.PORT}`);
})











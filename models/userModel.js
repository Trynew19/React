const mongoose = require("mongoose")

const usermodel = mongoose.Schema({
    username:{
        type:String,
        trim:true,
        unique:true,
        require:[true,"username is required"],
        minLength:[3,"username must be at least 3 characters"]
    },
    email:{
        type:String,
        trim:true,
        lowercase:true,
        unique:true,
        require:[true,"email is required"],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']

    },
    password:{
        type:String,
        require:[true,"password is required"],
        minLength:[5,"password must be at least 5 characters"],
        maxLength:[15,"password must be at  15 characters"]
    },
    
},
{timestamps:true}

)



module.exports = mongoose.model("user",usermodel)



const mongoose = require("mongoose");

const userSchema=mongoose.Schema({
    username : {type:String, required:[true,'name required']},
    email: {type:String,required:[true,'Email required']},
    password: {type:String, required:[true,'Password required']}
})

module.exports=mongoose.model('User',userSchema)
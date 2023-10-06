const mongoose = require('mongoose');


const UserSchema=mongoose.Schema({
    name:String,
    lastName:String,
    email:String,
    address:String,
    number:Number
})


module.exports=mongoose.model('users', UserSchema);
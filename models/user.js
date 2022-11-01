const mongoose = require('mongoose');

const User = mongoose.Schema({
    name:String,
    age:Number
},{
    versionKey:false
})

module.exports = mongoose.model("User", User);
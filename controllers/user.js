const User = require('../models/user');

exports.register = async(req, res) =>{
    try {
        if(req.body){
            let user = await new User(req.body).save();
            res.json({status:200, message:"User Registered Successfully", data:user});
        }else{
            res.json({status:400, message:"Please enter name and age"});
        }
    } catch (error) {
        res.json({status:400, message:"Error!", error:error});
    }
}

exports.getByName = async(req, res) =>{
    try {
        let limit = 5;
        let page = req.query.page;
        let user = await User.find({ name: { $regex: req.query.userName, $options: 'i' } }).skip((page - 1) * limit)
        .limit(limit);
        if(user.length)
            res.json({status:200, message:"User Found Successfully!", data:user});
        else
            res.json({status:400, message:"Not Found!"});
    } catch (error) {
        console.log(error);
        res.json({status:400, message:"Error!", error:error});
    }
}

exports.findAll = async(req, res) =>{
    try {
        let limit = 5;
        let page = req.query.page;
        let user = await User.find().sort({"age":req.query.sortOrder})
        .skip((page - 1) * limit)
        .limit(limit);
        if(user.length)
            res.json({status:200, message:"User Found Successfully!", data:user});
        else
            res.json({status:400, message:"Not Found!"});
    } catch (error) {
        res.json({status:400, message:"Error!", error:error});
    }
}
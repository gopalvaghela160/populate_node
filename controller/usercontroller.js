var cat = require('../model/category');
var pro = require('../model/product');


exports.insert_cat = async (req, res) => {
    try {
        var data = await cat.create(req.body);
        res.status(200).json({
            data
        })
    } catch (error) {
        res.status(200).json({
            error
        })
    }
}


exports.insert_pro = async (req,res)=>{
    try {
        var data = await pro.create(req.body);
        res.status(200).json({
            data
        })
    } catch (error) {
        res.status(200).json({
            error
        })
    }
}
exports.get_cat = async (req,res)=>{
    try {
        var data = await cat.find();
        res.status(200).json({
            data
        })
    } catch (error) {
        res.status(200).json({
            error
        })
    }
}
exports.get_pro = async (req,res) =>{
    try {
        var data = await pro.find().populate("cat_id");
        res.status(200).json({
            data
        })
    } catch (error) {
        res.status(200).json({
            error
        })
        
       }
}
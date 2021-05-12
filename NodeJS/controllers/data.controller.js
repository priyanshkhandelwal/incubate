const mongoose = require("mongoose");
const MockData1 = mongoose.model("MockData1");
const MockData2 = mongoose.model("MockData2");


module.exports.getlist = async(req,res)=>{
    try{
        MockData1.aggregate([
            {
                $lookup: {
                    from: "mockdata2",
                    localField: "email",
                    foreignField: "email",
                    as:"team_name"
                }
            },
            {
                $project:{
                    "team_name._id": 0,
                    "team_name.email": 0,
                    "team_name.full_name": 0
                }
            }
        ],await function (err, result) {
            if (!err) {
                res.status(200).send(result)
            }    
            else{
                res.status(404).json({
                    message: "Data not found"
                })
            }
            
        });
    }
    catch(err){
        res.status(500).json({
            message: "Server Error"
        })
    }
    
}




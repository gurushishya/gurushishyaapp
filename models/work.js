var mongoose=require("mongoose");
var passportlocalmongoose=require("passport-local-mongoose");
var workschema = new mongoose.Schema({
    Due_date:Date,
    Posting_date:{Date,default:Date.now},
    Course_id:String,
    Title:String,
    Description:String,
    File:String
});
workschema.plugin(passportlocalmongoose);
module.exports = mongoose.model("work",workschema);
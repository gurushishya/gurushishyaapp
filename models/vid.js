var mongoose=require("mongoose");
var passportlocalmongoose=require("passport-local-mongoose");
var vidschema = new mongoose.Schema({
    Thumbnail:String,
    Title:String,
    Description:String
});
vidschema.plugin(passportlocalmongoose);
module.exports = mongoose.model("vid",vidschema);
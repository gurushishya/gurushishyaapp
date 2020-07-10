var mongoose=require("mongoose");
var passportlocalmongoose=require("passport-local-mongoose");
var stuschema = new mongoose.Schema({
    Student_id: String,
    Name:String,
    phone:Number,
    class_code:String,
    password : String
});
stuschema.plugin(passportlocalmongoose);
module.exports = mongoose.model("stu",stuschema);

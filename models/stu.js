var mongoose=require("mongoose");
var passportlocalmongoose=require("passport-local-mongoose");
var stuschema = new mongoose.Schema({
    Student_id: String,
	password : String
});
stuschema.plugin(passportlocalmongoose);
module.exports = mongoose.model("stu",stuschema);
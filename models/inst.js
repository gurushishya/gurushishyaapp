var mongoose=require("mongoose");
var passportlocalmongoose=require("passport-local-mongoose");
var instschema = new mongoose.Schema({
	name: String,
	email: String,
	phone: Number,
	class_code:[String],
	password : String
});
instschema.plugin(passportlocalmongoose);
module.exports = mongoose.model("inst",instschema);

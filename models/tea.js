var mongoose=require("mongoose");
var passportlocalmongoose=require("passport-local-mongoose");
var teaschema = new mongoose.Schema({
    teacher_id: String,
    instiution_id: String,
    name: String,
	email: String,
	phone: Number,
	password : String
});
teaschema.plugin(passportlocalmongoose);
module.exports = mongoose.model("tea",teaschema);
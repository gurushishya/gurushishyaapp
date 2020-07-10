var mongoose=require("mongoose");
var passportlocalmongoose=require("passport-local-mongoose");
var testschema = new mongoose.Schema({
	Posting_date:{Date,default:Date.now},
	Student_id:String,
	Teacher_id:String,
	Course_id:String,
	Mark:Number,
    Report:String
});
testschema.plugin(passportlocalmongoose);
module.exports = mongoose.model("test",testschema);
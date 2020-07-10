var express=require("express"),
    app = express(),
    mongoose=require("mongoose"),
    passport=require("passport"),
    passportlocal=require("passport-local"),
    inst=require("./models/inst");
    passportlocalmongoose=require("passport-local-mongoose"),
    bodyparser=require("body-parser");

app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(require("express-session")({
	secret:"it is for two day hackathon",
	resave: false,
	saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
// mongoose.connect("mongodb://localhost/inst");
passport.use(new passportlocal(inst.authenticate()));
passport.serializeUser(inst.serializeUser());
passport.deserializeUser(inst.deserializeUser());

//=========================
//ROUTING
//=========================

app.get("/",function(req, res){
    res.render("home.ejs");
});
app.get("/teacher/login",function(req, res){
    res.render("logint");
});
app.post("/teacher/login",function(req, res){

    res.redirect("/teacher/dashboardt");
});
app.get("/institute/dashboard",isloggedin,function(req, res){
    res.render("dashboardi");
});
app.get("/teacher/dashboard",function(req, res){
    res.render("dashboardt");
});
app.get("/student/dashboard",function(req, res){
    res.render("dashboards");
});

app.get("/institute/login",function(req, res){
    res.render("logini");
});
app.post("/institute/login",passport.authenticate("local",{
	successRedirect: "/institute/dashboardi",
	failureRedirect: "/institute/login"
	}),function(req, res){
    // res.render("logins");
});

app.get("/institute/register",function(req, res){
    res.render("register");
});

app.post("/institute/register",function(req, res){
	req.body.instname 
	req.body.instphn 
	req.body.instmail 
	req.body.instpass 
	req.body.instcpass   
	inst.register(new inst({name:req.body.instname ,email:req.body.instmail ,phone:req.body.instphn }), req.body.instpass,function(err,init){
		if(err){
			return res.render('register');
		}
		passport.authenticate("local")(req, res, function(){
			res.render("dashboardi")
		});
	});
    res.redirect("/institute/login");
});

function isloggedin(req, res, next){
	if(req.isAuthenticated()){
		return next();
	}
	res.redirect("/")
}

app.get("/student/login",function(req, res){
    res.render("logins"); 
});
app.get("/logout",function(req, res){
	req.logout();
    res.redirect("/"); 
});
app.get("*",function(req, res){
    res.render("errnf");
});

app.listen(4040,function(){
    console.log("Server Started......")
});

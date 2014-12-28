var express = require('express');
var router = express.Router();


router.get("/",function(req,res){
	res.send("Hello express router");
});

router.get("/page1/:id?",function(req,res){
	req.params.id=req.params.id || 0;
	res.send("params: "+ JSON.stringify(req.params) + "<br/> query: "+ JSON.stringify(req.query));
});

router.post("/",function(req,res){
	res.send("Hello express post");
});

router.get("/home",function(req,res){
	res.render("home3");
});

module.exports=router;
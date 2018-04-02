var express = require('express');
var router = express.Router();
var app = express();
var bodyParser = require("body-parser");
var bcrypt = require('bcryptjs');
var model= require('../models/customer.model')
var ObjectId=require('mongodb').ObjectId
var validations=require('../services/validations')

function createpost(req,res){
	var temp=true;var response={};
	if(validations.empty(req.body.title)){
		temp=false;
		response.title ="title cannot be empty"
	}
	if(validations.empty(req.body.message)) {
		temp=false;
		response.message="message cannot be empty"
	}
	if(temp) {
		var datetime = new Date();
		req.body.datetime=datetime;
		model.search(req.headers.token,"token","customers",function(result){
			console.log(result[0]._id)
			req.body.customerid=result[0]._id;
			model.insert(req.body,"post")
			res.json({status:200,response:"successfully post created"}) 
		})
	}
	else{
		res.json({status:400,response:response})
	}
}

function updatepost(req,res){
	if(!validations.mongoid(req.body.postid)){
		res.json({status:400,response:"not a valid post id to  update"})
	}
	else {
		model.search(ObjectId(req.body.postid),"_id","post",function(result){
			if(result.length==0){		    	
				res.json({status:400,response:"post id entered is invalid please try with valid postid"})
			}
			else{
				model.search(ObjectId(result[0].customerid),"_id","customers",function(result1){
					if(result1[0].token!=req.headers.token){
						res.json({status:400,response:"not a valid user token to update "})
					}
					else{
						var temp=true;var response={};
						if(validations.empty(req.body.title)){
							temp=false;
							response.title="title cannot be empty"
						}
						if(validations.empty(req.body.message)){
							temp=false;
							response.message="message cannot be empty"
						}
						if(temp){
							var datetime = new Date();
							req.body.updatetime=datetime;
							var myquery = { _id:new ObjectId(req.body.postid) };
							var newvalues = {$set: {title: req.body.title,message:req.body.message,updatetime:req.body.updatetime} };
							model.update(myquery,newvalues,"post")
							res.json({status:200,response:"successfully post updated"}) 
						}
						else{
							res.json({status:400,response:response})
						}
					}
				})
			}
		})
	}
}

function deletepost(req,res){
	if(!validations.mongoid(req.body.postid)){
		res.json({status:400,response:"not a valid post id to  delete"})
	}
	else{	
		model.search(ObjectId(req.body.postid),"_id","post",function(result){
			if(result.length==0){	
				res.json({status:400,response:"post id entered is invalid please try with valid postid"})
			}
			else{
				model.search(ObjectId(result[0].customerid),"_id","customers",function(result1){
					if(result1[0].token!=req.headers.token){
						res.json({status:400,response:"not a valid user token to update "})
					}
					else{
						var myquery = { _id: new ObjectId(req.body.postid) };
						model.remove(myquery,"post");
						res.json({status:200,response:"succesfully post deleted "})
					}
				})
			}	
		});
	}
}

module.exports = {createpost,updatepost,deletepost};
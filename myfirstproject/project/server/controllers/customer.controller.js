var express = require('express');
var router = express.Router();
var app = express();
var bodyParser = require("body-parser");
var bcrypt = require('bcryptjs');
var model= require('../models/customer.model')
var ObjectId=require('mongodb').ObjectId
var validations=require('../services/validations')


function registration(req,res){

    var response=""; 
  
            model.search(req.body.userid,"userid" ,"customers",function (result) {
                console.log(result)
                if(result.length>0){
                    response="the userid is already taken , "
                    res.json({ status : 400,response:response})
                }
                else{
                    var temp=true;
        
                    if(!validations.validatename(req.body.fname)){
                        response+="the firstname  consists only alphabets , "
                        temp=false
        
                    }
                    if(!validations.validatename(req.body.lname)){
                        response+="the lastname consists only alphabets ,"
                        temp=false
                        
                    }
                    if(!validations.validateuserid(req.body.userid)){
                        response+="the userid  consists only alphanumeric only  ,"
                        temp=false
                        
                    }
                    if(!validations.validatepassword(req.body.pwd)){
                        response+="the password must contain atleast six characters ."
                        temp=false
                        
                    }
                    if(!validations.matchpassword(req.body.pwd,req.body.cpwd)){
                        response+="password and confirm password doent match "
                        temp=false
                        
                    }
                    if(temp){
                        
                        req.body.pwd=validations.generateEncryptedPassword(req.body.pwd)
                        delete req.body.cpwd;
                        model.insert(req.body,"customers")
        
                        response+=" succesfully user created  "
                        res.json({status : 200,resposne:response})
        
                    }
                    res.json({status :400,resposne:response})
        
                }
        
            
            
        });
}

function login(req,res){


    model.search(req.body.userid,"userid","customers", function (result) {
        if(result.length==0){
            res.json({ status : 400,response:"userid doesnt exists "})
        }
        else {
            
            bcrypt.compare(req.body.pwd,result[0].pwd , function(err, res1) {
            if(res1==false||res1==undefined){
                res.json({ status : 400,response:"password doesnt match  "})
            }

            else if ((result[0].token==undefined)||result[0].token==""){

                require('crypto').randomBytes(48, function(err, buffer) {

                        var token1 = buffer.toString('hex');
                        var myquery = { userid:req.body.userid };
                        var newvalues = {$set: {token: token1} };
                        model.update(myquery,newvalues,"customers")                   
                });
                res.json({ status : 200,response:"succesfully login  "})
            }

            else{
                    res.json({ status : 400,response:"already login please logout and try again"})
                
            }
            });
        }
        
        
    });

}


function logout(req,res){

						var myquery = { token:req.headers.token };
						var newvalues = {$set: {token: ""} };
						model.update(myquery,newvalues,"customers")
						res.json({ status : 200,response:"successfully logout "})

}

function updatecustomerdetails(req,res){
							var response=""
							var temp=true
							if(!validations.validatename(req.body.fname)){
								response+="the firstname  consists only alphabets , "
								temp=false
							}
							if(!validations.validatename(req.body.lname)){
									response+="the lastname consists only alphabets ,"
									temp=false
									
							}
							if(!validations.validatepassword(req.body.pwd)){
									response+="the password must contain atleast six characters ."
									temp=false
									
							}
							if(!validations.matchpassword(req.body.pwd,req.body.cpwd)){
									response+="password and confirm password doent match "
									temp=false
							}
							 if(temp){
								req.body.pwd=validations.generateEncryptedPassword(req.body.pwd)
								var myquery = { token: req.headers.token};
								var newvalues = { $set: {fname: req.body.fname, lname: req.body.lname,pwd:req.body.pwd } };
								model.update(myquery,newvalues,"customers")
								res.json({status:200,response:"succesfully updated"})
							}
							res.json({status:400,response:response})


}


module.exports = {registration,login,logout,updatecustomerdetails};

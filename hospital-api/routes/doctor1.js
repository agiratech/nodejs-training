var express = require('express');
var router = express.Router();
var app=express()
var bodyParser = require("body-parser");
var validator = require('validator');
var mongo= require('./mongoconnect')
var authentication=require('./check_authentication')
var validate = require('./validation')
var ObjectId=require('mongodb').ObjectId

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// router.post('/',function(req,res)
// {
// 	 var d=mongo.email(req.body.email,function(result)
// 	 {
// 	    res.send(result)
// 	 })
// })

// exports.email=function(req,callback)
// {
// 	get().collection("doctor").find({"email":req}).toArray(function(err,result)
// 	{
// 		if(err) throw err;
// 		console.log(result)
// 		callback(result)
// 	})
// }
router.post('/',function(req,res)
{
    if(validate.name(req.body.name) && validate.length(req.body.name) && validate.empty(req.body.name))
    {
        console.log("1")
        if(validate.empty(req.body.hospital_id))
        {
            console.log("2")
            mongo.find("hospital","_id",ObjectId(req.body.hospital_id),function(result1)
            {
                if (result1.length==1)
                {
                    console.log("3")
                    req.body.hospital_id = result1[0]._id;
                    if(validate.name(req.body.gender) && validate.empty(req.body.gender))
                    {
                        console.log("4")
                        if(validate.name(req.body.designation) && validate.length(req.body.designation) && validate.empty(req.body.designation))
                        {
                            console.log("5")
                            if(validate.email(req.body.email) && validate.empty(req.body.email))
                            {
                                console.log("6")
                                mongo.find("doctor","email",req.body.email,function(result4)
                                {
                                    if (err) throw err;
                                    if (result4.length==0)
                                    {
                                        console.log("7")
                                        if(validate.length(req.body.password) && validate.length(req.body.password) && validate.empty(req.body.password))
                                        {
                                            console.log("8")
                                            if(validate.confirm_password(req.body.password,req.body.confirm_password) && validate.empty(req.body.confirm_password))
                                            {
                                                console.log("9")
                                                validate.encrypt_password(req.body.password,function(result2)
                                                {
                                                    console.log("10")
                                                    req.body.password=result2;
                                                    delete req.body.confirm_password;
                                                    mongo.insert("doctor",req.body,function(result3)
                                                    {
                                                    res.send(result3)
                                                    })
                                                })
                                            }
                                        }
                                    }
                                })
                            }
                        }
                    }
                }
            })
        }
    }
})

module.exports = router;

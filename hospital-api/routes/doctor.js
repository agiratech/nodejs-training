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

router.post('/',function(req,res)
{
    var hospital_id=new ObjectId(req.body.hospital_id)
    var searchParam = {_id:ObjectId(req.body.hospital_id)}
    if(validate.name(req.body.name) && validate.length(req.body.name) && validate.empty(req.body.name))
    {
        if(validate.empty(req.body.hospital_id))
        {
            mongo.find(searchParam,function(result1)
            {
                if(result1.length==1)
                {
                    res.send("succcess")
                }
            })
        }
    }
})

module.exports = router;

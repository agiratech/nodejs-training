var express = require('express');
var customer=require('./customer.route')
// var post=require('./post.route.js')
const router = express.Router();
//customer and post routes 
router.use('/customer', customer);
// router.use('/post', post);

//exporting
module.exports = router;
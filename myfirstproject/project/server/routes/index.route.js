var express = require('express');
var customer=require('./customer.route')
var post=require('./post.route.js')
var comment=require('./comments.route')
const router = express.Router();

router.use('/customer', customer);
router.use('/post', post);
router.use('/comment',comment)

module.exports = router;
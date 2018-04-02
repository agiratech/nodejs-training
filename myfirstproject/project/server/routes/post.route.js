var express = require('express');
var postcontrol=require('../controllers/post.controller')
var authentication=require('../services/check.authentication')
const router = express.Router();

router.route('/createpost').post(authentication.check,postcontrol.createpost);

router.route('/updatepost').post(authentication.check,postcontrol.updatepost);

router.route('/deletepost').post(authentication.check,postcontrol.deletepost);

module.exports = router;
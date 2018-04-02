var express = require('express');
var commentcontrol=require('../controllers/comments.controller')
var authentication=require('../services/check.authentication')
const router = express.Router();

router.route('/makecomment').post(authentication.check,commentcontrol.makecomment);
router.route('/updatecomment').post(authentication.check,commentcontrol.updatecomment);
router.route('/deletecomment').post(authentication.check,commentcontrol.deletecomment);

module.exports = router;
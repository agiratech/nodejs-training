var auth = require('../service/auth.js')
var post_control = require('../control/post.controller.js')
var express = require('express');
var router = express();


router.post('/create',auth.check,post_control.post_create); 

router.delete('/delete',auth.check,post_control.post_delete); 

router.put('/update',auth.check,post_control.post_update); 

router.get('/view',auth.check,post_control.post_read);

module.exports = router;
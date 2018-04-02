var auth = require('../service/auth.js')
var user_control = require('../controller/user.controller.js')
var express = require('express');
var router = express();

router.post('/signup',user_control.user_create); 

router.delete('/delete',auth.check,user_control.user_delete); 

router.put('/update',auth.check,user_control.user_update); 

router.get('/view',auth.check,user_control.user_read);

router.get('/profile',auth.check,user_control.user_profile);

router.post('/login',user_control.user_login);

router.put('/logout',auth.check,user_control.user_logout);

module.exports = router;

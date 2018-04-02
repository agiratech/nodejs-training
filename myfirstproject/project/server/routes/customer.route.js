var express = require('express');
var customercontrol=require('../controllers/customer.controller')
var authentication=require('../services/check.authentication')
const router = express.Router();

router.route('/registration').post(customercontrol.registration);

router.route('/login').post(customercontrol.login);

router.route('/logout').post(authentication.check,customercontrol.logout);

router.route('/updatecustomerdetails').post(authentication.check,customercontrol.updatecustomerdetails);

router.route('/deletecustomer').post(authentication.check,customercontrol.deletecustomer);

module.exports = router;
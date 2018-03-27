
var express = require('express');
// import express from 'express';
var customercontrol=require('../controllers/customer.controller')
var authentication=require('../services/check.authentication')
// import isAuthenticated from '../services/apis.auth';

const router = express.Router();

router.route('/registration').post(customercontrol.registration);

router.route('/login').post(customercontrol.login);

router.route('/logout').post(authentication.check,customercontrol.logout);

router.route('/updatecustomerdetails').post(authentication.check,customercontrol.updatecustomerdetails);

module.exports = router;
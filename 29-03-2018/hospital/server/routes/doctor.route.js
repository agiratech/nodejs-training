'use strict';
var express = require('express');
var doctorController=require('../controllers/doctor.controller')
var authentication=require('../services/check.auth')
const router = express.Router();

router.route('/signup')
  .post(doctorController.signup);

router.route('/login')
  .post(doctorController.login);

router.route('/logout')
  .post(authentication.check,doctorController.logout);

router.route('/doctorUpdate')
  .put(authentication.check,doctorController.doctorUpdate);
module.exports = router;
'use strict';
var express = require('express');
var doctorCtrl = require('../controllers/doctor.controller')
var authentication = require('../services/check.authentication')

const router = express.Router();

router.route('/signup')
  .post(doctorCtrl.signup);
router.route('/login')
  .post(doctorCtrl.login);
router.route('/logout')
  .post(authentication.check, doctorCtrl.logout);
router.route('/doctor_update')
  .put(authentication.check, doctorCtrl.doctor_update);

module.exports = router;
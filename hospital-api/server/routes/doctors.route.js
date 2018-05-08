'use strict';
var express = require('express');
var doctorCtrl = require('../controllers/doctor.controller')
var authentication = require('../services/check.authentication')

const router = express.Router();

router.route('/register')
  .post(doctorCtrl.register);
router.route('/login')
  .post(doctorCtrl.login);
router.route('/logout')
  .post(authentication.check, doctorCtrl.logout);
router.route('/doctor_update')
  .put(authentication.check, doctorCtrl.doctor_update);
router.route('/hospital_list')
  .get(doctorCtrl.hospital_list);
router.route('/doctor_profile')
  .post(authentication.check,doctorCtrl.doctor_profile);

module.exports = router;
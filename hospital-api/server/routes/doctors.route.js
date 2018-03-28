'use strict';

var express = require('express');
// import express from 'express';
// import doctorCtrl from '../controllers/doctor.controller';
var doctorCtrl=require('../controllers/doctor.controller')
var authentication=require('../services/check.authentication')
// import isAuthenticated from '../services/apis.auth';

const router = express.Router();

router.route('/signup')
  .post(doctorCtrl.signup);

router.route('/login')
  .post(doctorCtrl.login);

router.route('/logout')
  .post(authentication.check,doctorCtrl.logout);

router.route('/doctor_update')
  .put(authentication.check,doctorCtrl.doctor_update);

// router.route('/signup')
//   .post(doctorCtrl.signup);

// export default router;
module.exports = router;
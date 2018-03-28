var express = require('express');
// import express from 'express';
// import doctorCtrl from '../controllers/doctor.controller';
var billingCtrl=require('../controllers/billing.controller')
var authentication=require('../services/check.authentication')
// import isAuthenticated from '../services/apis.auth';

const router = express.Router();

router.route('/billing_create')
  .post(authentication.check,billingCtrl.billing_create);

router.route('/billing_delete')
  .delete(authentication.check,billingCtrl.billing_delete);

router.route('/billing_read')
  .post(authentication.check,billingCtrl.billing_read);

router.route('/billing_update')
  .put(authentication.check,billingCtrl.billing_update);

// router.route('/signup')
//   .post(doctorCtrl.signup);

// export default router;
module.exports = router;
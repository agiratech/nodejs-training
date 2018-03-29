var express = require('express');
var billingController=require('../controllers/billing.controller')
var authentication=require('../services/check.auth')
const router = express.Router();

router.route('/billingCreate')
  .post(authentication.check,billingController.billingCreate);

router.route('/billingDelete')
  .delete(authentication.check,billingController.billingDelete);

router.route('/billingRead')
  .post(authentication.check,billingController.billingRead);

router.route('/billingUpdate')
  .put(authentication.check,billingController.billingUpdate);
module.exports = router;
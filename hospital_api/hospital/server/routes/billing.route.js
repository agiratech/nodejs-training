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

router.route('/billingGet')
  .get(billingController.billingGet);
  
router.route('/billingGetid')
  .post(billingController.billingGetid);

router.route('/billingList')
  .get(billingController.patient_list);

router.route('/billingListDet')
  .post(authentication.check,billingController.billingListDet)

module.exports = router;
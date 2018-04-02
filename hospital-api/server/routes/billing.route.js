var express = require('express');
var billingCtrl = require('../controllers/billing.controller')
var authentication = require('../services/check.authentication')
const router = express.Router();

router.route('/billing_create')
  .post(authentication.check, billingCtrl.billing_create);
router.route('/billing_delete')
  .delete(authentication.check, billingCtrl.billing_delete);
router.route('/billing_read')
  .post(authentication.check, billingCtrl.billing_read);
router.route('/billing_update')
  .put(authentication.check, billingCtrl.billing_update);

module.exports = router;
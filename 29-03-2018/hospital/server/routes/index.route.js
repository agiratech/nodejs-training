var express = require('express');
var router = express.Router();
var doctorRoute = require( './doctor.route')
var billingRoute = require('./billing.route')
router.use('/doctor',doctorRoute);
router.use('/billing', billingRoute);

module.exports = router;
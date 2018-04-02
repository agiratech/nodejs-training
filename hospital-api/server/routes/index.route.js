'use strict';
var express = require('express');
var doctorRoutes=require('./doctors.route')
var billingRoutes=require('./billing.route')

const router = express.Router(); // eslint-disable-line new-cap

// mount doctor routes at /doctors
router.use('/doctors', doctorRoutes);
router.use('/patient', billingRoutes);

module.exports = router;
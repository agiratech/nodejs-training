'use strict';
// import express from 'express';
// import doctorRoutes from './doctors.route';
// import roundsRoutes from './rounds.route';

var express = require('express');
var doctorRoutes=require('./doctors.route')
var billingRoutes=require('./billing.route')

const router = express.Router(); // eslint-disable-line new-cap

// mount doctor routes at /doctors
router.use('/doctors', doctorRoutes);
router.use('/patient', billingRoutes);

module.exports = router;


// var authentication=require('./routes/check_authentication')
// var signup = require('./routes/signup');
// var login = require('./routes/login');
// var logout = require('./routes/logout');
// var doctor_update = require('./routes/doctor_update');


// var patient_create = require('./routes/patient_create');
// var patient_update = require('./routes/patient_update');
// var patient_read = require('./routes/patient_read');
// var patient_delete = require('./routes/patient_delete');

var express = require('express');
var router = express.Router();
var authentication = require( '../routes/authentication.route')
var doctorRoute = require( '../routes/doctor.route')
var patientRoute = require('../routes/patient.route')
router.use('/authentication',authentication);
router.use('/doctor',doctorRoute);
router.use('/patient', patientRoute);

module.exports = router;
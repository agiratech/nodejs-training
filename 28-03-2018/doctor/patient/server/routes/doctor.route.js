var express =require( 'express')
const router = express.Router();
var doctorController = require('../controllers/doctor.controller')
// var auth = require('./services/authentication.route')

// router.route('/signup').get(doctorController.create) 
router.route('/login').post(doctorController.login) 
// router.route('/logout').post(doctorController.logout)
// router.route('/doc_update').post(doctorController.update)


module.exports = router;

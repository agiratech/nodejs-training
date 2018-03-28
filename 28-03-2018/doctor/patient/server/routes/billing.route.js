var express =require( 'express')
const router = express.Router();
var patientController = require('../controllers/patient.controller')

router.route('/pat_create').post(patientController.create) 
// router.route('/pat_update').post(patientController.update)
// router.route('pat_delete').post(patientController.delete)
// router.route('pat_read').post(patientController.read)
module.exports = router;

const express = require('express');
const orgController = require('./../controllers/orgController');
const authController = require('./../controllers/authController');

const router = express.Router();


router.get('/HospitalProcesses/:orgid',orgController.HospitalProcesses);
router.get('/queryHistoryForProcess/:id/:name', orgController.HospitalProcesses);
router.patch('/usedVaccine',orgController.usedVaccine);
router.patch('/delieveredVaccine', orgController.delieveredVaccine);
router.get('/queryHospitalByCondition',authController.protect , orgController.queryHospitalByCondition);
router.get('/queryHospital/:hospitalID', orgController.queryHospital);
router.get('/queryCure/:id',orgController.queryCure);
router.get('/readVaccine/:key',orgController.readVaccine);
router.get('/queryProcess/:key',orgController.queryProcess);


module.exports = router;
const express = require('express');
const serumController = require('./../controllers/serumController');
const router = express.Router();


router.post('/createVaccine', serumController.createVaccine);

router.get('/queryHistory/:id/:name',serumController.queryHistory);
router.patch('/underTransportVaccine',serumController.underTransportVaccine);
router.get('/querySeurm/:id', serumController.querySeurm);
module.exports = router;
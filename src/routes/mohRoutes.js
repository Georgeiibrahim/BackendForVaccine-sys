const express = require('express');
const mohController = require('./../controllers/mohController');
const router = express.Router();

router.get('/queryBatch/:patchnumber', mohController.queryBatch);
router.get('/queryAllProcess', mohController.queryAllProcess);

router.get('/queryALL', mohController.queryALL);


module.exports = router;
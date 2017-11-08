var express = require('express');
var router = express.Router();

var outletController = require('../controllers/outletController')
/* GET users listing. */

router.post('/create', outletController.create)
module.exports = router;

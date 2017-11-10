var express = require('express');
var router = express.Router();

var outletCodeController = require('../controllers/outletCodeController')
/* GET users listing. */

router.post('/create', outletCodeController.create)
module.exports = router;

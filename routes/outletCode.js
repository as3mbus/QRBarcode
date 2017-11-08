var express = require('express');
var router = express.Router();

var vocherCodeController = require('../controllers/vocherCodeController')
/* GET users listing. */

router.post('/create', vocherCodeController.create)
module.exports = router;

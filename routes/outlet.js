var express = require('express');
var router = express.Router();

var outletController = require('../controllers/outletController')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a outlet');
});

router.post('/create', outletController.create)
module.exports = router;

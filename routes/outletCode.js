var express = require('express');
var router = express.Router();

var outletCodeController = require('../controllers/outletCodeController')
/* GET users listing. */
/**
  * @api {post} api/outletcode/create Create
  * @apiGroup Outlet Code
  * @apiHeader {String} token token untuk login user
  * @apiHeaderExample {json} Header-Example:
  *     {
  *       "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzSW5NaW51dGVzIjoxNDQwLCJpYXQiOjE1MDcwMzQwNzJ9.je4md5GBuTSFGNivBaT3Ju7-yjVjkVS99WSIiwk7wA4",
  *     }
  * @apiParamExample {json} Request-Example:
  *  {
  *      "barcode": "6VI",
  *      "outletId": 3
  *  }
  * @apiSuccess {Boolean} success true jika berhasil
  * @apiSuccess {string} status "OK" jika berhasil
  * @apiSuccess {Array} outletCode array dari outletCode
  * @apiParam {string} barcode barcode vocher
  * @apiParam {integer} outletId id outlet 
  * @apiSuccessExample {json} success
  *     HTTP/1.1 200 OK
  *    {
  *     "success": true,
        "status": "OK",
        "outletCode": {
              "id": 69,
              "codeId": 7,
              "outletId": 3,
              "updatedAt": "2017-11-10T21:15:44.013Z",
              "createdAt": "2017-11-10T21:15:44.013Z"
            }
  *      }
  * @apiErrorExample {json} Internal Server Error
  *     HTTP/1.1 500 Internal Server Error
  *     {
  *       success: false,
  *       status: "ERROR",
  *       outletCode: null
  *      }
**/
router.post('/create', outletCodeController.create)
module.exports = router;

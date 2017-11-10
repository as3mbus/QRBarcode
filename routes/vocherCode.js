var express = require('express');
var router = express.Router();

var vocherCodeController = require('../controllers/vocherCodeController')
/* GET users listing. */
/**
  * @api {post} api/vochercode/create Create
  * @apiGroup VocherCode
  * @apiHeader {String} token token untuk login user
  * @apiHeaderExample {json} Header-Example:
  *     {
  *       "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzSW5NaW51dGVzIjoxNDQwLCJpYXQiOjE1MDcwMzQwNzJ9.je4md5GBuTSFGNivBaT3Ju7-yjVjkVS99WSIiwk7wA4",
  *     }
  * @apiParamExample {json} Request-Example:
  *  {
  *      "expiryDate": "2017-11-08 17:17:29",
  *      "outletOrigin": 1
  *  }
  * @apiSuccess {Boolean} success true jika berhasil
  * @apiSuccess {string} status "OK" jika berhasil
  * @apiSuccess {Array} vocherCode array dari vocherCode
  * @apiParam {date} expiryDate tanggal kadaluarsa
  * @apiParam {integer} outletOrigin asal vocher
  * @apiSuccessExample {json} success
  *     HTTP/1.1 200 OK
  *    {
  *       "success": true,
  *       "status": "OK",
  *       "vocherCode": {
  *                 "id": 15,
  *                 "activated": false,
  *                 "expiryDate": "2017-11-08T10:17:29.000Z",
  *                 "outletOrigin": 1,
  *                 "barcode": "IG9",
  *                 "updatedAt": "2017-11-10T21:18:54.535Z",
  *                 "createdAt": "2017-11-10T21:18:54.535Z"
  *          }
  *      }
  * @apiErrorExample {json} Internal Server Error
  *     HTTP/1.1 500 Internal Server Error
  *     {
  *       success: false,
  *       status: "ERROR",
  *       vocherCode: null
  *      }
**/
router.post('/create', vocherCodeController.create)
/**
  * @api {post} api/vochercode/activated Activated
  * @apiGroup VocherCode
  * @apiHeader {String} token token untuk login user
  * @apiHeaderExample {json} Header-Example:
  *     {
  *       "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzSW5NaW51dGVzIjoxNDQwLCJpYXQiOjE1MDcwMzQwNzJ9.je4md5GBuTSFGNivBaT3Ju7-yjVjkVS99WSIiwk7wA4",
  *     }
  * @apiParamExample {json} Request-Example:
  *  {
  *      "barcode": "NBQ",
  *  }
  * @apiSuccess {Boolean} success true jika berhasil
  * @apiSuccess {string} status "OK" jika berhasil
  * @apiSuccess {Array} vocherCode array dari vocherCode
  * @apiParam {string} barcode barcode yang akan di aktifasi
  * @apiSuccessExample {json} success
  *     HTTP/1.1 200 OK
  *    {
        "success": true,
        "status": "OK",
        "vocherCode": {
                "id": 12,
                "activated": true,
                "expiryDate": "2017-11-08T10:17:29.000Z",
                "outletOrigin": 1,
                "barcode": "NBQ",
                "createdAt": "2017-11-08T18:45:55.974Z",
                "updatedAt": "2017-11-10T21:23:47.747Z"
            },
        "massage": "Vocher was activated!!!"
  *      }
  * @apiErrorExample {json} Internal Server Error
  *     HTTP/1.1 500 Internal Server Error
  *     {
  *       success: false,
  *       status: "ERROR",
  *       vocherCode: null
  *      }
**/
router.post('/activated', vocherCodeController.activated)

module.exports = router;

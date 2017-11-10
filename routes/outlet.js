var express = require('express');
var router = express.Router();

var outletController = require('../controllers/outletController')
/* GET users listing. */
/**
  * @api {post} api/outlet/create Create
  * @apiGroup Outlet
  * @apiHeader {String} token token untuk login user
  * @apiHeaderExample {json} Header-Example:
  *     {
  *       "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzSW5NaW51dGVzIjoxNDQwLCJpYXQiOjE1MDcwMzQwNzJ9.je4md5GBuTSFGNivBaT3Ju7-yjVjkVS99WSIiwk7wA4",
  *     }
  * @apiParamExample {json} Request-Example:
  *  {
  *      "name": "outlet A",
  *      "promo": "promo lorem ipsume"
  *  }
  * @apiSuccess {Boolean} success true jika berhasil
  * @apiSuccess {string} status "OK" jika berhasil
  * @apiSuccess {Array} outlet array dari outlet
  * @apiParam {string} name nama outlet
  * @apiParam {string} promo promo outlet yang ditawarkan
  * @apiSuccessExample {json} success
  *     HTTP/1.1 200 OK
  *    {
  *        "success": true,
  *        "status": "OK",
  *        "outlet": {
  *                "id": 3,
  *                "name": "outlet C",
  *                "promo": "promo gocap",
  *                "updatedAt": "2017-11-10T18:23:07.128Z",
  *                "createdAt": "2017-11-10T18:23:07.128Z"
  *              }
  *      }
  * @apiErrorExample {json} Internal Server Error
  *     HTTP/1.1 500 Internal Server Error
  *     {
  *       success: false,
  *       status: "ERROR",
  *       outlet: null
  *      }
**/
router.post('/create', outletController.create)
module.exports = router;

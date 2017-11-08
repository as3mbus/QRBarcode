let models = require('../models')

module.exports={
  create: function (req,res) {
    var result={
      success: false,
      status: "ERROR",
      outlet: null
    }
    models.VocherCode.create({
      activated: req.body.activated,
      expiryDate: req.body.expiryDate,
      outletOrigin: req.body.outletOrigin,
      barcode: req.body.barcode,
    }).then(vocherCode=>{
      result.success= true
      result.status= "OK"
      result.vocherCode= vocherCode
      res.json(result)
    }).catch(err=>{
      console.log('Error when trying create new vocherCode: ', err);
      res.json(result)
    })
  }
}

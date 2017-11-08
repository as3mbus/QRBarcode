let models = require('../models')

module.exports={
  create: function (req,res) {
    var result={
      success: false,
      status: "ERROR",
      outlet: null
    }
    models.OutletCode.create({
      codeId: req.body.codeId,
      outletId: req.body.outletId
    }).then(outletCode=>{
      result.success= true
      result.status= "OK"
      result.outletCode= outletCode
      res.json(result)
    }).catch(err=>{
      console.log('Error when trying create new outletCode: ', err);
      res.json(result)
    })
  }
}

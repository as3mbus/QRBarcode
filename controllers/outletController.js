let models = require('../models')

module.exports={
  create: function (req,res) {
    var result={
      success: false,
      status: "ERROR",
      outlet: null
    }
    models.Outlet.create({
      name: req.body.name,
      promo: req.body.promo
    }).then(outlet=>{
      result.success= true
      result.status= "OK"
      result.outlet= outlet
      res.json(result)
    }).catch(err=>{
      console.log('Error when trying create new outlet: ', err);
      res.json(result)
    })
  }
}

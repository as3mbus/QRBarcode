let models = require('../models')
let Sequelize = require('sequelize')


module.exports={
  create: function (req,res) {
    var result={
      success: false,
      status: "ERROR",
      outletCode: null
    }
    models.VocherCode.findOne({
      where:{
        barcode: req.body.barcode
      },
      include:[{model: models.Outlet}]
    }).then(vocherCode=>{
      if(vocherCode.activated== true){
        console.log(vocherCode.id);
        console.log(req.body.outletId);
        let Op = Sequelize.Op
        models.OutletCode.findOne({
          where:{
            codeId:vocherCode.id,
            outletId:req.body.outletId
          }
        }).then(outletCode=>{
          if(outletCode == null){
            models.OutletCode.create({
              codeId: vocherCode.id,
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
          else{
              result.outletCode= "Vocher sudah di redeem"
              res.json(result)
          }
        }).catch(err=>{
          console.log('Error when Search VocherCode: ', err);
          res.json(result)
        })
      }
      else{
        result.outletCode = "Barcode is not Activated"
        res.json(result)
      }
      }).catch(err=>{
        console.log('Error when Search barcode : ', err);
        res.json(result)
      })
  }
}

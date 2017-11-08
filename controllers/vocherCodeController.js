let models = require('../models')

module.exports={
  create: function (req,res) {
    var result={
      success: false,
      status: "ERROR",
      vocherCode: null
    }
    models.VocherCode.create({
      activated: false,
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
  },
  activated : function(req,res){
    var result={
      success: false,
      status: "ERROR",
      vocherCode: null,
      massage: ""
    }
    models.VocherCode.findOne({
      where:{
      barcode: req.body.barcode
      }
    }).then(vocherCode=>{
      if(vocherCode.barcode=null){
        result.massage="vocherCode doesnt exist!!"
        res.json(result)
      }else{
        if(vocherCode.activated==false){
          vocherCode.activated=true
          vocherCode.barcode=req.body.barcode
          vocherCode.save()
          .then(()=>{
            result.success= true
            result.status= "OK"
            result.vocherCode= vocherCode
            result.massage="Vocher was activated!!!"
            res.json(result)
          }).catch(err=>{
            console.log("Error when updating vocherCode.activated: ",err);
            result.massage = "Error when updating vocherCode.activated: "
            res.json(result)
          })
        }else{
          result.massage="unsuccessfull activate vocher"
          res.json(result)
        }
      }
    }).catch(err=>{
      console.log("Error when trying activated vocherCode: ",err);
      res.json(result)
    })
  }
}

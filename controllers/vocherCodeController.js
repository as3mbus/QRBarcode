let models = require('../models')
var randomBarcode = function(strln,round){
  	var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZ"
    var value = ''
    for(var i = 0; i< strln;i++){
      for(var j = 0; j<round;j++){
        var rnum = Math.floor(Math.random() * chars.length) ;
      }
      value += chars.substring(rnum,rnum+1);
    }
    return value
}
module.exports={
  create: function (req,res) {
    let _barcode = randomBarcode(3,1)
    var result={
      success: false,
      status: "ERROR",
      vocherCode: null
    }
    models.VocherCode.findAll({
      attributes:['barcode']
    }).then(vocherCode=>{
      let arrybarcode = []
      for(var i = 0; i<vocherCode.length;i++){
        arrybarcode.push(vocherCode[i].barcode)
      }
      while(arrybarcode.indexOf(_barcode)!= -1){
        _barcode = randomBarcode(3,1)
      }
      models.VocherCode.create({
        activated: false,
        expiryDate: req.body.expiryDate,
        outletOrigin: req.body.outletOrigin,
        barcode: _barcode,
      }).then(vocherCode=>{
        result.success= true
        result.status= "OK"
        result.vocherCode= vocherCode
        res.json(result)
      }).catch(err=>{
        console.log('Error when trying create new vocherCode: ', err);
        res.json(result)
      })
    }).catch(err=>{
      console.log('Error barcode ', err);
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

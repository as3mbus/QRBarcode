'use strict';
module.exports = (sequelize, DataTypes) => {
  var VocherCode = sequelize.define('VocherCode', {
    activated: DataTypes.BOOLEAN,
    expiryDate: DataTypes.DATE,
    outletOrigin: DataTypes.INTEGER,
    barcode: DataTypes.STRING
  }, {});
  VocherCode.associate = function(models){
    VocherCode.belongsTo(models.Outlet,{foreignKey:'outletOrigin'})
  }
  return VocherCode;
};

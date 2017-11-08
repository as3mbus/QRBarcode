'use strict';
module.exports = (sequelize, DataTypes) => {
  var VocherCode = sequelize.define('VocherCode', {
    activated: DataTypes.BOOLEAN,
    expiryDate: DataTypes.DATE,
    outletOrigin: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return VocherCode;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  var OutletCode = sequelize.define('OutletCode', {
    codeId: DataTypes.INTEGER,
    outletId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return OutletCode;
};

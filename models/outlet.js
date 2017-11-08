'use strict';
module.exports = (sequelize, DataTypes) => {
  var Outlet = sequelize.define('Outlet', {
    name: DataTypes.STRING,
    promo: DataTypes.STRING
  }, {});
  Outlet.associate = function(models){
    Outlet.hasMany(models.VocherCode,{foreignKey: 'outletOrigin'})
  }
  return Outlet;
};

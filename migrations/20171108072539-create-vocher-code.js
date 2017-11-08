'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('VocherCodes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      activated: {
        type: Sequelize.BOOLEAN
      },
      expiryDate: {
        type: Sequelize.DATE
      },
      outletOrigin: {
        type: Sequelize.INTEGER,
        references:{
          model:'Outlets',
          key:'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('VocherCodes');
  }
};

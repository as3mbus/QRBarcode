'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('OutletCodes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      codeId: {
        type: Sequelize.INTEGER,
        references:{
          model:'VocherCodes',
          key:'id'
        }
      },
      outletId: {
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
    return queryInterface.dropTable('OutletCodes');
  }
};

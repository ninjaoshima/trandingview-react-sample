'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('securities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      exchange_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'exchanges',
          key: 'id'
        },
        onUpdate: 'no action',
        onDelete: 'no action'
      },
      ticker: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      sector: {
        type: Sequelize.STRING
      },
      industry: {
        type: Sequelize.STRING
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

    await queryInterface.addIndex('securities', ['exchange_id'])
    await queryInterface.addIndex('securities', ['ticker'])
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('securities');
  }
};
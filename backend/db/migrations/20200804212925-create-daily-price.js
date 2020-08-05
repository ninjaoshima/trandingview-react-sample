'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('daily_prices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      data_vender_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'data_vendors',
          key: 'id'
        },
        constraint: 'fk_data_vendor_id',
        onUpdate: 'no action',
        onDelete: 'no action'
      },
      ticker_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'securities',
          key: 'id'
        },
        onUpdate: 'no action',
        onDelete: 'no action'
      },
      price_date: {
        type: Sequelize.DATEONLY
      },
      open_price: {
        type: Sequelize.DECIMAL(11,6)
      },
      high_price: {
        type: Sequelize.DECIMAL(11,6)
      },
      low_price: {
        type: Sequelize.DECIMAL(11,6)
      },
      close_price: {
        type: Sequelize.DECIMAL(11,6)
      },
      adj_close_price: {
        type: Sequelize.DECIMAL(11,6)
      },
      volume: {
        type: Sequelize.BIGINT(20)
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

    await queryInterface.addIndex('daily_prices', ['ticker_id'])
    await queryInterface.addIndex('daily_prices', ['price_date'])
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('daily_prices');
  }
};
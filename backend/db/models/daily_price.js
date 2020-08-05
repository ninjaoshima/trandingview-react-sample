'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class daily_price extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  daily_price.init({
    data_vender_id: DataTypes.INTEGER,
    ticker_id: DataTypes.INTEGER,
    price_date: DataTypes.DATEONLY,
    open_price: {
      type: DataTypes.DECIMAL(11,6)
    },
    high_price: DataTypes.DECIMAL(11,6),
    low_price: DataTypes.DECIMAL(11,6),
    close_price: DataTypes.DECIMAL(11,6),
    adj_close_price: DataTypes.DECIMAL(11,6),
    volume: DataTypes.BIGINT(20)
  }, {
    sequelize,
    modelName: 'daily_price',
  });
  return daily_price;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class security extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.exchange, { foreignKey: 'exchange_id', as: 'fk_exchange_id', targetKey: 'id', onDelete: 'NO ACTION',  onUpdate: 'NO ACTION'})
    }
  };
  security.init({
    exchange_id: DataTypes.NUMBER,
    ticker: DataTypes.STRING,
    name: DataTypes.STRING,
    sector: DataTypes.STRING,
    industry: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'security',
  });
  return security;
};
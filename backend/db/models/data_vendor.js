'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class data_vendor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  data_vendor.init({
    name: DataTypes.STRING,
    website_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'data_vendor',
  });
  return data_vendor;
};
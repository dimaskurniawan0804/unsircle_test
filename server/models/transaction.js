'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    static associate(models) {
      Transaction.belongsTo(models.Item, { foreignKey: "ItemId" })
      Transaction.belongsTo(models.Company, { foreignKey: "CompanyId" })
    }
  }
  Transaction.init({
    UserId: DataTypes.INTEGER,
    ItemId: DataTypes.INTEGER,
    CompanyId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    static associate(models) {
      Company.belongsToMany(models.Item, { through: "Transactions", foreignKey: "CompanyId" })
    }
  }
  Company.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Company name is required"
        },
        notEmpty: {
          args: true,
          msg: "Company name is required"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Company',
  });
  return Company;
};
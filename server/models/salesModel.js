const sequelize = require("../configs/db");

const { DataTypes, Sequelize } = require("sequelize");

const Sales = sequelize.define("sales", {
  id: {
    type: Sequelize.DataTypes.UUID,
    defaultValue: Sequelize.DataTypes.UUIDV4,
    primaryKey: true,
  },
  discount: { type: DataTypes.INTEGER, allowNull: false },
  start_date: { type: DataTypes.DATE, allowNull: false },
  end_date: { type: DataTypes.DATE, allowNull: false },
});

module.exports = Sales;

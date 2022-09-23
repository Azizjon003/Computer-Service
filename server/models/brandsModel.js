const sequelize = require("../configs/db");

const { DataTypes, Sequelize } = require("sequelize");

const Brands = sequelize.define("brands", {
  id: {
    type: Sequelize.DataTypes.UUID,
    defaultValue: Sequelize.DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: { type: DataTypes.STRING, allowNull: false },
});

module.exports = Brands;

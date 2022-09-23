const sequelize = require("../configs/db");

const { DataTypes, Sequelize } = require("sequelize");

const ServiseTypes = sequelize.define("serviseTypes", {
  id: {
    type: Sequelize.DataTypes.UUID,
    defaultValue: Sequelize.DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.INTEGER, allowNull: false },
  review_id: { type: DataTypes.STRING, allowNull: false }, // boshqa table
  worker_id: { type: DataTypes.STRING, allowNull: false }, // boshqa table
});

module.exports = ServiseTypes;

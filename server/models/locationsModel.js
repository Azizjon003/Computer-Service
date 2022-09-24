const sequelize = require("../configs/db");

const { DataTypes, Sequelize } = require("sequelize");

const Locations = sequelize.define("locations", {
  id: {
    type: Sequelize.DataTypes.UUID,
    defaultValue: Sequelize.DataTypes.UUIDV4,
    primaryKey: true,
  },
  country: { type: DataTypes.STRING, allowNull: false },
  city: { type: DataTypes.STRING, allowNull: false },
  district: { type: DataTypes.STRING, allowNull: false },
  street: { type: DataTypes.STRING, allowNull: false },
  home: { type: DataTypes.INTEGER, allowNull: false },
});

module.exports = Locations;

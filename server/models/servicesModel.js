const sequelize = require("../configs/db");

const { DataTypes, Sequelize } = require("sequelize");

const Services = sequelize.define("services", {
  id: {
    type: Sequelize.DataTypes.UUID,
    defaultValue: Sequelize.DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: { type: DataTypes.STRING, allowNull: false },
  service_types_id: { type: DataTypes.STRING, allowNull: false }, //boshqa table
});

module.exports = Services;

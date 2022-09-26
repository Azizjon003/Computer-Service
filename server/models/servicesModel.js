const sequelize = require("../configs/db");

const { DataTypes, Sequelize } = require("sequelize");

const Services = sequelize.define("services", {
  id: {
    type: Sequelize.DataTypes.UUID,
    defaultValue: Sequelize.DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: { type: DataTypes.STRING, allowNull: false },
});

Services.sync({ alter: true });

module.exports = Services;

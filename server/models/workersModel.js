const sequelize = require("../configs/db");

const { DataTypes, Sequelize } = require("sequelize");

const Workers = sequelize.define("workers", {
  id: {
    type: Sequelize.DataTypes.UUID,
    defaultValue: Sequelize.DataTypes.UUIDV4,
    primaryKey: true,
  },
  first_name: { type: DataTypes.STRING, allowNull: false },
  last_name: { type: DataTypes.STRING, allowNull: false },
  middle_name: { type: DataTypes.STRING, allowNull: false },
  phone: { type: DataTypes.STRING, allowNull: false },
  status: { type: DataTypes.INTEGER, allowNull: false },
  experience: { type: DataTypes.STRING, allowNull: false },
});

module.exports = Workers;

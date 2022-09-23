const sequelize = require("../configs/db");

const { DataTypes, Sequelize } = require("sequelize");

const SubmitVacancy = sequelize.define("submitVacancies", {
  id: {
    type: Sequelize.DataTypes.UUID,
    defaultValue: Sequelize.DataTypes.UUIDV4,
    primaryKey: true,
  },
  user_id: { type: DataTypes.STRING, allowNull: false }, // boshqa table
  status: { type: DataTypes.INTEGER, allowNull: false },
  vacancy_id: { type: DataTypes.STRING, allowNull: false }, // boshqa table
});

module.exports = SubmitVacancy;

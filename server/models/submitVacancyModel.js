<<<<<<< HEAD
const SubmitVacancy = (sequelize, DataTypes) => {
  const SubmitVacancy = sequelize.define("submitVacancies", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    status: { type: DataTypes.INTEGER, allowNull: false, defaultValue: "1" },
  });
  return SubmitVacancy;
};
=======
const sequelize = require("../configs/db");

const User = require("../models/userModel");
const Vacancy = require("../models/vacancyModel");

const { DataTypes, Sequelize } = require("sequelize");

const SubmitVacancy = sequelize.define("submitVacancies", {
  id: {
    type: Sequelize.DataTypes.UUID,
    defaultValue: Sequelize.DataTypes.UUIDV4,
    primaryKey: true,
  },
  status: { type: DataTypes.INTEGER, allowNull: false, defaultValue: "1" },
});

User.hasMany(SubmitVacancy, { onDelete: "CASCADE" });
SubmitVacancy.belongsTo(User, { onDelete: "CASCADE" });

Vacancy.hasMany(SubmitVacancy, { onDelete: "CASCADE" });
SubmitVacancy.belongsTo(Vacancy, { onDelete: "CASCADE" });
>>>>>>> e424b262be26ea74cbdea8d4518623c95d8048ef

SubmitVacancy.sync({ alter: true });

module.exports = SubmitVacancy;

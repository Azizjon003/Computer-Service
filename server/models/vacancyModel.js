const sequelize = require("../configs/db");
const VacancyCategory = require("./vacancyCategoryModel");
const User = require("../models/userModel");

const { DataTypes, Sequelize } = require("sequelize");

const Vacancy = sequelize.define("vacancies", {
  id: {
    type: Sequelize.DataTypes.UUID,
    defaultValue: Sequelize.DataTypes.UUIDV4,
    primaryKey: true,
  },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
});

VacancyCategory.hasMany(Vacancy, { onDelete: "CASCADE" });
Vacancy.belongsTo(VacancyCategory, { onDelete: "CASCADE" });

VacancyCategory.sync({ alter: true });
Vacancy.sync({ alter: true });

module.exports = Vacancy;

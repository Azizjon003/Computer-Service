const sequelize = require("../configs/db");
const Services = require("./servicesModel");
const Worker = require("../models/workersModel");

const { DataTypes, Sequelize } = require("sequelize");

const ServiseTypes = sequelize.define("serviseTypes", {
  id: {
    type: Sequelize.DataTypes.UUID,
    defaultValue: Sequelize.DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.STRING, allowNull: false },
});

Services.hasMany(ServiseTypes, { onDelete: "CASCADE" });
ServiseTypes.belongsTo(Services, { onDelete: "CASCADE" });

Worker.hasMany(ServiseTypes, { onDelete: "CASCADE" });
ServiseTypes.belongsTo(Worker, { onDelete: "CASCADE" });

ServiseTypes.sync({ alter: true });

module.exports = ServiseTypes;

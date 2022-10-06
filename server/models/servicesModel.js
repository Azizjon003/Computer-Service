<<<<<<< HEAD
const Services = (sequelize, DataTypes) => {
  const Services = sequelize.define("services", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: { type: DataTypes.STRING, allowNull: false },
    service_types_id: { type: DataTypes.STRING, allowNull: false }, //boshqa table
  });
  return Services;
};
=======
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
>>>>>>> e424b262be26ea74cbdea8d4518623c95d8048ef

Services.sync({ alter: true });

module.exports = Services;

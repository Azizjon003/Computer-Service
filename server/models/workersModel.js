<<<<<<< HEAD
const Workers = (sequelize, DataTypes) => {
  const Workers = sequelize.define("workers", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    first_name: { type: DataTypes.STRING, allowNull: false },
    last_name: { type: DataTypes.STRING, allowNull: false },
    middle_name: { type: DataTypes.STRING, allowNull: false },
    phone: { type: DataTypes.STRING, allowNull: false },
    status: { type: DataTypes.INTEGER, allowNull: false },
    experience: { type: DataTypes.STRING, allowNull: false },
    review_id: { type: DataTypes.STRING, allowNull: false }, // boshqa table
  });
  return Workers;
};
=======
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
>>>>>>> e424b262be26ea74cbdea8d4518623c95d8048ef

Workers.sync({ alter: true });

module.exports = Workers;

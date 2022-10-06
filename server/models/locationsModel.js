<<<<<<< HEAD
const Locations = (sequelize, DataTypes) => {
  const Locations = sequelize.define("locations", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    country: { type: DataTypes.STRING, allowNull: false },
    city: { type: DataTypes.STRING, allowNull: false },
    district: { type: DataTypes.STRING, allowNull: false },
    street: { type: DataTypes.STRING, allowNull: false },
    home: { type: DataTypes.INTEGER, allowNull: false },
  });
  return Locations;
};
=======
const sequelize = require("../configs/db");
const Products = require("./productsModel");
const User = require("./userModel");

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
>>>>>>> e424b262be26ea74cbdea8d4518623c95d8048ef

Products.hasMany(Locations, { onDelete: "CASCADE" });
Locations.belongsTo(Products, { onDelete: "CASCADE" });

User.hasMany(Locations, { onDelete: "CASCADE" });
Locations.belongsTo(User, { onDelete: "CASCADE" });

Locations.sync({ alter: true });

module.exports = Locations;

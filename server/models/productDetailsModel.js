<<<<<<< HEAD
const ProductDetails = (sequelize, DataTypes) => {
  const ProductDetails = sequelize.define("productDetails", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    colors: { type: DataTypes.ENUM, values: ["white", "black", "green"] },
    sizes: { type: DataTypes.ENUM, values: ["xl", "2xl", "3xl"] },
    condition: { type: DataTypes.STRING, allowNull: false },
    images: { type: DataTypes.ARRAY(DataTypes.DECIMAL), allowNull: false },
  });
  return ProductDetails;
};
=======
const sequelize = require("../configs/db");

const { DataTypes, Sequelize } = require("sequelize");

const ProductDetails = sequelize.define("productDetails", {
  id: {
    type: Sequelize.DataTypes.UUID,
    defaultValue: Sequelize.DataTypes.UUIDV4,
    primaryKey: true,
  },
  colors: { type: Sequelize.ENUM, values: ["white", "black", "green"] },
  sizes: { type: Sequelize.ENUM, values: ["xl", "2xl", "3xl"] },
  condition: { type: DataTypes.STRING, allowNull: false },
  images: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    allowNull: false,
  },
});
>>>>>>> e424b262be26ea74cbdea8d4518623c95d8048ef

module.exports = ProductDetails;

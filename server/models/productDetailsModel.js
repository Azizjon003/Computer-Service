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

module.exports = ProductDetails;

const sequelize = require("../configs/db");
const User = require("./userModel");
const Products = require("./productsModel");

const { DataTypes, Sequelize } = require("sequelize");

const ReviewForProducts = sequelize.define("reviewProducts", {
  id: {
    type: Sequelize.DataTypes.UUID,
    defaultValue: Sequelize.DataTypes.UUIDV4,
    primaryKey: true,
  },
  body: { type: DataTypes.STRING, allowNull: false },
  rating: { type: DataTypes.INTEGER, allowNull: false },
});

User.hasMany(ReviewForProducts, { onDelete: "CASCADE" });
ReviewForProducts.belongsTo(User, { onDelete: "CASCADE" });

Products.hasMany(ReviewForProducts, { onDelete: "CASCADE" });
ReviewForProducts.belongsTo(Products, { onDelete: "CASCADE" });

ReviewForProducts.sync({ alter: true });

module.exports = ReviewForProducts;

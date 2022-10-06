<<<<<<< HEAD:server/models/categoriesModel.js
const Categories = (sequelize, DataTypes) => {
  const Categories = sequelize.define("categories", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        min: 3,
        max: 20,
      },
    },
  });
  return Categories;
};
=======
const sequelize = require("../configs/db");

const { DataTypes, Sequelize } = require("sequelize");

const ProductCategory = sequelize.define("productCategory", {
  id: {
    type: Sequelize.DataTypes.UUID,
    defaultValue: Sequelize.DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: { type: DataTypes.STRING, allowNull: false },
});
>>>>>>> e424b262be26ea74cbdea8d4518623c95d8048ef:server/models/productCategoriesModel.js

ProductCategory.sync({ alter: true });

module.exports = ProductCategory;

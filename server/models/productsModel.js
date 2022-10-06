<<<<<<< HEAD
const Products = (sequelize, DataTypes) => {
  const Products = sequelize.define("products", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.INTEGER, allowNull: false },
    image_main: { type: DataTypes.STRING, allowNull: false },
    quantity: { type: DataTypes.INTEGER, allowNull: false },
    sale_id: { type: DataTypes.STRING, allowNull: false }, //boshqa table
    category_id: { type: DataTypes.STRING, allowNull: false }, //boshqa table
    reviews_id: { type: DataTypes.STRING, allowNull: false }, //boshqa table
    detail_id: { type: DataTypes.STRING, allowNull: false }, //boshqa table
    brand_id: { type: DataTypes.STRING, allowNull: false }, //boshqa table
  });
  return Products;
};
=======
const sequelize = require("../configs/db");
const ProductCategory = require("./productCategoriesModel");
const Brands = require("./brandsModel");
const Sales = require("./salesModel");
const ProductDetails = require("./productDetailsModel");

const { DataTypes, Sequelize } = require("sequelize");

const Products = sequelize.define("products", {
  id: {
    type: Sequelize.DataTypes.UUID,
    defaultValue: Sequelize.DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.INTEGER, allowNull: false },
  image_main: { type: DataTypes.STRING, allowNull: false },
  quantity: { type: DataTypes.INTEGER, allowNull: false },
});
>>>>>>> e424b262be26ea74cbdea8d4518623c95d8048ef

Brands.hasMany(Products, { onDelete: "CASCADE" });
Products.belongsTo(Brands, { onDelete: "CASCADE" });

ProductCategory.hasMany(Products, { onDelete: "CASCADE" });
Products.belongsTo(ProductCategory, { onDelete: "CASCADE" });

Sales.hasMany(Products, { onDelete: "CASCADE" });
Products.belongsTo(Sales, { onDelete: "CASCADE" });

ProductDetails.hasOne(Products, { onDelete: "CASCADE" });
Products.belongsTo(ProductDetails, { onDelete: "CASCADE" });

Products.sync({ alter: true });

module.exports = Products;

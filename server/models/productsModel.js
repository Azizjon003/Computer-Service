const sequelize = require("../configs/db");

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
  sale_id: { type: DataTypes.STRING, allowNull: false }, //boshqa table
  category_id: { type: DataTypes.STRING, allowNull: false }, //boshqa table
  reviews_id: { type: DataTypes.STRING, allowNull: false }, //boshqa table
  detail_id: { type: DataTypes.STRING, allowNull: false }, //boshqa table
  brand_id: { type: DataTypes.STRING, allowNull: false }, //boshqa table
});

module.exports = Products;

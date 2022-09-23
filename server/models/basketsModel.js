const sequelize = require("../configs/db");

const { DataTypes, Sequelize } = require("sequelize");

const Baskets = sequelize.define("baskets", {
  id: {
    type: Sequelize.DataTypes.UUID,
    defaultValue: Sequelize.DataTypes.UUIDV4,
    primaryKey: true,
  },
  status: { type: DataTypes.INTEGER, allowNull: false },
  order_time: { type: DataTypes.DATE, allowNull: false },
  product_id: { type: DataTypes.STRING, allowNull: false }, //boshqa table
  user_id: { type: DataTypes.STRING, allowNull: false }, //boshqa table
});

module.exports = Baskets;

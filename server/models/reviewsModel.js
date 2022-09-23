const sequelize = require("../configs/db");

const { DataTypes, Sequelize } = require("sequelize");

const Reviews = sequelize.define("reviews", {
  id: {
    type: Sequelize.DataTypes.UUID,
    defaultValue: Sequelize.DataTypes.UUIDV4,
    primaryKey: true,
  },
  body: { type: DataTypes.STRING, allowNull: false },
  rating: { type: DataTypes.INTEGER, allowNull: false },
  user_id: { type: DataTypes.STRING, allowNull: false }, //boshqa table
});

module.exports = Reviews;

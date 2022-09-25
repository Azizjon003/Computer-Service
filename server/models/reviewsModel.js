const sequelize = require("../configs/db");
const User = require("../models/userModel");

const { DataTypes, Sequelize } = require("sequelize");

const Reviews = sequelize.define("reviews", {
  id: {
    type: Sequelize.DataTypes.UUID,
    defaultValue: Sequelize.DataTypes.UUIDV4,
    primaryKey: true,
  },
  body: { type: DataTypes.STRING, allowNull: false },
  rating: { type: DataTypes.INTEGER, allowNull: false },
});

User.hasOne(Reviews, { onDelete: "CASCADE" });
Reviews.belongsTo(User, { onDelete: "CASCADE" });

module.exports = Reviews;

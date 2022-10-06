const sequelize = require("../configs/db");
const User = require("./userModel");
const ServiseTypes = require("./serviseTypesModel");

const { DataTypes, Sequelize } = require("sequelize");

const ReviewForServiceType = sequelize.define("reviewServiceType", {
  id: {
    type: Sequelize.DataTypes.UUID,
    defaultValue: Sequelize.DataTypes.UUIDV4,
    primaryKey: true,
  },
  body: { type: DataTypes.STRING, allowNull: false },
  rating: { type: DataTypes.INTEGER, allowNull: false },
});

User.hasMany(ReviewForServiceType, { onDelete: "CASCADE" });
ReviewForServiceType.belongsTo(User, { onDelete: "CASCADE" });

ServiseTypes.hasMany(ReviewForServiceType, { onDelete: "CASCADE" });
ReviewForServiceType.belongsTo(ServiseTypes, { onDelete: "CASCADE" });

ReviewForServiceType.sync({ alter: true });

module.exports = ReviewForServiceType;

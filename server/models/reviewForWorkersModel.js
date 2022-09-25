const sequelize = require("../configs/db");
const User = require("./userModel");
const Worker = require("./workersModel");

const { DataTypes, Sequelize } = require("sequelize");

const ReviewForWorkers = sequelize.define("reviewWorkers", {
  id: {
    type: Sequelize.DataTypes.UUID,
    defaultValue: Sequelize.DataTypes.UUIDV4,
    primaryKey: true,
  },
  body: { type: DataTypes.STRING, allowNull: false },
  rating: { type: DataTypes.INTEGER, allowNull: false },
});

User.hasMany(ReviewForWorkers, { onDelete: "CASCADE" });
ReviewForWorkers.hasMany(User, { onDelete: "CASCADE" });

Worker.hasMany(ReviewForWorkers, { onDelete: "CASCADE" });
ReviewForWorkers.hasMany(Worker, { onDelete: "CASCADE" });

ReviewForWorkers.sync({ alter: true });

module.exports = ReviewForWorkers;

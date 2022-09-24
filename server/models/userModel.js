const sequelize = require("../configs/db");

const Location = require("./locationsModel");

const { DataTypes, Sequelize } = require("sequelize");

const User = sequelize.define("users", {
  id: {
    type: Sequelize.DataTypes.UUID,
    defaultValue: Sequelize.DataTypes.UUIDV4,
    primaryKey: true,
  },
  first_name: { type: DataTypes.STRING, allowNull: false },
  last_name: { type: DataTypes.STRING, allowNull: false },
  username: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  phone: { type: DataTypes.STRING, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  role: {
    type: Sequelize.ENUM,
    defaultValue: "user",
    values: ["admin", "user", "moderator"],
  },
});

Location.hasOne(User, { onDelete: "CASCADE" });
User.belongsTo(Location, { onDelete: "CASCADE" });

module.exports = User;

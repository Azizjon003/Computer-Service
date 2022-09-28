const sequelize = require("../configs/db");

const { DataTypes, Sequelize } = require("sequelize");
const useBcrypt = require("sequelize-bcrypt");

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
  role: { type: Sequelize.STRING, allowNull: false, defaultValue: "user" },
});

useBcrypt(User, {
  field: "password", // secret field to hash, default: 'password'
  rounds: 12, // used to generate bcrypt salt, default: 12
  compare: "authenticate", // method used to compare secrets, default: 'authenticate'
});

User.sync({ alter: true });

module.exports = User;

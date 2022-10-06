<<<<<<< HEAD
const User = (sequelize, DataTypes) => {
  const User = sequelize.define("users", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    first_name: { type: DataTypes.STRING, allowNull: false },
    last_name: { type: DataTypes.STRING, allowNull: false },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isAlphanumeric: true,
        len: [3, 20],
      },
    },
    email: { type: DataTypes.STRING, allowNull: false },
    phone: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    role: {
      type: DataTypes.ENUM,
      defaultValue: "user",
      values: ["admin", "user", "moderator"],
    },
  });
  return User;
};
=======
const sequelize = require("../configs/db");
const bcrypt = require("bcrypt");

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
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
    unique: [true, "The email should be unique"],
  },
  phone: { type: DataTypes.STRING, allowNull: false },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [7, 16],
        msg: "The password length should be between 7 and 16 characters.",
      },
    },
  },
  role: { type: Sequelize.STRING, allowNull: false, defaultValue: "user" },
});

User.beforeCreate(async (user, options) => {
  const hashedPassword = await bcrypt.hash(user.password, 12);
  user.password = hashedPassword;
});

// User.drop({ force: true });
User.sync({ alter: true });

>>>>>>> e424b262be26ea74cbdea8d4518623c95d8048ef
module.exports = User;

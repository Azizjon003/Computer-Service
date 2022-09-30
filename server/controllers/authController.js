const User = require("../models/userModel");
const catchErrAsync = require("../utility/catchErrAsync");
const jwt = require("jsonwebtoken");
const AppError = require("../utility/AppError");
const e = require("express");
const Bcrypt = require("bcrypt");

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

// Register user

const register = catchErrAsync(async (req, res, next) => {
  const { first_name, last_name, email, username, phone, password } = req.body;

  const alreadyExistsUser = await User.findOne({ where: { email } });

  if (alreadyExistsUser) {
    res.status(404).json({
      status: "failed",
      message: "This user already exists",
    });
  } else {
    const newUser = await User.create({
      first_name,
      last_name,
      email,
      username,
      phone,
      password,
    });
    const token = createToken(newUser.id);

    res.status(200).json({
      status: "success",
      token,
      message: "A new user succesfully registered",
      user: newUser,
    });
  }
});

// Login user

const login = catchErrAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new AppError("Please enter email or password!"));
  }

  const user = await User.findOne({ where: { email: req.body.email } });

  if (!user) {
    return next(new AppError("This user has not found!"));
  }

  const check = await Bcrypt.compare(password, user.password);

  if (!check) {
    console.log("ifga kidi");
    return next(new AppError("Siz notogri parol kiritdingiz!", 404));
  }

  const token = createToken(user.id);

  res.status(200).json({
    status: "succesfull",
    user: user,
    token: token,
  });
});

module.exports = { register, login };

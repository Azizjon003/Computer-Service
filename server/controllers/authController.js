const User = require("../models/userModel");
const catchErrAsync = require("../utility/catchErrAsync");

// Register user

const register = catchErrAsync(async (req, res, next) => {
  const { first_name, last_name, email, username, phone, password } = req.body;

  const alreadyExistsUser = await User.findOne({ where: { email } });

  if (alreadyExistsUser) {
    res.status(404).json({
      status: "failed",
      message: "This user already exists",
    });
  }
  const newUser = await User.create({
    first_name,
    last_name,
    email,
    username,
    phone,
    password,
  });

  console.log("----------------------------------------------------------");
  console.log(newUser.authenticate("12345"));
  console.log("----------------------------------------------------------");

  res.status(200).json({
    status: "success",
    message: "A new user succesfully registered",
    user: newUser,
  });
});

module.exports = { register };

const ReviewForWorkers = require("../models/reviewForWorkersModel");
const ReviewForServiceType = require("../models/reviewForServiceType");
const SubmitVacancy = require("../models/submitVacancyModel");
const User = require("../models/userModel");
const catchErrAsync = require("../utility/catchErrAsync");

// const Location = require("../models/locationsModel");

const getAll = catchErrAsync(async (req, res, next) => {
  const users = await User.findAll({
    include: [
      {
        model: SubmitVacancy,
      },
      {
        model: ReviewForWorkers,
      },
      {
        model: ReviewForServiceType,
      },
    ],
  }); // required:true

  res.status(200).json({
    data: users,
  });
});

const add = catchErrAsync(async (req, res, next) => {
  const user = await User.create(req.body);
  res.status(200).json({
    data: user,
  });
});

const delete1 = catchErrAsync(async (req, res, next) => {
  await User.destroy({ where: { id: req.params.id } });
  res.status(200).json({
    data: "success",
  });
});
const getOne = catchErrAsync(async (req, res, next) => {
  const user = await User.findOne({
    where: { id: req.params.id },
    include: { model: Location },
  });
  res.status(200).json({
    data: user,
  });
});
const update = catchErrAsync(async (req, res, next) => {
  const user = await User.findOne({ where: { id: req.params.id } });

  user.first_name = req.body.first_name || user.first_name;
  user.last_name = req.body.last_name || user.last_name;
  user.username = req.body.username || user.username;
  user.email = req.body.email || user.email;
  user.phone = req.body.phone || user.phone;
  user.password = req.body.password || user.password;
  user.locationId = req.body.locationId || user.locationId;

  const newUser = await user.save();

  res.status(200).json({
    data: newUser,
  });
});

module.exports = {
  add,
  getAll,
  delete1,
  getOne,
  update,
};

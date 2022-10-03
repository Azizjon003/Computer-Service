const Worker = require("../models/workersModel");
const ReviewForServiceType = require("../models/reviewForServiceType");

const User = require("../models/userModel");
const ServiceType = require("../models/serviseTypesModel");
const catchErrAsync = require("../utility/catchErrAsync");

const getAll = catchErrAsync(async (req, res, next) => {
  const reviewForServiceType = await ReviewForServiceType.findAll({
    include: [
      {
        model: ServiceType,
      },
      {
        model: User,
      },
    ],
  });

  res.status(200).json({
    datas: reviewForServiceType.length,
    data: reviewForServiceType,
  });
});

const add = catchErrAsync(async (req, res, next) => {
  const reviewForServiceType = await ReviewForServiceType.create(req.body);
  res.status(200).json({
    data: reviewForServiceType,
  });
});

const delete1 = catchErrAsync(async (req, res, next) => {
  await ReviewForServiceType.destroy({ where: { id: req.params.id } });
  res.status(200).json({
    data: "success",
  });
});
const getOne = catchErrAsync(async (req, res, next) => {
  const reviewForServiceType = await ReviewForServiceType.findOne({
    where: { id: req.params.id },
    include: [
      {
        model: ServiceType,
      },
      {
        model: User,
      },
    ],
  });
  res.status(200).json({
    data: reviewForServiceType,
  });
});

module.exports = {
  add,
  getAll,
  delete1,
  getOne,
};

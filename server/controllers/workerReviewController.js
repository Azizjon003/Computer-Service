const Worker = require("../models/workersModel");

const WorkerReview = require("../models/reviewForWorkersModel");
const User = require("../models/userModel");
const catchErrAsync = require("../utility/catchErrAsync");

const getAll = catchErrAsync(async (req, res, next) => {
  const workerReview = await WorkerReview.findAll({
    include: [
      {
        model: Worker,
      },
      {
        model: User,
      },
    ],
  });

  res.status(200).json({
    datas: workerReview.length,
    data: workerReview,
  });
});

const add = catchErrAsync(async (req, res, next) => {
  const workerReview = await WorkerReview.create(req.body);
  res.status(200).json({
    data: workerReview,
  });
});

const delete1 = catchErrAsync(async (req, res, next) => {
  await WorkerReview.destroy({ where: { id: req.params.id } });
  res.status(200).json({
    data: "success",
  });
});
const getOne = catchErrAsync(async (req, res, next) => {
  const workerReview = await WorkerReview.findOne({
    where: { id: req.params.id },
    include: [
      {
        model: Worker,
      },
      {
        model: User,
      },
    ],
  });
  res.status(200).json({
    data: workerReview,
  });
});

module.exports = {
  add,
  getAll,
  delete1,
  getOne,
};

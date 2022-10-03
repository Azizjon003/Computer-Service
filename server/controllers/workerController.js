const Worker = require("../models/workersModel");
const ServiceType = require("../models/serviseTypesModel");
const ReviewForWorkers = require("../models/reviewForWorkersModel");
const User = require("../models/userModel");
const catchErrAsync = require("../utility/catchErrAsync");

const getAll = catchErrAsync(async (req, res, next) => {
  const worker = await Worker.findAll({
    include: [
      {
        model: ServiceType,
      },
      {
        model: ReviewForWorkers,
        include: [
          {
            model: User,
          },
        ],
      },
    ],
  });

  res.status(200).json({
    datas: worker.length,
    data: worker,
  });
});

const add = catchErrAsync(async (req, res, next) => {
  const worker = await Worker.create(req.body);
  res.status(200).json({
    data: worker,
  });
});

const delete1 = catchErrAsync(async (req, res, next) => {
  await Worker.destroy({ where: { id: req.params.id } });
  res.status(200).json({
    data: "success",
  });
});
const getOne = catchErrAsync(async (req, res, next) => {
  const worker = await Worker.findOne({
    where: { id: req.params.id },
    include: [
      {
        model: ServiceType,
      },
      {
        model: ReviewForWorkers,
        include: [
          {
            model: User,
          },
        ],
      },
    ],
  });
  res.status(200).json({
    data: worker,
  });
});

const update = catchErrAsync(async (req, res, next) => {
  const worker = await Worker.findOne({
    where: { id: req.params.id },
  });

  worker.status = req.body.status || worker.status;

  const newWorker = await worker.save();

  res.status(200).json({
    data: newWorker,
  });
});

module.exports = {
  add,
  getAll,
  delete1,
  getOne,
  update,
};

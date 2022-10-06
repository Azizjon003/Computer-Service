const Service = require("../models/servicesModel");
const ServiseTypes = require("../models/serviseTypesModel");
const catchErrAsync = require("../utility/catchErrAsync");

const getAll = catchErrAsync(async (req, res, next) => {
  const service = await Service.findAll({
    include: ServiseTypes,
  });

  res.status(200).json({
    data: service,
  });
});

const add = catchErrAsync(async (req, res, next) => {
  const service = await Service.create(req.body);
  res.status(200).json({
    data: service,
  });
});

const delete1 = catchErrAsync(async (req, res, next) => {
  await Service.destroy({ where: { id: req.params.id } });
  res.status(200).json({
    data: "success",
  });
});
const getOne = catchErrAsync(async (req, res, next) => {
  const service = await Service.findOne({
    where: { id: req.params.id },
  });
  res.status(200).json({
    data: service,
  });
});
const update = catchErrAsync(async (req, res, next) => {
  const service = await Service.findOne({
    where: { id: req.params.id },
  });

  service.name = req.body.name || service.name;

  const newService = await service.save();

  res.status(200).json({
    data: newService,
  });
});

module.exports = {
  add,
  getAll,
  delete1,
  getOne,
  update,
};
